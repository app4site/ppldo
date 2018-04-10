import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory'
import introspectionQueryResultData from './fragmentTypes.json'

class ObjectCache {
  store = null
  map = null
  constructor(data = {}, store, { mapModules = {} }) {
    this.store = store
    this.map = mapModules
  }
  toObject() {
    return this.store.state.apollo.objects
  }
  get(dataId) {
    const parts = dataId.split(':')
    if (parts.length > 1 && Object.keys(this.map).includes(parts[0])) { return this.store.state[this.map[parts[0]]].objects[parts[1]] }
    return this.store.state.apollo.objects[dataId]
  }
  set(dataId, value) {
    const parts = dataId.split(':')
    if (parts.length > 1 && Object.keys(this.map).includes(parts[0])) {
      this.store.commit('apolloSet', {
        obj: this.store.state[this.map[parts[0]]].objects,
        property: parts[1],
        value,
      })
    } else {
      this.store.commit('apolloSet', {
        obj: this.store.state.apollo.objects,
        property: dataId,
        value,
      })
    }
  }
  delete(dataId) {
    this.set(dataId, undefined)
  }
  clear() {
  }
  replace(newData) {
  }
}

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData,
})

export default (store, options) => new InMemoryCache({
  storeFactory: seed => new ObjectCache(seed, store, options),
  fragmentMatcher,
})
