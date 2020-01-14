export const state = () => ({
  filters: []
})

export const getters = {
  filters: state => state.filters
}

export const mutations = {
  SET_FILTER (state, payload) {
    state.filters.push(payload)
  },
  SET_GROUP_FILTERS (state, payload) {
    payload.forEach(payloadFilter => {
      if (!state.filters.some(storeFilter => storeFilter.value === payloadFilter.value)) {
        state.filters.push(payloadFilter)
      }
    })
  },
  UNSET_FILTER (state, payload) {
    state.filters = state.filters.filter(filter => filter.value !== payload.value)
  },
  UNSET_GROUP_FILTERS (state, payload) {
    state.filters = state.filters.filter(filter => filter.alias !== payload.alias)
  },
  UNSET_ALL_FILTERS (state) {
    state.filters = []
  }
}

export const actions = {
  setFilter ({ commit }, payload) {
    commit('SET_FILTER', payload)
  }
}