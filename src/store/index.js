import Vue from 'vue'
import Vuex from 'vuex'
import createClient from './apollo'
import createVuexCache from './apollo-cache-vuex'

import auth from './auth'
import issues from './issues'
import messages from './messages'

Vue.use(Vuex)

const apolloPlugin = (createClient, options) => store => {
  store.registerModule('apollo', {
    state: {
      client: null,
      objects: {},
    },
    mutations: {
      apolloSet(state, { obj, property, value }) {
        Vue.set(obj, property, value)
      },
      apolloClient(state) {
        state.client = createClient(store, createVuexCache(store, options))
      },
    },
    actions: {
      load({ state, commit }, query) {
        if (!state.client)
          commit('apolloClient')
        return state.client.query({ query })
      },
      mutate({ state, commit }, mutation) {
        if (!state.client)
          commit('apolloClient')
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
