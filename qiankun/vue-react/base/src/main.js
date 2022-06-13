import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { registerMicroApps, start } from "qiankun"

//Vue.config.productionTip = false;
const apps = [
  {
    name: "vueApp",
    entry: "http://localhost:8081",
    container: "#vue",
    activeRule: "/vue"
  },
  {
    name: "reactApp",
    entry: "http://localhost:8082",
    container: "#react",
    activeRule: "/react"
  }
]

registerMicroApps(apps);
start({
  prefetch: false//取消预加载
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
