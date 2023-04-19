<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card card-custom gutter-b example example-compact">
        <div class="card-body">
          <div>
            <table class="table b-table table-striped table-hover">
              <thead>
                <tr>
                  <th
                    v-for="(column, indexParent) in columns"
                    :key="indexParent"
                  >
                    <fragment>{{ column.title }}</fragment>
                  </th>
                </tr>
              </thead>
              <tbody>
                <template v-if="dataTable.total">
                  <tr v-for="(item, index) in dataTable.data" :key="index">
                    <td
                      v-for="column in columns"
                      :key="`${column.dataIndex}${index}`"
                    >
                      <fragment v-if="column.dataIndex == 'image'">
                        <img
                          :src="handleColumn(item, column)"
                          alt=""
                          style="width: 40px; height: 40px"
                        />
                      </fragment>
                      <fragment v-else>
                        {{ handleColumn(item, column) }}
                      </fragment>
                    </td>
                  </tr>
                </template>
                <template v-else>
                  <tr>
                    No data
                  </tr>
                </template>
              </tbody>
            </table>
            <div class="d-flex justify-content-end" v-if="dataTable.total">
              <select-component
                parentClass="form-group mr-3"
                classSelect="form-control form-control-solid"
                :options="options"
                :value="cptPerPage"
                :isRequire="true"
                @input="onChangePerPage($event)"
              />
              <paginate
                :page-range="3"
                :prev-text="'Prev'"
                :next-text="'Next'"
                :container-class="'pagination'"
                :page-class="'page-item'"
                :click-handler="onChangePage"
                :page-count="dataTable.last_page"
                v-model="perPage"
              ></paginate>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataProp: {
      default: () => {},
    },
    columns: {
      default: [],
    },
  },
  computed: {
    cptPerPage() {
      return localStorage.getItem("perPage") || this.perPage;
    },
  },
  data() {
    return {
      dataTable: {},
      config: {
        currentPage: 1,
      },
      perPage: 10,
      options: [
        {
          id: 10,
          name: 10,
        },
        {
          id: 20,
          name: 20,
        },
        {
          id: 50,
          name: 50,
        },
      ],
    };
  },
  created() {
    this.dataTable = this.dataProp;
  },
  watch: {
    dataProp: function (newVal) {
      this.dataTable = newVal;
    },
  },
  methods: {
    handleColumn(item, column) {
      return column.render ? column.render(item) : item[column.dataIndex];
    },
    onChangePage(page) {
      this.$emit("onChangePage", page);
    },
    onChangePerPage(e) {
      localStorage.setItem("perPage", e);
      this.$emit("onChangePerPage", e);
    },
  },
};
</script>

<style></style>
