import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios-auth';
import globalAxios from 'axios';

Vue.use(Vuex);

import router from './router';

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    user: null,
  },
  mutations: {
    authUser (state, userData) {
      state.idToken = userData.token;
      state.userId = userData.userId;
    },
    storeUser(state, user){
      state.user = user;
    },
    clearAuthData(state) {
      state.idToken = null;
      state.userId = null;
    }
  },
  actions: {
    signup({commit, dispatch}, authData) {
      axios.post('/signupNewUser?key=AIzaSyAjEEOPkJFQn82INXn3IU--StmmIOrHIn4', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
          .then(res => {
            console.log(res);
            commit('authUser', {
              token: res.data.idToken,
              userId: res.data.localId
            });
            dispatch('storeUser', authData);
          })
          .catch(error => console.log(error));
    },
    login({commit}, authData) {
      axios.post('/verifyPassword?key=AIzaSyAjEEOPkJFQn82INXn3IU--StmmIOrHIn4', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
          .then(res => {
            console.log(res);
            commit('authUser', {
              token: res.data.idToken,
              userId: res.data.localId
            })
          })
          .catch(error => console.log(error));
    },
    logout({commit}) {
      commit('clearAuthData');
      router.replace('/signin');
    },
    storeUser({commit, state}, userData) {
      if(!state.idToken) {
        return
      }
      globalAxios.post('/users.json' + '?auth=' + state.idToken, userData)
          .then(res => console.log(res))
          .catch( error => console.log(error))
    },
    fetchUser({commit, state}) {
      if(!state.idToken) {
        return
      }
      globalAxios.get('/users.json' + '?auth=' + state.idToken)
          .then(res => {
            console.log(res);
            const data = res.data;
            const users = [];
            for (let key in data) {
              const user = data[key];
              user.id = key;
              users.push(user);
            }
            console.log(users);
            commit('storeUser', users[0]);
          })
          .catch(error => console.log(error))
    }
  },
  getters: {
    user(state) {
      return state.user;
    },
    isAuthenticated(state) {
      return state.idToken !== null;
    }
  }
})
