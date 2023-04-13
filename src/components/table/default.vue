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
                  <template v-for="(item, index) in dataTable.data">
                    <tr :key="index">
                      <td
                        v-for="column in columns"
                        :key="`${column.dataIndex}${index}`"
                      >
                        <fragment>
                          {{ handleColumn(item, column) }}
                        </fragment>
                      </td>
                    </tr>
                  </template>
                </template>
                <template v-else>
                  <tr>
                    No data
                  </tr>
                </template>
              </tbody>
            </table>
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
  data() {
    return {
      dataTable: {},
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
  },
};
</script>

<style></style>
