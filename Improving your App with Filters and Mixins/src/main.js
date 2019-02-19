import Vue from 'vue'
import App from './App.vue'

Vue.filter('to-uppercase');

new Vue({
  el: '#app',
  render: h => h(App)
});
