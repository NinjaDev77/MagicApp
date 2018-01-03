import Vue from 'vue';
import router from '../../router';

const state = {
  isAuthenticated: false,
  token: '',
  user:{},
  forgotPassClicked:false,
};

const getters = {
  isAuthenticated: (state) => {
    return state.isAuthenticated;
  },
  token: (state) => {
    return state.token;
  },
  user: (state) => {
    return state.user;
  }
};

const mutations = {
  userSignIn: (state, payload) => {
    state.isAuthenticated = true;
    state.token = payload.userToken;
    state.user = payload;
    localStorage.setItem('token', payload.userToken);
    localStorage.setItem('user', JSON.stringify(payload));
  },
  userSignOut: (state) => {
    state.isAuthenticated = false;
    state.token = '';
    state.user = {};
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },
  checkUserAuthentication: (state) => {
    if (localStorage.getItem('token') !== null && localStorage.getItem('token') !== undefined) {
      state.isAuthenticated = true;
      state.token = localStorage.getItem('token');
      state.user = JSON.parse(localStorage.getItem('user'));
      router.push('/magic');
    } else {
      state.isAuthenticated = false;
      state.token = '';
      state.user = {};
      router.push('/login');
    }
  },
  toggleForgotPasswordClicked:(state)=>{
    state.forgotPassClicked = !state.forgotPassClicked
  }
};

const actions = {
  userSignIn: ({commit}, payload) => {
    Vue.http.post('userlogin', payload)
      .then(
        (res) => {
          if(res.body.status) {
            // console.log(res.body.response);
            commit('userSignIn',res.body.response);
            router.push('/magic');
          } else {

          }
        },
        (err) => {
          console.log(err);
        }
      )
  },
  userSignUp: ({commit}, payload) => {
    Vue.http.post('signup', payload)
      .then(
        (res) => {
          if(res.body.status) {
            // console.log(res.body.response);
            commit('userSignIn',res.body.response);
            router.push('/magic');
          } else {

          }
        },
        (err) => {
          console.log(err);
        }
      )
  },
    userSignOut:({commit})=>{
      commit('userSignOut');
      router.push('/login');
    }
};

export default { state, getters, mutations, actions }
