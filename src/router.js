import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/dashboard",
      component: () => import("@/view/layout/Layout"),
      children: [
        {
          path: "/dashboard",
          name: "dashboard",
          component: () => import("@/view/pages/Dashboard.vue"),
        },
        {
          path: "/products",
          name: "products",
          component: () => import("@/view/pages/product/Index.vue"),
        },
        {
          path: "/builder",
          name: "builder",
          //   component: () => import("@/view/pages/Builder.vue"),
        },
        {
          path: "/vue-bootstrap",
          name: "vue-bootstrap",
          //   component: () => import("@/view/pages/vue-bootstrap/VueBootstrap.vue"),
          children: [
            {
              path: "alert",
              name: "vue-bootstrap-alert",
              //   component: () => import("@/view/pages/vue-bootstrap/Alert.vue"),
            },
          ],
        },
        {
          path: "/profile",
          name: "profile",
          //   component: () => import("@/view/pages/profile/Profile.vue"),
          children: [
            {
              path: "profile-1",
              name: "profile-1",
              //   component: () => import("@/view/pages/profile/Profile-1.vue"),
            },
          ],
        },
      ],
    },
    {
      path: "/custom-error",
      name: "error",
      //   component: () => import("@/view/pages/error/Error.vue"),
      children: [
        {
          path: "error-1",
          name: "error-1",
          //   component: () => import("@/view/pages/error/Error-1.vue"),
        },
      ],
    },
    {
      path: "/",
      component: () => import("@/view/pages/auth/login_pages/Login-1"),
      children: [
        {
          name: "login",
          path: "/login",
          component: () => import("@/view/pages/auth/login_pages/Login-1"),
        },
        {
          name: "register",
          path: "/register",
          //   component: () => import("@/view/pages/auth/login_pages/Login-1"),
        },
      ],
    },
    {
      path: "*",
      redirect: "/404",
    },
    {
      // the 404 route, when none of the above matches
      path: "/404",
      name: "404",
        component: () => import("@/view/pages/error/Error-1.vue"),
    },
  ],
});
