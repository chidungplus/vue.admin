import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "@/core/plugins/vue-i18n";

Vue.config.productionTip = false;
// router.beforeEach((to, from, next) => {
//     // Ensure we checked auth before each page load.
//     Promise.all([store.dispatch(VERIFY_AUTH)]).then(next);

//     // reset config to initial state
//     store.dispatch(RESET_LAYOUT_CONFIG);

//     // Scroll page to top on every route change
//     setTimeout(() => {
//       window.scrollTo(0, 0);
//     }, 100);
//   });
new Vue({
  render: (h) => h(App),
  router,
  i18n,
}).$mount("#app");
