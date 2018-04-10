import { login } from './api.graphql'

export default {
  namespaced: true,
  state: {
    basic: '',
    objects: {},
  },
  getters: {
    token: (state) => {
      const len = Object.keys(state.objects).length
      if (len === 0) {
        if (state.basic) { return `Basic ${state.basic}` }
        return undefined
      }
      if (len > 1) { throw new Error('Too many tokens!') }
      return `Bearer ${Object.values(state.objects)[0].token}`
    },
    ok: (_, getters) => !!getters.token,
  },
  mutations: {
    setBasic(state, { email, password }) {
      state.basic = btoa(unescape(encodeURIComponent(`${email}:${password}`)))
    },
    unsetBasic(state) {
      state.basic = ''
    },
  },
  actions: {
    async login({ commit, dispatch }, { email, password }) {
      commit('setBasic', { email, password })
      await dispatch('mutate', login, { root: true })
      commit('unsetBasic')
    },
  },
}
