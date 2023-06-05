import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        token: null,
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
        },
    },
    actions: {
        async login({ commit }, { username, password }) {
            try {
                const response = await axios.post('https://smdd-server.onrender.com/api/login', { username, password });
                const token = response.data.token;
                commit('setToken', token);
                console.log('Token:', token);
                return token;
            } catch (error) {
                throw error;
            }
        },
        logout({ commit }) {
            commit('setToken', null);
        },
    },
});
