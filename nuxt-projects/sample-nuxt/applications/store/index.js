export const state = () => ({
    domain: '',
    // counter: 0,
});

export const mutations = {
    // increment(state) {
    //     state.counter++;
    // },
    setDomain(state, domain) {
        state.domain = domain;
    },
};

export const actions = {
    nuxtServerInit(store, context) {
        store.commit('setDomain', context.req.headers.host);
    },
};

export const getters = {
    domain: (state) => state.domain,
};