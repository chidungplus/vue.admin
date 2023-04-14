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
  metaInfo: {
    title: "List Product",
  },
  data() {
    return {
      dataTable: [],
      columns: [],
    };
  },
  components: {},
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      {
        title: "Product list",
        route: "products",
        routeRedirect: "productCreate",
      },
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
          title: "Image",
          dataIndex: "image",
          render: (item) => item?.thumbnail?.path || ""
        },
        {
          title: "Title",
          dataIndex: "name",
        },
        {
          title: "Category",
          dataIndex: "category_id",
          render: (item) => item?.category?.name || ""
        },
        {
          title: "Quantity total",
          dataIndex: "quantity",
          render: (product) =>
            `${product?.product_items_sum_quantity || 0} (${
              product?.product_items_count
            } Biến thể)`,
        },
        {
          title: "Status",
          dataIndex: "status",
        },
        {
          title: "Date created",
          dataIndex: "created_at",
        },
      ];
    },
  },
};
</script>
