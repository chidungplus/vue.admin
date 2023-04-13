<template>
  <div :class="parentClass">
    <label :class="labelClass" v-if="label">{{ label }}</label>
    <input
      :class="classInput"
      :type="type"
      :placeholder="placeholder"
      :name="name"
      :value="value[index][name]"
      @change="handleChangeInput"
    />
    <div>
      <span v-if="errorText" class="text-danger">{{ errorText }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    parentClass: {
      default: "form-group",
    },
    classInput: {
      default:
        "form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6",
    },
    labelClass: {
      default: "font-size-h6 font-weight-bolder text-dark",
    },
    value: {
      default: [],
    },
    name: {
      default: "",
    },
    placeholder: {
      default: "",
    },
    type: {
      default: "text",
    },
    error: {
      default: () => {},
    },
    label: {
      default: "",
    },
    index: {
      default: Number,
    },
  },
  watch: {
    error: function (error) {
      this.errorText = error[this.name]?.[0];
    },
  },
  data() {
    return {
      errorText: "",
    };
  },
  methods: {
    handleChangeInput(e) {
      const { name, value } = e.target;
      this.$emit("inputEvent", {
        name,
        value,
        index: this.index,
      });
    },
  },
};
</script>

<style></style>
