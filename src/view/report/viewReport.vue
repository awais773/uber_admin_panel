<template>
  <b-card>
    <!-- filter  -->
    <div v-if="loading" class="text-center mt-4">
      <b-spinner label="Loading..."></b-spinner>
    </div>
    <div class="col-12 mt-16">
      <div>
        <b-row class="align-items-center">
          <b-col lg="6" class="my-1">
            <b-form-group
              label="Filter"
              label-for="filter-input"
              label-cols-sm="1"
              label-align-sm="right"
              label-size="sm"
              class="mb-0"
            >
              <b-input-group size="sm">
                <b-form-input
                  id="filter-input"
                  v-model="filter"
                  type="search"
                  placeholder="Type to Search"
                ></b-form-input>
                <b-input-group-append>
                  <b-button :disabled="!filter" @click="filter = ''"
                    >Clear</b-button
                  >
                </b-input-group-append>
              </b-input-group>
            </b-form-group>
          </b-col>
          <b-col lg="6" class="my-1 d-flex justify-content-end">
            <!-- <b-button type="submit" variant="primary" class="mb-8 mr-8"
              >Import</b-button
            > -->
            <b-button
              @click="exportDataToCSV"
              variant="primary"
              class="mb-8 mr-8"
              >Export</b-button
            >
          </b-col>
        </b-row>
      </div>
    </div>
    <!-- filter end -->
    <b-row>
      <div class="col-12 mt-16">
        <b-table
          id="dataTable"
          :items="users"
          :fields="fields"
          :current-page="currentPage"
          :per-page="perPage"
          :filter="filter"
          :filter-included-fields="filterOn"
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
          :sort-direction="sortDirection"
          show-empty
          @filtered="onFiltered"
          y
          responsive
        >
          <template #cell(driver_name)="row">
            {{ `${row.item.driver.name} ${row.item.driver.last_name} ` }}
          </template>
          <template #cell(company_name)="row">
            <span v-if="row.item.driver.company_name_own">{{
              row.item.driver.company_name_own
            }}</span>
            <span v-else>{{ row.item.driver.company.company_name }}</span>
          </template>
          <template #cell(uber_earning)="row">
            {{
              row.item.driver.uber_earning
                ? row.item.driver.uber_earning
                : NonNullable
            }}
          </template>
          <template #cell(bolt_earning)="row">
            {{
              row.item.driver.bolt_earning
                ? row.item.driver.bolt_earning
                : NonNullable
            }}
          </template>
          <template #cell(salary_fix)="row">
            {{
              row.item.driver.salary_fix
                ? row.item.driver.salary_fix
                : NonNullable
            }}
          </template>
          <template #cell(commission)="row">
            {{
              row.item.driver.salary_commission
                ? row.item.driver.salary_commission
                : NonNullable
            }}
          </template>
          <template #cell(hourly_rate)="row">
            {{
              row.item.driver.hourly_enter_amount
                ? row.item.driver.hourly_enter_amount
                : NonNullable
            }}
          </template>
          <template #cell(driver_hourly_rate)="row">
            {{
              row.item.driver.driver_hourly_rate
                ? row.item.driver.driver_hourly_rate
                : NonNullable
            }}
          </template>
          <!-- Action Button Code -->
          <template #cell(image)="row">
            <img
              :src="'https://boltapi.fastnetstaffing.in/' + row.item.image"
              alt="Image"
              class="img-fluid"
              style="max-width: 100px; max-height: 100px"
            />
          </template>
          <!-- <template #cell(actions)="row">
                        <b-button @click="detailsDrivers(row.item.id)" variant="primary" class="mb-8 mr-8">Pay Now
                        </b-button>
                    </template> -->
          <template #cell(actions)="row">
            <b-button
              @click="navigateToAddReport(row.item.id)"
              variant="primary"
              class="mb-8 mr-8"
              >Pay Now</b-button
            >
          </template>

          <b-form-group
            label="Filter"
            label-for="filter-input"
            label-cols-sm="3"
            label-align-sm="right"
            label-size="sm"
            class="mb-0"
          >
            <b-input-group size="sm">
              <b-form-input
                id="filter-input"
                v-model="filter"
                type="search"
                placeholder="Type to Search"
              ></b-form-input>

              <b-input-group-append>
                <b-button :disabled="!filter" @click="filter = ''"
                  >Clear</b-button
                >
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
        </b-table>
        <div class="mx-8 d-flex justify-content-end">
          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="my-table"
          ></b-pagination>
        </div>
        <b-row class="mt-16 align-items-center justify-content-end">
          <b-row>
            <div
              v-if="codeActive"
              class="col-12 mt-24 hljs-container"
              :class="{ active: codeActiveClass }"
            >
              <pre v-highlightjs>
          <code class="hljs html">
            {{ codeText }}
          </code>
        </pre>
            </div>
          </b-row>
        </b-row>
      </div>
    </b-row>
  </b-card>
</template>

<script>
import {
  BRow,
  BCol,
  BCard,
  BButton,
  BTable,
  BFormGroup,
  BInputGroup,
  BFormInput,
  BFormSelect,
  BPagination,
  BInputGroupAppend,
  BSpinner,
  BFormRadio,
  BFormRadioGroup,
} from "bootstrap-vue";
import axios from "axios";
import Papa from "papaparse";

export default {
  data() {
    return {
      perPage: 5,
      currentPage: 1,
      sortBy: "age",
      sortDesc: false,
      isCardModalVisible: false, // Initialize to false
      selectedCardOption: "",
      rowToUpdate: null, // Initialize to false

      users: [], // Instead of 'items', use 'users' array to store fetched data
      fields: [
        // { key: "srNo", label: "Sr No" },
        { key: "id", sortable: true },
        { key: "driver_name", sortable: true },
        { key: "company_name", sortable: true },
        { key: "salary_fix", sortable: true },
        { key: "commission", sortable: true },
        { key: "hourly_rate", sortable: true },
        { key: "driver_hourly_rate", sortable: true },
        { key: "total_payable", sortable: true },
        { key: "total_receivable", sortable: true },
        { key: "uber_earning", sortable: true },
        { key: "bolt_earning", sortable: true },
        // { key: "image", sortable: true },
        // { key: "status", sortable: true },
        { key: "actions", label: "Actions" },
      ],

      filter: "", // Define filter property for search functionality
      totalRows: 0, // Initialize totalRows to 0
      showDeleteConfirmation: false,
      itemIdToDelete: null,
      loading: false,
    };
  },
  components: {
    BRow,
    BCol,
    BCard,
    BButton,
    BTable,
    BFormGroup,
    BInputGroup,
    BFormInput,
    BFormSelect,
    BPagination,
    BInputGroupAppend,
    BSpinner,
    BFormRadio,
    BFormRadioGroup,
  },
  computed: {
    sortOptions() {
      return this.fields
        .filter((f) => f.sortable)
        .map((f) => {
          return { text: f.label, value: f.key };
        });
    },
    rows() {
      return this.users.length;
    },
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.loading = true; // Set loading to true before fetching data

      const userId = this.$route.params.id;

     let apiUrl = userId ? `driverDetails/${userId}` : "expense";
      axios
        .get(apiUrl) // Replace 'your_api_endpoint_url_here' with your actual API URL
        .then((response) => {
          this.users = response.data.data;
          this.users.forEach((item, index) => {
            item.srNo = index + 1;
          });
          this.users.forEach((item) => {
            item.id = item.user_id; // Use user's ID as the serial number
          });
          this.totalRows = this.users.length;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        })
        .finally(() => {
          this.loading = false; // Set loading to false after fetching data, whether success or error
        });
    },
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    codeClick() {
      this.codeActive = !this.codeActive;
    },

    exportDataToCSV() {
      const csv = Papa.unparse(this.users);
      const blob = new Blob([csv], { type: "text/csv" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "exported_data.csv";
      a.click();
      URL.revokeObjectURL(url);
    },
    navigateToAddReport(userId) {
      // Use Vue Router to navigate to the "addReport" route with the selected user's ID
      this.$router.push({ name: "addReport", params: { userId } });
    },
  },
};
</script>
