export const state = () => ({
    komandy: []
})

export const mutations = {
    setKomandy(state, komandy) {
        state.komandy = komandy
    }
}

export const actions = {
    async fetch({commit}) {
        const res = await this.$axios.$get('api/teams/')
        const komandy = res.teams;
        commit('setKomandy', komandy)
    }
}

export const getters = {
    komandy: s => s.komandy
}