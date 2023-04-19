<template>
  <div>
    <upload-multi-image-component name="path" @onChangeFile="onChangeFile" />
  </div>
</template>

<script>
export default {
  methods: {
    async onChangeFile(data) {
      this.$emit("onChangeFile", data);
    },
  },
};
</script>

<style></style>
