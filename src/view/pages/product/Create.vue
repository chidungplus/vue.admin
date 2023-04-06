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

export default {
  components: {
    SectionForm,
  },
  data() {
      return {
          formData: {
              name: "",
              content: "",
              code: "",
              category_id: "",
          }
      }
  },
  methods: {
      onChangeInput({ value, field }) {
          this.formData[field] = value;
      },
      async onSave(productItems) {
          try {
              productItems.forEach(productItem => {
                  productItem.name = this.formData.name + '-' + productItem.name
              });
              console.log(productItems);
              const payload = {
                 ...this.formData                  
              }
              const data = await ApiService.post(ROUTES.API.PRODUCT_CREATE, payload);
              console.log(data);
          } catch (error) {
              console.log(error);
          }
      }
  }
};
</script>

<style></style>
