<template>
  <div>
    <div class="progress">
      <div class="progress-bar">0%</div>
    </div>
    <button type="reset" class="btn-reset">Reset</button>
    <button type="submit" class="btn-submit">Upload</button>
    <input
      type="file"
      :name="name"
      multiple="true"
      @change="filesChange($event.target.name, $event.target.files)"
      accept="image/*"
    />
    <div class="output"></div>
    <div class="box-preview-img"></div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      default: "",
    },
  },
  data() {
    return {
      img_file: [],
    };
  },
  methods: {
    filesChange(name, files) {
      const data = { name, files };
      this.$emit("onChangeFile", data);
    },
  },
};
</script>

<style>
/* Box upload */
.box-upload {
  margin: 20px auto;
  border: 1px solid #e5e5e5;
  background-color: #fff;
  padding: 10px;
}
.box-upload h2 {
  text-align: center;
  margin-bottom: 20px;
}
.progress {
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  margin-bottom: 10px;
  display: none;
}
.progress-bar {
  background-color: #428bca;
  color: #fff;
  text-align: center;
  border-radius: 4px;
  width: 0;
}
input[type="file"] {
  display: block;
  font-size: 14px;
}
.box-preview-img {
  margin-top: 10px;
  display: none;
}
.box-preview-img p {
  font-weight: bold;
}
.box-preview-img img {
  width: 24%;
  border: 1px solid #e5e5e5;
  margin-right: 5px;
  margin-top: 5px;
}
button.btn-reset {
  background-color: #fff;
  border: 1px solid #ccc;
  color: #444;
}
button.btn-submit {
  background-color: #428bca;
  border: 1px solid #428bca;
  color: #fff;
}
.output {
  display: none;
  background-color: #d9534f;
  color: #fff;
  padding: 7px;
  border-radius: 4px;
  margin-top: 10px;
}
.success {
  background-color: #5cb85c;
}

.alert-success span {
  color: red;
  font-weight: bold;
}
.alert-success .highlight {
  color: #ff9800;
  font-weight: bold;
}
.label-random {
  width: 100px;
}
.panel-default {
  padding-bottom: 20px;
}
</style>
