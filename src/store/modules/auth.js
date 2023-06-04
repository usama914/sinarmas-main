import axios from 'axios'

const store = {
    state: {
        token: null
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
        }
    },
    actions: {
        login({ commit }, { username, password }) {
            return new Promise((resolve, reject) =>
                axios.post('', { username, password })
                    .then((response) => {
                        const token = response.data.token;
                        commit('setToken', token);
                        resolve(token);
                    })
                    .catch((error) => {
                        reject(error);
                    })
            )
        },
        logut({ commit }) {
            commit('setToken,null');
        }
    },
    getters: {},

}
















// const store = {
//     state: {
//         userId: null,
//         token: null,
//         tokenExpiration: null
//     },
//     getters: {
//         userId(state) {
//             return state.userId;
//         }
//     },
//     actions: {

//         login() { },
//         async signup(context, payload) {
//             const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBvOcmh_Avvu08bFdUHdmJzA06c6vV4h0E', {
//                 method: 'POST',
//                 body: JSON.stringify({
//                     email: payload.email,
//                     password: payload.password,
//                     returnSecureToken: true
//                 })
//             });

//             const responseData = await response.json();

//             if (!response.ok) {
//                 console.log(responseData);
//                 const error = new Error(responseData.message || 'Failed to authenticate.');
//                 throw error;
//             }

//             console.log(responseData);
//             context.commit('setUser', {
//                 token: responseData.idToken,
//                 userId: responseData.localId,
//                 tokenExpiration: responseData.expiresIn
//             });

//         }
//     },
//     mutations: {
//         setUser(state, payload) {
//             state.token = payload.token;
//             state.userId = payload.userId;
//             state.tokenExpiration = payload.tokenExpiration;
//         }
//     },

// }
export default {
    getters, actions, mutations
}