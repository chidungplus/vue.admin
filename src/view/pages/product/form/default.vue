<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card card-custom gutter-b example example-compact">
        <div class="card-header pt-7">
            <h3 class="card-title align-items-start flex-column">
                <span class="card-label fw-bold text-gray-800">Infomation general</span>
            </h3>
        </div>
        <div class="card-body">
          <div>
            <input-component
              classInput="form-control form-control-solid h-auto py-2 px-6 rounded-lg font-size-h6 col-md-3"
              label="Name"
            />
            <input-component
              classInput="form-control form-control-solid h-auto py-2 px-6 rounded-lg font-size-h6 col-md-3"
              label="Code"
            />
            <select-component
              classSelect="form-control form-control-solid h-auto py-2 px-6 rounded-lg font-size-h6 col-md-3"
              label="Category"
              :options="categories"
            />
            <input-component
              classInput="form-control form-control-solid h-auto py-2 px-6 rounded-lg font-size-h6 col-md-3"
              label="Price"
            />
            <input-component
              classInput="form-control form-control-solid h-auto py-2 px-6 rounded-lg font-size-h6 col-md-3"
              label="Cost"
            />
            <input-component
              classInput="form-control form-control-solid h-auto py-2 px-6 rounded-lg font-size-h6 col-md-3"
              label="Size"
            />
            <input-component
              classInput="form-control form-control-solid h-auto py-2 px-6 rounded-lg font-size-h6 col-md-3"
              label="Color"
            />
          </div>
          <table class="table b-table table-striped table-hover">
              <thead>
                  <tr>
                      <th v-for="(th, index) in ths" :key="index">
                          {{ th }}
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="(td, idx) in tds" :key="idx">
                      <td>
                          {{ td }}
                      </td>
                  </tr>
              </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ApiService from "@/core/services/api.service.js";
import { ROUTES } from "@/core/config/routes/index.js";

export default {
    data() {
        return {
            categories: [],
            ths: ['name', 'sku', 'barcode', 'price', 'cost', 'price rent'],
            tds: []
        }
    },
    created() {
        this.getAllCategories();
    },
    methods: {
        async getAllCategories() {
            try {
                const { data } = await ApiService.get(ROUTES.API.GET_CATEGORY);
                this.categories = data?.categories;
            } catch (error) {   
                console.log(error);
            }
        }
    }

};
</script>

<style></style>
