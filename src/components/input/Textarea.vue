<template>
  <div :class="parentClass">
    <label :class="labelClass" v-if="label">{{ label }}</label>
    <div>
      <textarea
        :class="classInput"
        :placeholder="placeholder"
        :name="name"
        v-model="inputVal"
        :disabled="disable"
      >
      </textarea>
      <div>
        <span v-if="errorText" class="text-danger">{{ errorText }}</span>
      </div>
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
      default: "",
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
    disable: {
      default: false,
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
  computed: {
    inputVal: {
      get() {
        return this.value;
      },
      set(val) {
        this.errorText = "";
        this.$emit("input", val);
      },
    },
  },
};
</script>

<style></style>
