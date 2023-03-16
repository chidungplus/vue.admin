<template>
  <div class="d-flex flex-column flex-root" v-if="isAuthenticated">
    <!-- begin:: Header Mobile -->
    <HeaderMobileComponent></HeaderMobileComponent>
    <!-- end:: Header Mobile -->

    <!-- <Loader v-if="loaderEnabled" v-bind:logo="loaderLogo"></Loader> -->

    <!-- begin::Body -->
    <div class="d-flex flex-row flex-column-fluid page">
      <!-- begin:: Aside Left -->
      <AsideComponent v-if="asideEnabled"></AsideComponent>
      <!-- end:: Aside Left -->

      <div id="kt_wrapper" class="d-flex flex-column flex-row-fluid wrapper">
        <!-- begin:: Header -->
        <HeaderComponent></HeaderComponent>
        <!-- end:: Header -->

        <!-- begin:: Content -->
        <div
          id="kt_content"
          class="content d-flex flex-column flex-column-fluid"
        >
          <!-- begin:: Content Head -->

          <!-- begin:: Content Head -->
          <SubheaderComponent
            v-bind:breadcrumbs="breadcrumbs"
            v-bind:title="pageTitle"
            v-bind:routeRedirect="routeRedirect"
          />
          <!-- end:: Content Head -->

          <!-- begin:: Content Body -->
          <div class="d-flex flex-column-fluid">
            <div
              :class="{
                'container-fluid': contentFluid,
                container: !contentFluid,
              }"
            >
              <transition name="fade-in-up">
                <router-view />
              </transition>
            </div>
          </div>
        </div>
        <FooterComponent></FooterComponent>
      </div>
    </div>
    <!-- <StickyToolbarComponent v-if="toolbarDisplay"></StickyToolbarComponent> -->
    <ScrollTopComponent></ScrollTopComponent>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AsideComponent from "@/view/layout/aside/Aside.vue";
import HeaderComponent from "@/view/layout/header/Header.vue";
import HeaderMobileComponent from "@/view/layout/header/HeaderMobile.vue";
import FooterComponent from "@/view/layout/footer/Footer.vue";
import HtmlClass from "@/core/services/htmlclass.service";
import SubheaderComponent from "@/view/layout/subheader/Subheader.vue";
// import StickyToolbarComponent from "@/view/layout/extras/StickyToolbar.vue";
import ScrollTopComponent from "@/view/layout/extras/ScrollTop";
// <!-- import Loader from "@/view/content/Loader.vue"; -->
import {
  ADD_BODY_CLASSNAME,
  REMOVE_BODY_CLASSNAME,
} from "@/core/services/store/htmlclass.module.js";

export default {
  name: "Layout",
  components: {
    AsideComponent,
    HeaderComponent,
    HeaderMobileComponent,
    FooterComponent,
    SubheaderComponent,
    // StickyToolbarComponent,
    ScrollTopComponent,
    // Loader,
  },
  beforeMount() {
    // show page loading
    this.$store.dispatch(ADD_BODY_CLASSNAME, "page-loading");

    // initialize html element classes
    HtmlClass.init(this.layoutConfig());
  },
  mounted() {
    // check if current user is authenticated
    if (!this.isAuthenticated) {
      this.$router.push({ name: "login" });
    }

    // Simulate the delay page loading
    setTimeout(() => {
      // Remove page loader after some time
      this.$store.dispatch(REMOVE_BODY_CLASSNAME, "page-loading");
    }, 2000);
  },
  methods: {},
  computed: {
    ...mapGetters([
      "isAuthenticated",
      "breadcrumbs",
      "pageTitle",
      "layoutConfig",
      "routeRedirect",
    ]),

    /**
     * Check if the page loader is enabled
     * @returns {boolean}
     */
    loaderEnabled() {
      return !/false/.test(this.layoutConfig("loader.type"));
    },

    /**
     * Check if container width is fluid
     * @returns {boolean}
     */
    contentFluid() {
      return this.layoutConfig("content.width") === "fluid";
    },

    /**
     * Page loader logo image using require() function
     * @returns {string}
     */
    loaderLogo() {
      return process.env.BASE_URL + this.layoutConfig("loader.logo");
    },

    /**
     * Check if the left aside menu is enabled
     * @returns {boolean}
     */
    asideEnabled() {
      return !!this.layoutConfig("aside.self.display");
    },

    /**
     * Set the right toolbar display
     * @returns {boolean}
     */
    toolbarDisplay() {
      // return !!this.layoutConfig("toolbar.display");
      return true;
    },
  },
};
</script>
