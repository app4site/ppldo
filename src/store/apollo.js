import { ApolloClient } from 'apollo-client'
import { onError } from 'apollo-link-error'
import { ApolloLink, split } from 'apollo-link'
import { setContext } from 'apollo-link-context'
import { HttpLink } from 'apollo-link-http'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'

const gqlUrl = 'https://ppldo-graphql-test.herokuapp.com/graphql'

const httpLink = new HttpLink({
  uri: gqlUrl,
})

const wsLink = new WebSocketLink({
  uri: gqlUrl.replace('https', 'wss'),
  options: {
    reconnect: true,
  },
})

export default (store, cache) => {
  const authLink = setContext((_, { headers }) => {
    const token = store.getters['auth/token']
    return {
      headers: {
        ...headers,
        authorization: token,
      },
    }
  })

  const link = split(
    ({ query }) => {
      const { kind, operation } = getMainDefinition(query)
      return kind === 'OperationDefinition' && operation === 'subscription'
    },
    wsLink,
    authLink.concat(httpLink),
  )

  return new ApolloClient({
    link: ApolloLink.from([
      onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors) {
          graphQLErrors.map(({ message, locations, path }) =>
            console.error(`[GraphQL error]: Message: ${message}, Path: ${path} ${JSON.stringify(locations)}`))
        }
        if (networkError) { console.log(`[Network error]: ${networkError}`) }
      }),
      link,
    ]),
    cache,
  })
}
