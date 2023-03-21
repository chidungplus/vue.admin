<template>
  <div :class="parentClass">
    <label :class="labelClass" v-if="label">{{ label }}</label>
    <select :name="name" :class="classSelect" v-model="inputVal">
      <option value=""></option>
      <option
        :value="option.id"
        v-for="(option, index) in options"
        :key="index"
      >
        {{ option.name }}
      </option>
    </select>
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
    classSelect: {
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
    options: {
      default: () => [],
    },
    error: {
      default: () => {},
    },
    label: {
      default: "",
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
