import Vue from 'vue';
import router from '../../router';

const state = {
  isAuthenticated: false,
  token: '',
  user:{},
  forgotPassClicked:false,
  test : "test"
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
  },
  forgotPassClicked:(state) =>{
    return state.forgotPassClicked
  },
  test:(state)=>{
    return state.test
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
    } else {
      state.isAuthenticated = false;
      state.token = '';
      state.user = {};
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
  }
};

export default { state, getters, mutations, actions }
