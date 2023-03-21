<template>
  <SectionForm 
    :formData="formData"
    @onChangeInput="onChangeInput"
  />
</template>

<script>
import SectionForm from "@/view/pages/product/form/default.vue";
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
      }
  }
};
</script>

<style></style>
