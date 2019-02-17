import Vue from "vue";
import App from "./App.vue";
import Home from "./components/Home";

Vue.component("app-servers", Home);

new Vue({
  el: "#app",
  render: h => h(App)
});
