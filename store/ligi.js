export const state = () => ({
    ligi: []
})

export const mutations = {
    setLigi(state, ligi) {
        state.ligi = ligi
    }
}

export const actions = {
    async fetch({commit}) {
        const res = await this.$axios.$get('api/competitions/')
        const ligi = res.competitions;
        commit('setLigi', ligi)
    }
}

export const getters = {
    ligi: s => s.ligi
}