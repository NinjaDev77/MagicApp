import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource';
import router from './router'
import store from './store/index';
import Vuelidate from 'vuelidate'

Vue.use(VueResource);
Vue.use(Vuelidate)

Vue.http.options.root = 'http://127.0.0.1:8000/api/';
Vue.config.productionTip = false
Vue.http.interceptors.push((request, next) => {
  request.headers.set('Content-Type', 'application/json');
  //request.headers.set('Access-Control-Allow-Origin', '*');
  //request.headers.set('Access-Control-Request-Method', '*');
  //request.headers.set('')
  next()
});

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
