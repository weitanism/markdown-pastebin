import Vue from "vue";
import App from "./App.vue";

new Vue({
  http: {
    root: "/root"
  },
  render: h => h(App)
}).$mount("#app");
