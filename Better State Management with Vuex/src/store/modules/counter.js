const state = {
    counter: 0
};

const getters = {
    doubleCounter: state => {
        return state.counter * 2;
    },
    stringCounter: state => {
        return state.counter + ' Clicks';
    },
};

const mutations = {
    increment: (state, payload) => {
        state.counter += payload;
    },
    decrement: (state, payload) => {
        state.counter -= payload;
    },
};

const actions = {
    increment: ({commit}, payload) => {
        commit('increment', payload);
    },
    decrement: ({commit}, payload) => {
        commit('decrement', payload);
    },
    asyncIncrement: ({commit}, {by, duration}) => {
        setTimeout(() => {
            commit('increment', by)
        }, duration)
    },
    asyncDecrement: ({commit}, {by, duration}) => {
        setTimeout(() => {
            commit('decrement', by)
        }, duration)
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
}
