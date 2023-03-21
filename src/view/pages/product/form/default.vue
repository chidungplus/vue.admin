<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card card-custom gutter-b example example-compact">
        <div class="card-header pt-7">
          <h3 class="card-title align-items-start flex-column">
            <span class="card-label fw-bold text-gray-800"
              >Infomation general</span
            >
          </h3>
        </div>
        <div class="card-body">
          <div>
            <input-component
              classInput="form-control form-control-solid h-auto py-2 px-6 rounded-lg font-size-h6 col-md-3"
              label="Name"
              name='name'
              @input="onInputValue($event, 'name')"
            />
            <input-component
              classInput="form-control form-control-solid h-auto py-2 px-6 rounded-lg font-size-h6 col-md-3"
              label="Code"
              name='code'
              @input="onInputValue($event, 'code')"
            />
            <select-component
              classSelect="form-control form-control-solid h-auto py-2 px-6 rounded-lg font-size-h6 col-md-3"
              label="Category"
              :options="categories"
              name='category_id'
              @input="onInputValue($event, 'category_id')"
            />
            <input-component
              classInput="form-control form-control-solid h-auto py-2 px-6 rounded-lg font-size-h6 col-md-3"
              label="Price"
              name='price'
              @input="onInputValue($event, 'price')"
            />
            <input-component
              classInput="form-control form-control-solid h-auto py-2 px-6 rounded-lg font-size-h6 col-md-3"
              label="Cost"
              name='cost'
              @input="onInputValue($event, 'cost')"
            />
            <textarea-component
              classInput="form-control form-control-solid h-auto py-2 px-6 rounded-lg font-size-h6 col-md-3"
              label="Content"
              name='content'
              @input="onInputValue($event, 'content')"
            />
            <div class="form-group">
              <vue-tags-input
                v-model="color"
                :tags="colors"
                placeholder="Color"
                @tags-changed="(newTags) => (colors = newTags)"
              />
            </div>
            <div class="form-group">
              <vue-tags-input
                v-model="size"
                :tags="sizes"
                @tags-changed="(newTags) => (sizes = newTags)"
                placeholder="Size"
              />
            </div>
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
                  <div class="d-flex">
                    <b-checkbox></b-checkbox>
                    <span>{{ td }}</span>
                  </div>
                </td>
                <td>
                  <input-event-component
                    :index="idx"
                    classInput="form-control form-control-solid h-auto py-2 px-6"
                    :value="[]"
                    @inputEvent="onInputValue($event, 'name')"
                  />
                </td>
                <td>
                  <input-event-component
                    :index="idx"
                    classInput="form-control form-control-solid h-auto py-2 px-6"
                    :value="[]"
                    @inputEvent="onInputValue($event, 'bar_code')"
                  />
                </td>
                <td>
                  <input-event-component
                    :index="idx"
                    classInput="form-control form-control-solid h-auto py-2 px-6"
                    :value="[]"
                    @inputEvent="onInputValue($event, 'cost')"
                  />
                </td>
                <td>
                  <input-event-component
                    :index="idx"
                    classInput="form-control form-control-solid h-auto py-2 px-6"
                    :value="[]"
                    @inputEvent="onInputValue($event, 'price')"
                  />
                </td>
                <td>
                  <input-event-component
                    :index="idx"
                    classInput="form-control form-control-solid h-auto py-2 px-6"
                    :value="[]"
                    @inputEvent="onInputValue($event, 'price_recent')"
                  />
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
import VueTagsInput from "@johmun/vue-tags-input";

export default {
  components: {
    VueTagsInput,
  },
//   props: {
//       formData: {
//           default: {}
//       }
//   },
  data() {
    return {
      categories: [],
      ths: ["name", "sku", "barcode", "price", "cost", "price rent"],
      tds: [],
      sizes: [],
      size: "",
      colors: [],
      color: "",
      
    };
  },
  watch: {
    sizes() {
      this.tds = this.setValue();
    },
    colors() {
      this.tds = this.setValue();
    },
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
    },
    setValue() {
      let data = [];
      for (let index = 0; index < this.colors.length; index++) {
        for (let j = 0; j < this.sizes.length; j++) {
          data.push(`- ${this.colors[index].text} - ${this.sizes[j].text}`);
        }
      }

      return data;
    },
    onInputValue(value, field) {
        this.$emit("onChangeInput", {value, field});
    }
  },
};
</script>

<style>
.ti-input {
  border-radius: 0.85rem !important;
}
</style>
