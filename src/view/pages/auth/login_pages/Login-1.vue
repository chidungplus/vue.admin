<template>
  <div class="d-flex flex-column flex-root">
    <div
      class="login login-1 d-flex flex-column flex-lg-row flex-column-fluid bg-white"
      :class="{
        'login-signin-on': this.state == 'signin',
        'login-signup-on': this.state == 'signup',
        'login-forgot-on': this.state == 'forgot',
      }"
      id="kt_login"
    >
      <!--begin::Aside-->
      <div
        class="login-aside d-flex flex-column flex-row-auto"
        style="background-color: #f2c98a"
      >
        <div class="d-flex flex-column-auto flex-column pt-lg-40 pt-15">
          <a href="#" class="text-center mb-10">
            <img
              src="media/logos/logo-letter-1.png"
              class="max-h-70px"
              alt=""
            />
          </a>
          <h3
            class="font-weight-bolder text-center font-size-h4 font-size-h1-lg"
            style="color: #986923"
          >
            Discover Amazing Metronic <br />with great build tools
          </h3>
        </div>
        <div
          class="aside-img d-flex flex-row-fluid bgi-no-repeat bgi-position-y-bottom bgi-position-x-center"
          :style="{ backgroundImage: `url(${backgroundImage})` }"
        ></div>
      </div>
      <!--begin::Aside-->
      <!--begin::Content-->
      <div
        class="login-content flex-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden p-7 mx-auto"
      >
        <div class="d-flex flex-column-fluid flex-center">
          <!--begin::Signin-->
          <div class="login-form login-signin">
            <form
              class="form"
              novalidate="novalidate"
              id="kt_login_signin_form"
            >
              <div class="pb-13 pt-lg-0 pt-5">
                <h3
                  class="font-weight-bolder text-dark font-size-h4 font-size-h1-lg"
                >
                  Welcome to admin
                </h3>
                <span class="text-muted font-weight-bold font-size-h4"
                  >New Here?
                  <a
                    id="kt_login_signup"
                    class="text-primary font-weight-bolder"
                    @click="showForm('signup')"
                    >Create an Account</a
                  ></span
                >
              </div>
              <input-component
                name="email"
                v-model="formData.email"
                label="Email"
                :error="errors"
              />
              <input-component
                type="password"
                name="password"
                v-model="formData.password"
                label="Password"
                :error="errors"
              />
              <a
                class="text-primary font-size-h6 font-weight-bolder text-hover-primary pt-5"
                id="kt_login_forgot"
                @click="showForm('forgot')"
                >Forgot Password ?</a
              >
              <div class="pb-lg-0 pb-5">
                <button
                  ref="kt_login_signin_submit"
                  :class="`btn btn-primary font-weight-bolder font-size-h6 px-15 py-4 my-3 mr-3 ${loadingClass}`"
                  @click="login"
                  type="button"
                >
                  Sign In
                </button>
                <button
                  type="button"
                  class="btn btn-light-primary font-weight-bolder px-8 py-4 my-3 font-size-lg"
                >
                  <span class="svg-icon svg-icon-md">
                    <inline-svg
                      src="media/svg/social-icons/google.svg"
                    /> </span
                  >Sign in with Google
                </button>
              </div>
            </form>
          </div>
          <!--end::Signin-->
          <!--begin::Signup-->
          <div class="login-form login-signup">
            <form
              class="form"
              novalidate="novalidate"
              id="kt_login_signup_form"
            >
              <div class="pb-13 pt-lg-0 pt-5">
                <h3
                  class="font-weight-bolder text-dark font-size-h4 font-size-h1-lg"
                >
                  Sign Up
                </h3>
                <p class="text-muted font-weight-bold font-size-h4">
                  Enter your details to create your account
                </p>
              </div>
              <input-component
                name="name"
                v-model="formData.name"
                placeholder="Full name"
                :error="errors"
              />
              <input-component
                name="email"
                v-model="formData.email"
                placeholder="Email"
                :error="errors"
              />
              <input-component
                name="password"
                v-model="formData.password"
                placeholder="Password"
                :error="errors"
                type="password"
              />
              <div class="form-group">
                <label class="checkbox mb-0">
                  <input type="checkbox" name="agree" />
                  <span class="mr-2"></span>
                  I Agree the
                  <a href="#" class="ml-2">terms and conditions</a>.
                </label>
              </div>
              <div class="form-group d-flex flex-wrap pb-lg-0 pb-3">
                <button
                  ref="kt_login_signup_submit"
                  :class="`btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-4 ${loadingClass}`"
                  style="width: 150px"
                  type="button"
                  @click="register"
                >
                  Submit
                </button>
                <button
                  type="button"
                  id="kt_login_signup_cancel"
                  class="btn btn-light-primary font-weight-bolder font-size-h6 px-8 py-4 my-3"
                  @click="showForm('signin')"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
          <!--end::Signup-->
          <!--begin::Forgot-->
          <div class="login-form login-forgot">
            <!--begin::Form-->
            <form
              class="form"
              novalidate="novalidate"
              id="kt_login_forgot_form"
              ref="kt_login_forgot_form"
            >
              <div class="pb-13 pt-lg-0 pt-5">
                <h3
                  class="font-weight-bolder text-dark font-size-h4 font-size-h1-lg"
                >
                  Forgotten Password ?
                </h3>
                <p class="text-muted font-weight-bold font-size-h4">
                  Enter your email to reset your password
                </p>
              </div>
              <div class="form-group">
                <input
                  class="form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6"
                  type="email"
                  placeholder="Email"
                  name="email"
                  autocomplete="off"
                />
              </div>
              <div class="form-group d-flex flex-wrap pb-lg-0">
                <button
                  type="button"
                  id="kt_login_forgot_submit"
                  class="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-4"
                >
                  Submit
                </button>
                <button
                  type="button"
                  id="kt_login_forgot_cancel"
                  class="btn btn-light-primary font-weight-bolder font-size-h6 px-8 py-4 my-3"
                  @click="showForm('signin')"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
          <!--end::Forgot-->
        </div>
      </div>
      <!--end::Content-->
    </div>
  </div>
</template>

<!-- Load login custom page styles -->
<style lang="scss">
@import "@/assets/sass/pages/login/login-1.scss";
</style>

<script>
// import formValidation from "@/assets/plugins/formvalidation/dist/es6/core/Core";

// FormValidation plugins
// import Trigger from "@/assets/plugins/formvalidation/dist/es6/plugins/Trigger";
// import Bootstrap from "@/assets/plugins/formvalidation/dist/es6/plugins/Bootstrap";
// import SubmitButton from "@/assets/plugins/formvalidation/dist/es6/plugins/SubmitButton";

import KTUtil from "@/assets/js/components/util";
import { mapGetters, mapState } from "vuex";
// import { LOGIN, LOGOUT, REGISTER } from "@/core/services/store/auth.module";
import { REGISTER, LOGIN } from "@/core/services/store/auth.module";
import Swal from "sweetalert2";

export default {
  name: "login-1",
  data() {
    return {
      state: "signin",
      loadingClass: "",
      formData: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  computed: {
    ...mapState({
      errors: (state) => state.auth.errors,
    }),
    ...mapGetters(["currentUser"]),

    backgroundImage() {
      return (
        process.env.BASE_URL + "media/svg/illustrations/login-visual-1.svg"
      );
    },
  },
  methods: {
    showForm(form) {
      this.state = form;
      var form_name = "kt_login_" + form + "_form";
      KTUtil.animateClass(
        KTUtil.getById(form_name),
        "animate__animated animate__backInUp"
      );
    },
    register() {
      this.loadingClass = "spinner spinner-light spinner-right";
      this.$store
        .dispatch(REGISTER, {
          ...this.formData,
        })
        .then(() => {
          this.$router.push({ name: "dashboard" });
        })
        .catch(() => {
          this.loadingClass = "";
          if (this.errors["message"]) {
            Swal.fire({
              title: "Error!",
              text: this.errors["message"],
              icon: "error",
              confirmButtonClass: "btn btn-secondary",
              heightAuto: false,
            });
          }
        });
    },
    async login() {
      this.loadingClass = "spinner spinner-light spinner-right";
      this.$store
        .dispatch(LOGIN, { ...this.formData })
        .then(() => this.$router.push({ name: "dashboard" }))
        .catch(() => {
          this.loadingClass = "";
          if (this.errors["message"]) {
            Swal.fire({
              title: "Error!",
              text: this.errors["message"],
              icon: "error",
              confirmButtonClass: "btn btn-secondary",
              heightAuto: false,
            });
          }
        });
    },
  },
};
</script>
