// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource';
import router from './router'
import store from './store/index'

Vue.use(VueResource);
Vue.http.options.root = 'http://127.0.0.1:8000/api/';
Vue.config.productionTip = false
// Vue.http.interceptors.push((request, next) => {
//   request.headers.set('Accept', 'application/json');
// });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
