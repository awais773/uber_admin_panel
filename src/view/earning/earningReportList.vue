<template>
  <b-card>
    <!-- filter  -->
    <div v-if="loading" class="text-center mt-4">
      <b-spinner label="Loading..."></b-spinner>
    </div>
    <div class="col-12 mt-16">
      <div>
        <b-row class="align-items-center">
          <b-col lg="4" class="my-1">
            <b-form-group
              label=""
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
          <b-col lg="3" class="my-1">
            <b-form-group
              label="Start Date"
              label-for="start-date"
              label-cols-sm="5"
              label-align-sm="right"
              label-size="sm"
              class="mb-0"
            >
              <b-form-input
                id="start-date-input"
                v-model="startDateFilter"
                type="date"
                placeholder="Select start date"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col lg="3" class="my-1">
            <b-form-group
              label="End Date"
              label-for="end-date"
              label-cols-sm="4"
              label-align-sm="right"
              label-size="sm"
              class="mb-0"
            >
              <b-form-input
                id="end-date-input"
                v-model="endDateFilter"
                type="date"
                placeholder="Select end date"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col lg="2" class="my-1 d-flex justify-content-end">
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
          :items="filteredUsers"
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
            {{ `${row.item.name} ${row.item.last_name} ` }}
          </template>
          <template #cell(total_net)="row">
            {{ `${row.item.net}` }}
          </template>
          <template #cell(5%_admin_fee)="row">
            {{ `${row.item.admin} ` }}
          </template>
          <template #cell(total_net_payable)="row">
            {{ `${row.item.net_total}` }}
          </template>
          <template #cell(moms_6%_tax)="row">
            {{ `${row.item.moms_6_tax}` }}
          </template>
          <template #cell(total)="row">
            {{
              parseFloat(row.item.uber_earning || 0) +
              parseFloat(row.item.bolt_earning || 0)
            }}
          </template>
          <!-- Action Button Code -->
          <!-- <template #cell(actions)="row">
            <b-button @click="downloadFile(row.item.file)" variant="primary"
              >Download</b-button
            >
          </template> -->

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
} from "bootstrap-vue";
import axios from "axios";
import Papa from "papaparse";

// new code
// import code from "./code";
// new code end
export default {
  data() {
    return {
      perPage: 8,
      currentPage: 1,
      sortBy: "age",
      sortDesc: false,
      selectedCardOption: "",
      rowToUpdate: null,
      users: [], // Instead of 'items', use 'users' array to store fetched data
      fields: [
        { key: "id", sortable: true },
        { key: "Driver_name", sortable: true },
        { key: "start_date", sortable: true },
        { key: "end_date", sortable: true },
        { key: "uber_earning", sortable: true },
        { key: "bolt_earning", sortable: true },
        { key: "total", sortable: true },
        { key: "moms_6%_tax", sortable: true },
        { key: "total_net", sortable: true },
        { key: "5%_admin_fee", sortable: true },
        { key: "net_payable", sortable: true },
        { key: "moms_25_tax", sortable: true },
        { key: "total_net_payable", sortable: true },
        // { key: "actions", label: "Actions" },
      ],

      filter: "", // Define filter property for search functionality
      totalRows: 0, // Initialize totalRows to 0
      showDeleteConfirmation: false,
      itemIdToDelete: null,
      loading: false,
      startDateFilter: "",
      endDateFilter: "",
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
  },
  computed: {
    filteredUsers() {
      const filteredUsers = this.users.filter((user) => {
        const startDate = new Date(user.start_date);
        const endDate = new Date(user.end_date);
        const filterStartDate = this.startDateFilter
          ? new Date(this.startDateFilter)
          : null;
        const filterEndDate = this.endDateFilter
          ? new Date(this.endDateFilter)
          : null;
        if (filterStartDate && startDate < filterStartDate) {
          return false;
        }

        if (filterEndDate && endDate > filterEndDate) {
          return false;
        }

        return true;
      });

      return filteredUsers;
    },

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
      const name = this.$route.params.name;
      const last_name = this.$route.params.last_name;
      const userId = name && last_name ? `${name}/${last_name}` : null;
      let apiUrl = userId ? `driverUber/${userId}` : "uberdata";
      axios
        .get(apiUrl) // Replace 'your_api_endpoint_url_here' with your actual API URL
        .then((response) => {
          this.users = response.data.data;

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

    deleteItem(itemId) {
      this.itemIdToDelete = itemId; // Set the item ID to be deleted
      axios
        .delete(`fileDelete/${itemId}`)
        .then((response) => {
          this.showDeleteConfirmation = false;
          this.fetchData(); // Refresh the data after deletion
        })
        .catch((error) => {
          // Handle error
          console.error("Error deleting item:", error);
        });
    },
    downloadFile(fileUrl) {
      // Construct a download link for the file
      const link = document.createElement("a");
      link.href = "https://boltapi.fastnetstaffing.in/" + fileUrl;
      link.download = "downloaded_file"; // Specify the default filename for the downloaded file
      link.target = "_blank"; // Open the link in a new tab
      link.click();
    },
  },
};
</script>
