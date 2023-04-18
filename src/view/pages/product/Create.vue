<template>
  <SectionForm
    :formData="formData"
    @onChangeInput="onChangeInput"
    @onSave="onSave"
  />
</template>

<script>
import SectionForm from "@/view/pages/product/form/default.vue";
import ApiService from "@/core/services/api.service.js";
import { ROUTES } from "@/core/config/routes/index.js";
import { generateRandomString } from "@/core/helper/String.js";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import { appendFormData } from "@/core/helper/File.js";
export default {
  components: {
    SectionForm,
  },
  data() {
    return {
      formData: {
        name: "",
        content: "",
        product_code: "",
        category_id: "",
        thumbnail: null,
        thumbnail_id: "",
      },
    };
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      {
        title: "Product create",
        route: "products",
        routeRedirect: "products",
      },
    ]);
  },
  methods: {
    onChangeInput({ value, field }) {
      this.formData[field] = value;
    },
    async onSave(productItems) {
      try {
        productItems.forEach((productItem) => {
          productItem.name = "";
          productItem.name = this.formData.name + "-" + productItem.name;
        });
        this.formData["permalink"] = `${
          this.formData.name
        }.${generateRandomString()}`;
        const payloads = {
          ...this.formData,
          productItems,
        };
        const { data } = await ApiService.post(
          ROUTES.API.PRODUCT_CREATE,
          appendFormData(payloads)
        );
        if (data.status) {
          this.$router.push({ name: "products" });
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
