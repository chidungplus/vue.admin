<template>
  <div>
    <table-component :dataProp="dataTable" :columns="columns" />
  </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import ApiService from "@/core/services/api.service.js";
import { ROUTES } from "@/core/config/routes/index.js";
export default {
  data() {
    return {
      dataTable: [],
      columns: [],
    };
  },
  components: {},
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Tables", route: "simple-tables" },
    ]);
  },
  created() {
    this.onSearch();
    this.formatColumn();
  },
  methods: {
    async onSearch() {
      try {
        const { data } = await ApiService.get(ROUTES.API.PRODUCT_SEARCH);
        this.dataTable = data;
      } catch (error) {
        console.log(error);
      }
    },
    formatColumn() {
      this.columns = [
        {
          title: "Title",
          dataIndex: "name",
        },
        {
          title: "Content",
          dataIndex: "content",
        },
      ];
    },
  },
};
</script>
