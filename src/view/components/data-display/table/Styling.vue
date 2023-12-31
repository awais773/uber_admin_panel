<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Table styling</h4>

        <p class="hp-p1-body">
          <code>&lt;b-table&gt;</code> provides several props to alter the style
          of the table:
          <br />
          <a
            href="https://bootstrap-vue.org/docs/components/table#table-styling"
            target="_blank"
            >Table styling</a
          >
        </p>
      </b-col>

      <b-col class="hp-flex-none w-auto">
        <b-button
          @click="codeClick()"
          variant="text"
          class="btn-icon-only show-code-btn"
        >
          <i
            class="ri-code-s-slash-line hp-text-color-black-80 hp-text-color-dark-30 lh-1"
            style="font-size: 16px"
          ></i>
        </b-button>
      </b-col>
    </b-row>

    <b-row>
      <div class="col-12 mt-16">
        <b-form-group
          label="Table Options"
          label-cols-lg="2"
          v-slot="{ ariaDescribedby }"
        >
          <b-form-checkbox
            v-model="striped"
            :aria-describedby="ariaDescribedby"
            inline
            >Striped</b-form-checkbox
          >
          <b-form-checkbox
            v-model="bordered"
            :aria-describedby="ariaDescribedby"
            inline
            >Bordered</b-form-checkbox
          >
          <b-form-checkbox
            v-model="borderless"
            :aria-describedby="ariaDescribedby"
            inline
            >Borderless</b-form-checkbox
          >
          <b-form-checkbox
            v-model="outlined"
            :aria-describedby="ariaDescribedby"
            inline
            >Outlined</b-form-checkbox
          >
          <b-form-checkbox
            v-model="small"
            :aria-describedby="ariaDescribedby"
            inline
            >Small</b-form-checkbox
          >
          <b-form-checkbox
            v-model="hover"
            :aria-describedby="ariaDescribedby"
            inline
            >Hover</b-form-checkbox
          >
          <b-form-checkbox
            v-model="dark"
            :aria-describedby="ariaDescribedby"
            inline
            >Dark</b-form-checkbox
          >
          <b-form-checkbox
            v-model="fixed"
            :aria-describedby="ariaDescribedby"
            inline
            >Fixed</b-form-checkbox
          >
          <b-form-checkbox
            v-model="footClone"
            :aria-describedby="ariaDescribedby"
            inline
            >Foot Clone</b-form-checkbox
          >
          <b-form-checkbox
            v-model="noCollapse"
            :aria-describedby="ariaDescribedby"
            inline
            >No border collapse</b-form-checkbox
          >
        </b-form-group>

        <b-form-group
          label="Head Variant"
          label-cols-lg="2"
          v-slot="{ ariaDescribedby }"
        >
          <b-form-radio-group
            v-model="headVariant"
            :aria-describedby="ariaDescribedby"
            class="mt-lg-2"
          >
            <b-form-radio :value="null" inline>None</b-form-radio>
            <b-form-radio value="light" inline>Light</b-form-radio>
            <b-form-radio value="dark" inline>Dark</b-form-radio>
          </b-form-radio-group>
        </b-form-group>

        <b-form-group
          label="Table Variant"
          label-for="table-style-variant"
          label-cols-lg="2"
        >
          <b-form-select
            id="table-style-variant"
            v-model="tableVariant"
            :options="tableVariants"
          >
            <template #first>
              <option value="">-- None --</option>
            </template>
          </b-form-select>
        </b-form-group>

        <div class="">
          <b-table
            :striped="striped"
            :bordered="bordered"
            :borderless="borderless"
            :outlined="outlined"
            :small="small"
            :hover="hover"
            :dark="dark"
            :fixed="fixed"
            :foot-clone="footClone"
            :no-border-collapse="noCollapse"
            :items="items"
            :fields="fields"
            :head-variant="headVariant"
            :table-variant="tableVariant"
          ></b-table>
        </div>
      </div>

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
  BFormRadioGroup,
  BFormRadio,
  BFormCheckbox,
  BFormSelect,
} from "bootstrap-vue";

import code from "./code";

export default {
  data() {
    return {
      fields: ["first_name", "last_name", "age"],
      items: [
        { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
        { age: 21, first_name: "Larsen", last_name: "Shaw" },
        { age: 89, first_name: "Geneva", last_name: "Wilson" },
      ],
      tableVariants: [
        "primary",
        "secondary",
        "info",
        "danger",
        "warning",
        "success",
        "light",
        "dark",
      ],
      striped: false,
      bordered: false,
      borderless: false,
      outlined: false,
      small: false,
      hover: false,
      dark: false,
      fixed: false,
      footClone: false,
      headVariant: null,
      tableVariant: "",
      noCollapse: false,
      codeText: code.styling,
      codeActive: false,
      codeActiveClass: false,
    };
  },
  components: {
    BRow,
    BCol,
    BCard,
    BButton,
    BTable,
    BFormGroup,
    BFormRadioGroup,
    BFormRadio,
    BFormCheckbox,
    BFormSelect,
  },
  methods: {
    codeClick() {
      this.codeActive = !this.codeActive;

      setTimeout(() => {
        this.codeActiveClass = !this.codeActiveClass;
      }, 100);
    },
  },
};
</script>
