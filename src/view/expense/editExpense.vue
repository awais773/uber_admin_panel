<template>
    <b-card>
        <b-row>
            <div class="col-12 mt-16">
                <b-form @submit.prevent="addExpense" v-if="show">
                    <!-- <h2>Car Information</h2> -->
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
                            Add Category
                        </h5>
                    </div>
                    <div class="row">
                        <div class="col-md-4 col-12">
                            <b-form-group id="input-group-2" label="Select Driver:" label-for="user_id">
                                <b-form-select id="user_id" v-model="user_id" >
                                    <option value="">Select  Driver</option>
                                    <option v-for="driver in drivers" :key="driver.id" :value="driver.id">
                                        {{ driver.name }} &nbsp;{{ driver.last_name }} &nbsp; &nbsp; | &nbsp; &nbsp; {{
                                            driver.id }}                                    
                                            </option>
                                </b-form-select>
                            </b-form-group>
                        </div>
                        <div class="col-md-4 col-12">
                            <b-form-group id="input-group-2" label="Amount:" label-for="amount">
                                <b-form-input id="amount" v-model="amount" placeholder="Enter  amount"
                                    ></b-form-input>
                            </b-form-group>
                        </div>
                        <div class="col-md-4 col-12">
                            <b-form-group id="input-group-2" label="Amount Type:" label-for="amount_type">
                                <b-form-select id="amount_type" v-model="amount_type" required>
                                    <option value="">Select Type</option>
                                    <option>Inclusive Amount</option>
                                    <option>Exclusive Amount</option>
                                </b-form-select>
                            </b-form-group>
                        </div>
                        <div class="col-md-4 col-12">
                            <b-form-group id="input-group-2" label="Category:" label-for="category">
                                <b-form-select id="category" v-model="category" >
                                    <option value="">Select Category</option>
                                    <option>Petrol</option>
                                    <option>Puncher</option>
                                    <option>Fuel</option>
                                    <option>Air Pressure</option>
                                    <option>Tyre Change</option>
                                    <option>Challane</option>
                                    <option>Online Payment</option>
                                    <option>Customer</option>
                                    <option>Oil Change</option>
                                    <option>Swish earning</option>
                                    <option>Izettle earning</option>
                                    <option>Other</option>
                                </b-form-select>
                            </b-form-group>
                        </div>

                        <div class="col-md-4 col-12">
                            <b-form-group id="input-group-2" label="Card:" label-for="card">
                                <b-form-select id="card" v-model="card" >
                                    <option value="">Select Card</option>
                                    <option>Payable</option>
                                    <option>Receivable</option>
                                    <option>Normal</option>
                                </b-form-select>
                            </b-form-group>
                        </div>
                        <div class="col-md-4 col-12">
                            <b-form-group id="input-group-2" label="Document Upload:" label-for="profile_picture">
                                <div style="margin-left: 3px; margin-bottom: 15px">
                                    <!-- Display current profile picture -->
                                    <img v-if="editExpense.image" :src="'https://boltapi.fastnetstaffing.in/' + image"
                                        alt="Picture" style="max-width: 100px; max-height: 100px" />
                                    <input type="file" accept="image/*" id="image" @change="onProfilePictureChange" />
                                </div>
                            </b-form-group>
                        </div>
                        <div v-if="card === 'Normal'" class="col-md-4 col-12">
                <b-form-group label="Commnent" label-for="fix-salary-input">
                  <b-form-input id="comment" type="text" v-model="comment"
                    placeholder="Enter comment"></b-form-input>
                </b-form-group>
              </div>

                    </div>
                    <b-button type="submit" variant="primary" class="mb-8 mr-8" :disabled="isLoading">
                        <span v-if="!isLoading">Submit</span>
                        <b-spinner v-else class="mb-8 mr-8" variant="primary" small></b-spinner>
                    </b-button>
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
}
    from "bootstrap-vue";
import axios from "axios";
import code from "../components/data-entry/form/code";
import { BToast } from "bootstrap-vue";
export default {
    data() {
        return {
            selectedType: "",
            show: true,
            isLoading: false,
            codeText: code.introduction,
            codeActive: false,
            codeActiveClass: false,
            image: null,
            amount: '',
            category: '',
            card:'',
            user_id: '',
            drivers: [],
            editExpense: {},
            comment:'',
            amount_type: '',


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
        BToast,
        BSpinner,
    },

    created() {
        // Load the clients data when the component is created
        axios
            .get("drivers")
            .then((response) => {
                this.drivers = response.data.data;
            })
            .catch((error) => {
                console.log(error);
            });
        // Load the clients data when the component is created
        const userId = this.$route.params.id;
        axios
            .get(`expense/${userId}`)
            .then((response) => {
                this.editExpense = response.data.data;
                this.image = this.editExpense.image;
                this.amount = this.editExpense.amount;
                this.category = this.editExpense.category;
                 this.card = this.editExpense.card;
                this.user_id = this.editExpense.user_id;
                this.comment = this.editExpense.comment;
                this.amount_type = this.editExpense.amount_type;

            })
            .catch((error) => {
                console.error("Error fetching user data:", error);
            });
    },



    methods: {
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
        //    Add Expense
        addExpense() {
            this.isLoading = true;
            // Create a FormData object to handle the image file
            const formData = new FormData();
            formData.append("image", this.image);
            formData.append("amount", this.amount);
            formData.append("category", this.category);
             formData.append("card", this.card);
            formData.append("user_id", this.user_id);
            formData.append("comment", this.comment);
            formData.append("amount_type", this.amount_type); 
            axios
                .post(`expenseUpdate/${this.editExpense.id}`, formData)
                .then((response) => {
                    console.log(response.data);
                    this.$bvToast.toast("Expense added successfully!", {
                        title: "Success",
                        variant: "success",
                        solid: true,
                        appendToast: true,
                        toaster: "b-toaster-top-right",
                        autoHideDelay: 5000,
                        variant: "primary", // Background color
                    });
                    this.isLoading = false;
                })
                .catch((error) => {
                    this.errors = error.response.data.errors;
                    console.log(error.response.data);
                    this.isLoading = false;
                });
        },
        onProfilePictureChange(event) {
            const file = event.target.files[0];
            if (file) {
                this.image = file;
            }
        },

        codeClick() {
            this.codeActive = !this.codeActive;

            setTimeout(() => {
                this.codeActiveClass = !this.codeActiveClass;
            }, 100);
        },
    },
};
</script>
