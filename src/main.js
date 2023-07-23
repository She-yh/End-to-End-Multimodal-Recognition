import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import VueRouter from "vue-router";
import "element-ui/lib/theme-chalk/index.css";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  { path: "/home", component: () => import("./pages/HomePage.vue") },
  { path: "/singleCamera", component: () => import("./pages/SingleCamera.vue") },
  { path: "/singleVideo", component: () => import("./pages/SingleVideo.vue") },
  { path: "/singleSound", component: () => import("./pages/SingleSound.vue") },
  { path: "/singleText", component: () => import("./pages/SingleText.vue") },
  { path: "/multiModal", component: () => import("./pages/MultiModal.vue") },
];

const router = new VueRouter({
  routes, // short for `routes: routes`
});

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueRouter);
new Vue({
  el: "#app",
  router: router,
  render: (h) => h(App),
});
