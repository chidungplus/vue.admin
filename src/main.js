import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "@/core/services/store";
import ApiService from "@/core/services/api.service";
// import MockService from "@/core/mock/mock.service";
import { VERIFY_AUTH } from "@/core/services/store/auth.module";
// import { RESET_LAYOUT_CONFIG } from "@/core/services/store/config.module";
import Paginate from "vuejs-paginate";
import Fragment from "vue-fragment";
Vue.config.productionTip = false;

// Global 3rd party plugins
// import "popper.js";
// import "tooltip.js";
import PerfectScrollbar from "perfect-scrollbar";
window.PerfectScrollbar = PerfectScrollbar;
import ClipboardJS from "clipboard";
window.ClipboardJS = ClipboardJS;

// Vue 3rd party plugins
import i18n from "@/core/plugins/vue-i18n";
import "@/core/plugins/portal-vue";
import "@/core/plugins/bootstrap-vue";
import "@/core/plugins/perfect-scrollbar";
import "@/core/plugins/highlight-js";
import "@/core/plugins/inline-svg";
import "@/core/plugins/apexcharts";
import "@/core/plugins/treeselect";
import "@/core/plugins/metronic";
import "@mdi/font/css/materialdesignicons.css";
import "@/core/plugins/formvalidation";
Vue.use(Fragment.Plugin);

import InputComponent from "@/components/input/default.vue";
import InputEventComponent from "@/components/input/event.vue";
import TextAreaComponent from "@/components/input/Textarea.vue";
import SelectComponent from "@/components/select/default.vue";
import TableComponent from "@/components/table/default.vue";
import UploadImage from "@/components/input/UploadImage.vue";
import UploadMultiImage from "@/components/input/UploadMultipleImage.vue";
Vue.component("input-component", InputComponent);
Vue.component("input-event-component", InputEventComponent);
Vue.component("select-component", SelectComponent);
Vue.component("table-component", TableComponent);
Vue.component("textarea-component", TextAreaComponent);
Vue.component("upload-image-component", UploadImage);
Vue.component("upload-multi-image-component", UploadMultiImage);
Vue.component("paginate", Paginate);

// API service init
ApiService.init();
import VueMeta from "vue-meta";

Vue.use(VueMeta);
// Remove this to disable mock API
// MockService.init();

router.beforeEach((to, from, next) => {
  Promise.all([store.dispatch(VERIFY_AUTH)]).then(next);
  //   store.dispatch(RESET_LAYOUT_CONFIG);
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);
});

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
