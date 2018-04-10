import Vue from 'vue'
import Vuex from 'vuex'
import createClient from './apollo'
import createVuexCache from './apollo-cache-vuex'

import auth from './auth'
import issues from './issues'
import messages from './messages'

Vue.use(Vuex)

const apolloPlugin = (createClient, options) => (store) => {
  store.registerModule('apollo', {
    state: {
      client: createClient(store, createVuexCache(store, options)),
      objects: {},
    },
    mutations: {
      apolloSet(state, { obj, property, value }) {
        Vue.set(obj, property, value)
      },
    },
    actions: {
      load({ state }, query) {
        return state.client.query({ query })
      },
      mutate({ state }, mutation) {
        return state.client.mutate({ mutation })
      },
    },
  })
}

export default new Vuex.Store({
  state: {
    selected_issue: ''
  },
  getters: {
  },
  mutations: {
    selectIssue: (state, id) => state.selected_issue = id
  },
  actions: {
  },
  modules: {
    auth,
    issues,
    messages,
  },
  plugins: [
    apolloPlugin(createClient, {
      mapModules: {
        AuthToken: 'auth',
        Issue: 'issues',
        DefaultIssue: 'issues',
        RegularMessage: 'messages',
      },
    }),
  ],
})
