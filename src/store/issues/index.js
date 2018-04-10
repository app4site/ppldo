import { loadInitial } from './api.graphql'

export default {
  namespaced: true,
  state: {
    objects: {},
  },
  getters: {
    byId: state => id => state.objects[id],
    objects: state => Object.entries(state.objects).map(([id, obj]) => ({ id, ...obj })),
  },
  mutations: {
  },
  actions: {
    async loadInitial({ dispatch }) {
      await dispatch('load', loadInitial, { root: true })
    },
  },
}
