<template>
  <div>
    <div v-if="successMessage" class="alert alert-success" style="color: rgb(5, 20, 48)">
      {{ successMessage }}
    </div>
    <b-card>
      <b-row>
        <div class="col-12 mt-16">
          <b-form @submit.prevent="addUser" v-if="show">
            <div style="
                background-color: #0010f7;
                height: 40px;
                border-radius: 4px;
              ">
              <h5 style="
                  color: rgb(223, 227, 238);
                  margin-left: 5px;
                  font-weight: bold;
                  padding:10px;
                ">
                Personal Information
              </h5>
            </div>
            <div class="row">
              <div class="col-md-4 col-12">
                <b-form-group id="input-group-1" label="First Name:" label-for="first_name">
                  <b-form-input id="name" type="text" placeholder="Enter first name" autocomplete="off" v-model="name"
                    disabled>
                  </b-form-input>
                </b-form-group>
              </div>
              <div class="col-md-4 col-12">
                <b-form-group id="input-group-1" label="Last Name:" label-for="last_name">
                  <b-form-input id="last_name" type="text" placeholder="Enter first name" autocomplete="off"
                    v-model="last_name" disabled>
                  </b-form-input>
                </b-form-group>
              </div>

              <div class="col-md-4 col-12">
                <b-form-group id="input-group-2" label="Email Address:" label-for="email">
                  <b-form-input id="email" type="email" placeholder="Enter email address" v-model="email" disabled>
                  </b-form-input>
                  <!-- <span class="text-danger" v-if="errors.email">{{ errors.email[0] }}</span> -->
                </b-form-group>
              </div>

              <div class="col-md-4 col-12">
                <b-form-group id="input-group-2" label="Personal Number:" label-for="security_code">
                  <b-form-input id="security_code" v-model="security_code"
                    disabled></b-form-input>
                </b-form-group>
              </div>
                <!-- <div class="col-md-4 col-12">
                    <b-form-group id="input-group-2" label="Social Security Number:" label-for="security_code">
                      <b-form-input id="security_code" type="text" placeholder="Enter security code" v-model="security_code"
                        required minlength="10" maxlength="12"></b-form-input>
                    </b-form-group>
                  </div> -->

              <div class="col-md-4 col-12">
                <b-form-group id="input-group-1" label="Mobile:" label-for="mobile">
                  <b-form-input id="mobile" type="text" placeholder="Enter mobile number" v-model="mobile"
                    disabled></b-form-input>
                </b-form-group>
              </div>
              <div class="col-md-4 col-12">
                <b-form-group id="input-group-2" label="Gender:" label-for="gender">
                  <b-form-input id="gender" placeholder="Enter gender" v-model="gender" disabled></b-form-input>
                </b-form-group>
              </div>
              <div class="col-md-4 col-12">
                <b-form-group id="input-group-1" label="Emergency Contact Name:" label-for="emergency_contact_name">
                  <b-form-input id="emergency_contact_name" type="text" placeholder="Enter emergency contact name"
                    v-model="emergency_contact_name" disabled></b-form-input>
                </b-form-group>
              </div>

              <div class="col-md-4 col-12">
                <b-form-group id="input-group-2" label="Emergency Contact Number:" label-for="emergency_contact_number">
                  <b-form-input id="emergency_contact_number" placeholder="Enter emergency contact number"
                    v-model="emergency_contact_number" disabled></b-form-input>
                </b-form-group>
              </div>

              <div class="col-md-4 col-12">
                <b-form-group id="input-group-2" label="Address:" label-for="address">
                  <b-form-input id="address" placeholder="Enter address" v-model="address" disabled>
                  </b-form-input>
                </b-form-group>
              </div>
              <div class="col-md-4 col-12">
                <b-form-group id="input-group-1" label="Date of Birth:" label-for="date_of_birth">
                  <b-form-input id="date_of_birth" type="date" placeholder="Enter date of birth" v-model="date_of_birth"
                    disabled></b-form-input>
                </b-form-group>
              </div>

              <div class="col-md-4 col-12">
                <b-form-group id="input-group-2" label="Joining Date:" label-for="joining_date">
                  <b-form-input id="joining_date" placeholder="Enter Joining date" v-model="joining_date"
                    disabled></b-form-input>
                </b-form-group>
              </div>

              <div class="col-md-4 col-12">
                <b-form-group id="input-group-2" label="Select Car Type:" label-for="select_car_type">
                  <b-form-select v-model="selectedCarType" disabled>
                    <option value="">Select Car Type</option>
                    <option>Own</option>
                    <option>Company</option>
                  </b-form-select>
                </b-form-group>
              </div>
              <div class="col-md-4 col-12">
                <b-form-group id="input-group-2" label="Postal Code:" label-for="postal_code">
                  <b-form-input id="postal_code" placeholder="Enter Postal code" v-model="postal_code" disabled>
                  </b-form-input>
                </b-form-group>
              </div>
              <div class="col-md-4 col-12">
                <b-form-group id="input-group-2" label="City:" label-for="city">
                  <b-form-input id="city" placeholder="Enter city" v-model="city" disabled>
                  </b-form-input>
                </b-form-group>
              </div>
                  <div class="col-md-4 col-12">
                <b-form-group id="input-group-2" label="Select Driver:" label-for="type">
                  <b-form-input id="type" v-model="type" disabled>
                  </b-form-input>
                </b-form-group>
              </div>
              <div class="col-md-4 col-12">
                <b-form-group id="input-group-2" label="Profile Picture:" label-for="profile_picture">
                  <div style="margin-left: 3px; margin-bottom: 15px">
                    <img :src="'https://boltapi.fastnetstaffing.in/' + profile_picture
                      " alt="Profile Picture" width="100" height="100" />
                  </div>
                </b-form-group>
              </div>

              <div v-if="selectedCarType === 'Company'" class="col-md-4 col-12">
                <b-form-group id="input-group-2" label="Select Car:" label-for="vehicle_id">
                  <b-form-select id="vehicle_id" placeholder="Enter select car" v-model="vehicle_id" disabled>
                    <option value="">Select Car</option>
                    <option v-for="vehicle in vehicles" :key="vehicle.id" :value="vehicle.id">
                      {{ vehicle.name }} | {{ vehicle.car_number }} 
                    </option>
                  </b-form-select>
                </b-form-group>
              </div>
              <!-- Dropdown  of Add Vehicle -->
              <div v-if="selectedCarType === 'Own'">
                <b-row>
                  <div class="col-12 mt-16">
                    <div style="
                        background-color: #0010f7;
                        height: 40px;
                        border-radius: 4px;
                      ">
                      <h5 style="
                          color: rgb(223, 227, 238);
                          margin-left: 5px;
                          font-weight: bold;
                          padding:10px;
                        ">
                        Add Vehicle
                      </h5>
                    </div>

                    <!-- <b-form @submit="onSubmit" @reset="onReset" v-if="show"> -->
                    <div class="row">
                      <div class="col-md-4 col-12">
                        <b-form-group id="input-group-1" label="Name:" label-for="name">
                          <b-form-input id="name" type="text" placeholder="Enter name" autocomplete="off"
                            v-model="vehicle_name" disabled></b-form-input>
                        </b-form-group>
                      </div>
                      <!-- <div class="col-md-4 col-12">
                        <b-form-group id="input-group-2" label="Company Name:" label-for="company_name">
                          <b-form-input id="vehicle_company" placeholder="Enter comapnay name" v-model="vehicle_company"
                            disabled></b-form-input>

                        </b-form-group>
                      </div> -->

                      <div class="col-md-4 col-12">
                        <b-form-group id="input-group-2" label="Description:" label-for="description">
                          <b-form-input id="description" placeholder="Enter Description" v-model="description"
                            disabled></b-form-input>
                        </b-form-group>
                      </div>

                      <div class="col-md-4 col-12">
                        <b-form-group id="input-group-2" label="Car Make:" label-for="car_make">
                          <b-form-input id="car_make" placeholder="Enter Car Make" v-model="car_make"
                            disabled></b-form-input>
                        </b-form-group>
                      </div>
                      <div class="col-md-4 col-12">
                        <b-form-group id="input-group-2" label="Car Model:" label-for="car_model">
                          <b-form-input id="car_model" placeholder="Enter Car Model" v-model="car_model"
                            disabled></b-form-input>
                        </b-form-group>
                      </div>
                      <div class="col-md-4 col-12">
                        <b-form-group id="input-group-2" label="Car Color:" label-for="car_color">
                          <b-form-input id="car_color" placeholder="Enter Car Color" v-model="car_color"
                            disabled></b-form-input>
                        </b-form-group>
                      </div>
                      <div class="col-md-4 col-12">
                        <b-form-group id="input-group-2" label="Car Number:" label-for="car_number">
                          <b-form-input id="car_numbar" placeholder="Enter Car Number" v-model="car_number"
                            disabled></b-form-input>
                        </b-form-group>
                      </div>
                    </div>

                    <!--------------------- Uploading images button----------------------- -->
                    <div v-if="editedUser.vehicle_image &&
                      editedUser.vehicle_image.length > 0
                      ">
                      <h6>Vehicle Images:</h6>
                      <div style="display: flex">
                        <div v-for="(image, index) in editedUser.vehicle_image" :key="index"
                          style="margin-left: 3px; margin-bottom: 15px">
                          <img :src="'https://boltapi.fastnetstaffing.in/' + image" alt="Vehicle Image" width="100"
                            height="100" />
                        </div>
                      </div>
                    </div>
                    <!-- </b-form> -->
                  </div>

                  <div v-if="codeActive" class="col-12 mt-24 hljs-container" :class="{ active: codeActiveClass }">
                    <pre v-highlightjs>
                                         <code class="hljs html">
                                        {{ codeText }}
                                              </code>
                                                    </pre>
                  </div>
                </b-row>
              </div>
            </div>

            <div style="
                background-color: #0010f7;
                height: 40px;
                border-radius: 4px;
              ">
              <h5 style="
                  color: rgb(223, 227, 238);
                  margin-left: 5px;
                  font-weight: bold;
                  padding:10px;
                ">
                Salary Information
              </h5>
            </div>

            <div class="row">
              <div class="col-md-4 col-12">
                <b-form-group id="input-group-1" label="Salary:" label-for="salary">
                  <b-form-select v-model="selectedOption" disabled>
                    <option value="">Select Salary Type</option>
                    <option>Fix</option>
                    <option>Commission</option>
                    <option>Hourly Rate</option>
                  </b-form-select>
                </b-form-group>
              </div>

              <div v-if="selectedOption === 'Fix'" class="col-md-4 col-12">
                <b-form-group label="Fix Salary ($/hr)" label-for="fix-salary-input">
                  <b-form-input id="salary_fix" type="text" v-model="salary_fix" placeholder="Enter fix salary"
                    disabled></b-form-input>
                </b-form-group>
              </div>

              <!-- <div v-if="selectedOption === 'Commission'" class="col-md-4 col-12">
                <b-form-group label="Commission (%/Company)" label-for="commission-input">
                  <b-form-input id="salary_commission" type="text" v-model="salary_commission"
                    placeholder="Enter commission"></b-form-input>
                </b-form-group>
              </div> -->
              <div v-if="selectedOption === 'Commission'" class="col-md-4 col-12">
                <b-form-group label="Commission Include VAT (%/Company)" label-for="commission-input">
                  <b-form-input id="salary_commission" type="text" v-model="salary_commission"
                    placeholder="Enter commission include vat"></b-form-input>
                </b-form-group>
              </div>
              <div v-if="selectedOption === 'Commission'" class="col-md-4 col-12">
                <b-form-group label="Commission Exclusive VAT (%/Company)" label-for="commission-input">
                  <b-form-input id="salary_commission" type="text" v-model="salary_commission_exclusive"
                    placeholder="Enter commission exclusive vat"></b-form-input>
                </b-form-group>
              </div>

              <div v-if="selectedOption === 'Hourly Rate'" class="col-md-4 col-12">
                <b-form-group label="Hourly Rate (SEK/hr)" label-for="hourly_enter_amount">
                  <b-form-input id="hourly_enter_amount" type="text" v-model="hourly_enter_amount"
                    placeholder="Hourly Rate " disabled></b-form-input>
                </b-form-group>
              </div>
              <div v-if="selectedOption === 'Hourly Rate'" class="col-md-4 col-12">
                <b-form-group label="Total Number Of Hours" label-for="total_number_hour">
                  <b-form-input id="total_number_hour" type="text" v-model="total_number_hour"
                    placeholder="Enter Total Number Hours" disabled></b-form-input>
                </b-form-group>
              </div>
            </div>
            <!-- Bank Information -->
            <div style="
                background-color: #0010f7;
                height: 40px;
                border-radius: 4px;
              ">
              <h5 style="
                  color: rgb(223, 227, 238);
                  margin-left: 5px;
                  font-weight: bold;
                  padding:10px;
                ">
                Bank Information
              </h5>
            </div>
            <!-- <h3>Bank Infomation</h3> -->
            <div class="row">
              <div class="col-md-4 col-12">
                <b-form-group id="input-group-1" label="Bank Account Holder Name:" label-for="bank_account_holder_name">
                  <b-form-input id="bank_name" type="text" placeholder="Enter bank account holder name"
                    v-model="bank_name" disabled></b-form-input>
                </b-form-group>
              </div>
              <div class="col-md-4 col-12">
                <b-form-group id="input-group-2" label="Bank Account Number:" label-for="bank_account_number">
                  <b-form-input id="bank_account_number" placeholder="Enter bank account number"
                    v-model="bank_account_number" disabled></b-form-input>
                </b-form-group>
              </div>
              <div class="col-md-4 col-12">
                <b-form-group id="input-group-1" label=" Company Name(own):" label-for="company_name_own">
                  <b-form-input id="company_name_own" type="text" placeholder="Enter company name"
                    v-model="company_name_own" disabled></b-form-input>
                </b-form-group>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4 col-12">
                <b-form-group id="input-group-1" label-for="bank_upload_document">
                  <div style="margin-left: 3px; margin-bottom: 15px">
                    <img :src="'https://boltapi.fastnetstaffing.in/' +
                      bank_upload_document
                      " alt="Bank Documents" width="100" height="100" />
                  </div>
                </b-form-group>
              </div>
              <div class="col-md-4 col-12">
                <b-form-group id="input-group-1" label="Taxi Driving License:" label-for="taxi_driving_liscence">
                  <b-form-select v-model="taxi_driving_liscence" disabled>
                    <option value="">Select License</option>
                    <!-- <option>Liscence B</option> -->
                    <!-- <option>Commission</option> -->
                    <option>Driving License/Swedish ID</option>
                    <option>Taxi License</option>
                      <option>Other</option>
                  </b-form-select>
                </b-form-group>
              </div>
              <div class="col-md-4 col-12">
                <b-form-group id="input-group-1" label=" Description" label-for="bank_emergency_contact_name">
                  <b-form-input id="bank_emergency_contact_name" type="text" placeholder="Description"
                    v-model="bank_emergency_contact_name" disabled></b-form-input>
                </b-form-group>
              </div>
            </div>

          </b-form>
        </div>
        <div v-if="codeActive" class="col-12 mt-24 hljs-container" :class="{ active: codeActiveClass }">
          <pre v-highlightjs>
              <code class="hljs html">
                {{ codeText }}
              </code>
            </pre>
        </div>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import {
  BRow,
  BCol,
  BCard,
  BButton,
  BForm,
  BFormGroup,
  BFormCheckboxGroup,
  BFormCheckbox,
  BFormSelect,
  BFormInput,
  BSpinner,
} from "bootstrap-vue";
import axios from "axios";
import { BToast } from "bootstrap-vue";
import code from "../components/data-entry/form/code";

export default {
  data() {
    return {
      show: true,
      codeText: code.introduction,
      codeActive: false,
      codeActiveClass: false,
      selectedOption: "",
      fixSalary: "",
      commission: "",
      selectedCarType: "",
      inputField1: "",
      inputField2: "",
      inputField3: "",
      showModal: false,
      isLoading: false,
      // Add Driver
      name: "",
      email: "",
      security_code: "",
      mobile: "",
      gender: "",
      last_name: '',
      postal_code: '',
      city: '',
      emergency_contact_name: "",
      emergency_contact_number: "",
      address: "",
      date_of_birth: "",
      salary: "",
      bank_name: "",
      bank_title: "",
      bank_account_number: "",
      company_name_own: "",
      bank_upload_document: "",
      taxi_driving_liscence: "",
      bank_emergency_contact_name: "",
      company_name: "",
      owner_name: "",
      owner_number: "",
      company_document: "",
      salary_commission: "",
      salary_fix: "",
      salary_commission_exclusive: '',
      hourly_enter_amount: "",
      profile_picture: "",
      successMessage: "",
      vehicle_id: "",
      vehicles: [],
      editedUser: {
        // ... other properties ...
        vehicle_image: [], // Initialize the array here
      },
      joining_date: '',
      vehicle_name: "",
      vehicle_company: "",
      description: "",
      car_make: "",
      car_model: "",
      car_color: "",
      car_number: "",
      total_number_hour: "",
      type:'',
      
      // vehicle_image: null,
    };
  },
  components: {
    BRow,
    BCol,
    BCard,
    BButton,
    BForm,
    BFormGroup,
    BFormCheckboxGroup,
    BFormCheckbox,
    BFormSelect,
    BFormInput,
    BToast, // Add this line
    BSpinner,
  },

  created() {
    // Load the clients data when the component is created
    axios
      .get("vehicle")
      .then((response) => {
        this.vehicles = response.data.data;
      })
      .catch((error) => {
        console.log(error);
      });

    const userId = this.$route.params.id;
    axios
      .get(`drivers/${userId}`)
      .then((response) => {
        this.editedUser = response.data.data;
        // Set the data properties with values from editedUser

        this.salary_commission_exclusive = this.editedUser.salary_commission_exclusive;
        this.name = this.editedUser.name;
        this.last_name = this.editedUser.last_name;
        this.postal_code = this.editedUser.postal_code;
        this.city = this.editedUser.city;
        this.email = this.editedUser.email;
        this.security_code = this.editedUser.security_code;
        this.mobile = this.editedUser.mobile;
        this.joining_date = this.editedUser.joining_date;
        this.gender = this.editedUser.gender;
        this.emergency_contact_name = this.editedUser.emergency_contact_name;
        this.emergency_contact_number = this.editedUser.emergency_contact_number;
        this.address = this.editedUser.address;
        this.date_of_birth = this.editedUser.date_of_birth;
        this.profile_picture = this.editedUser.profile_picture;
        this.salary_commission = this.editedUser.salary_commission;
        this.salary_fix = this.editedUser.salary_fix;
        this.hourly_enter_amount = this.editedUser.hourly_enter_amount;
        this.bank_name = this.editedUser.bank_name;
        this.bank_title = this.editedUser.bank_title;
        this.bank_account_number = this.editedUser.bank_account_number;
        this.company_name_own = this.editedUser.company_name_own;
        this.bank_upload_document = this.editedUser.bank_upload_document;
        this.bank_emergency_contact_name =
          this.editedUser.bank_emergency_contact_name;
        this.company_name = this.editedUser.company_name;
        this.owner_name = this.editedUser.owner_name;
        this.owner_number = this.editedUser.owner_number;
        this.company_document = this.editedUser.company_document;
        this.vehicle_id = this.editedUser.vehicle_id;
        this.taxi_driving_liscence = this.editedUser.taxi_driving_liscence;
        this.vehicle_name = this.editedUser.vehicle_name;
        this.description = this.editedUser.description;
        this.vehicle_company = this.editedUser.vehicle_company;
        this.car_make = this.editedUser.car_make;
        this.car_model = this.editedUser.car_model;
        this.car_color = this.editedUser.car_color;
        this.car_number = this.editedUser.car_number;
        this.vehicle_image = this.editedUser.vehicle_image;
        this.total_number_hour = this.editedUser.total_number_hour;
        this.type = this.editedUser.type;
        // Depending on the selected option, set the appropriate salary value
        if (this.editedUser.salary_fix !== null) {
          this.selectedOption = "Fix";
        } else if (this.editedUser.salary_commission !== null) {
          this.selectedOption = "Commission";
        } else if (this.editedUser.hourly_enter_amount !== null) {
          this.selectedOption = "Hourly Enter Amount";
        }

        if (this.editedUser.vehicle_id !== null) {
          this.selectedCarType = "Company";
        } else if (this.editedUser.car_color !== null) {
          this.selectedCarType = "Own";
        }

        // ... and so on for other properties ...
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  },
  methods: {
    showMsgBoxOne() {
      debugger;
    },
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
      // debugger
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },

    onProfilePictureChange(event) {
      const file = event.target.files[0];
      if (file) {
        // Set the selected file to the data property
        this.profile_picture = file;
      }
    },

    codeClick() {
      this.codeActive = !this.codeActive;
    },

    saveOwnCar() {
      this.showModal = false;
    },
  },
};
</script>
