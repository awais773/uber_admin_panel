import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'; // Import your store or authentication-related logic
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("@/view/main/dashboards/analytics"),
      meta: {
        requiresAuth: true, // This route requires authentication
      },
    },

     {
      path: "/form/driver/add",
      name: "form/driver/add",
      component: () => import("../view/drivers/driverForm.vue"),    
       meta: {
        layout: "full",
      }, 
    },


     {
      path: "/",
      name: "login",
      component: () => import("../view/pages/authentication/login/index.vue"),
      meta: {
        layout: "full",
      },
    },

    

    // MAIN
    {
      path: "/main/widgets/cards/advance",
      name: "advance",
      component: () => import("@/view/main/widgets/cards/advance"),
      meta: {
        title: "Advance",
        breadcrumb: [
          {
            text: "Main"
          },
          {
            text: "Widgets"
          },
          {
            text: "YodaCards"
          }
        ]
      },
    },
    {
      path: "/main/widgets/cards/statistics",
      name: "statistics",
      component: () => import("@/view/main/widgets/cards/statistics"),
      meta: {
        title: "Statistics",
        breadcrumb: [
          {
            text: "Main"
          },
          {
            text: "Widgets"
          },
          {
            text: "YodaCards"
          }
        ]
      },
    },
    {
      path: "/main/widgets/cards/analytics",
      name: "analytics",
      component: () => import("@/view/main/widgets/cards/analytics"),
      meta: {
        title: "Analytics",
        breadcrumb: [
          {
            text: "Main"
          },
          {
            text: "Widgets"
          },
          {
            text: "YodaCards"
          }
        ]
      },
    },

    {
      path: "/drivers/add",
      name: "drivers",
      component: () => import("@/view/drivers/addDriver"),
      meta: {
        requiresAuth: true, // This route requires authentication
      },
    },
    {
      path: "/drivers/driverDetails/:id",
      name: "driverDetails",
      component: () => import("../view/drivers/detailsDriver.vue"),
      meta: {
        requiresAuth: true, // This route requires authentication
      },
    },

  {
      path: "/vehicle/addVehicle",
      name: "vehicle",
      component: () => import("@/view/vehicle/addVehicle"),
      meta: {
        requiresAuth: true, // This route requires authentication
      },
    },
    {
      path: "/vehicle/viewVehicle/:id",
      name: "viewVehicle",
      component: () => import("@/view/vehicle/viewVehicle"),
      meta: {
        requiresAuth: true, // This route requires authentication
      },
    },
    {
      path: "/vehicle/editVehicle/:id",
      name: "editVehicle",
      component: () => import("@/view/vehicle/editVehicle"),
      meta: {
        requiresAuth: true, // This route requires authentication
      },
    },
    {
      path: "/vehicle/listVehicle",
      name: "vehicle",
      component: () => import("@/view/vehicle/listVehicle"),
      meta: {
        requiresAuth: true, // This route requires authentication
      },
    },

    {
      path: "/vehicle/listVehicle/:id",
      name: "vehicleID",
      component: () => import("@/view/vehicle/listVehicle"),
      meta: {
        requiresAuth: true, // This route requires authentication
      },
    },

 
   
    {
      path: "/drivers/list",
      name: "drivers",
      component: () => import("@/view/drivers/listDriver"),
      meta: {
        requiresAuth: true, // This route requires authentication
      },
    },
    // new list driver 
    //  {
    //   path: "/drivers/new",
    //   name: "drivers",
    //   component: () => import("@/view/drivers/newListDriver"),
     
    // },
    //  B2B Driver 
     {
      path: "/B2B/driver/lists",
      name: "driver",
      component: () => import("../view/components/B2B/driver/listDriver.vue"),
      meta: {
        requiresAuth: true, // This route requires authentication
      },
    },
      {
      path: "/B2B/driver/add",
      name: "driver",
      component: () => import("../view/components/B2B/driver/addDriver.vue"),
      meta: {
        requiresAuth: true, // This route requires authentication
      },
    },
        {
      path: "/B2B/driver/edit/:id",
      name: "B2B/driver/edit",
      component: () => import("../view/components/B2B/driver/editDriver.vue"),
      meta: {
        requiresAuth: true, // This route requires authentication
      },
    },
        {
      path: "/B2B/driver/view/:id",
      name: "B2B/driver/view",
      component: () => import("../view/components/B2B/driver/viewDriver.vue"),
      meta: {
        requiresAuth: true, // This route requires authentication
      },
    },
   // B2B Vehicle

    {
      path: "/B2B/Vehicle/lists",
      name: "/B2B/Vehicle/lists",
      component: () => import("../view/components/B2B/vehicles/listVehicle.vue"),
      meta: {
        requiresAuth: true, // This route requires authentication
      },
    },
      {
      path: "/B2B/Vehicle/add",
      name: "/B2B/Vehicle/add",
      component: () => import("../view/components/B2B/vehicles/addVehicle.vue"),
      meta: {
        requiresAuth: true, // This route requires authentication
      },
    },

    {
      path: "/B2B/Vehicle/edit/:id",
      name: "B2B/Vehicle/edit",
      component: () => import("../view/components/B2B/vehicles/editVehicleB2B.vue"),
      meta: {
        requiresAuth: true, // This route requires authentication
      },
    },

    {
      path: "/B2B/Vehicle/view/:id",
      name: "B2B/Vehicle/view",
      component: () => import("../view/components/B2B/vehicles/viewVehicleB2B.vue"),
      meta: {
        requiresAuth: true, // This route requires authentication
      },
    },

     // company 
     {
      path: "/company/add",
      name: "companAdd",
      component: () => import("../view/company/addCompany.vue"),
      meta: {
        requiresAuth: true, // This route requires authentication
      },
    },
    
       {
      path: "/company/list",
      name: "listCompany",
      component: () => import("../view/company/listCompany.vue"),
      meta: {
        requiresAuth: true, // This route requires authentication
      },
    },

    {
      path: "/company/edit/:id",
      name: "editCompany",
      component: () => import("../view/company/editCompany.vue"),
      meta: {
        requiresAuth: true, // This route requires authentication
      },
    },


    // Eidt 
       {
      path: "/drivers/edit/:id",
      name: "editDrivers",
      component: () => import("../view/drivers/editDriver.vue"),
      meta: {
        requiresAuth: true, // This route requires authentication
      },
    },
   
    
  {
      path: "/drivers/view/:id",
      name: "viewDrivers",
      component: () => import("../view/drivers/viewDriver.vue"),
      meta: {
        requiresAuth: true, // This route requires authentication
      },
    },

  

  // Expense
{
      path: "/expense/add",
      name: "addExpense",
      component: () => import("../view/expense/addExpense.vue"),
      meta: {
        requiresAuth: true, // This route requires authentication
      },
    },
   {
      path: "/expense/list",
      name: "listExpense",
      component: () => import("../view/expense/listExpense.vue"),
      meta: {
        requiresAuth: true, // This route requires authentication
      },
    },

    {
      path: "/expense/list/:id",
      name: "droverExpnse",
      component: () => import("../view/expense/listExpense.vue"),
      meta: {
        requiresAuth: true, // This route requires authentication
      },
    },
    
     {
      path: "/expense/edit/:id",
      name: "editExpense",
      component: () => import("../view/expense/editExpense.vue"),
      meta: {
        requiresAuth: true, // This route requires authentication
      },
    },
     {
      path: "/expense/view/:id",
      name: "viewExpense",
      component: () => import("../view/expense/viewExpense.vue"),
      meta: {
        requiresAuth: true, // This route requires authentication
      },
    },

    {
      path: "/expense/Details/:id",
      name: "expenseDetails",
      component: () => import("../view/expense/detailsExpense.vue"),
      meta: {
        requiresAuth: true, // This route requires authentication
      },
    },

    // Report
    {
      path: "/file/upload",
      name: "uploadFile",
      component: () => import("../view/report/uploadFile.vue"),
      meta: {
        requiresAuth: true, // This route requires authentication
      },
    },
      {
      path: "/report/view",
      name: "viewReport",
      component: () => import("../view/report/viewReport.vue"),
      meta: {
        requiresAuth: true, // This route requires authentication
      },
    },

    {
      path: "/report/view/:id",
      name: "driverReport",
      component: () => import("../view/report/viewReport.vue"),
      meta: {
        requiresAuth: true, // This route requires authentication
      },
    },
       {
      path: "/report/Adds/:userId",
      name: "addReport",
      component: () => import("../view/report/addReport.vue"),
      meta: {
        requiresAuth: true, // This route requires authentication
      },
    },
    {
  path: "/report/show/:userId",
  name: "invoiceShow",
  component: () => import("../view/report/reportShow.vue"),
  meta: {
    requiresAuth: true, // This route requires authentication
  },
},


    // import file


    {
      path: "/Import/importFile",
      name: "importFile",
      component: () => import("../view/report/importFile.vue"),
      meta: {
        requiresAuth: true, // This route requires authentication
      },
    },
    // invoice
      {
      path: "/table/invoice",
      name: "invoiceTable",
      component: () => import("../view/invoice/invoiceTable.vue"),
      meta: {
        requiresAuth: true, // This route requires authentication
      },
    },


    {
      path: "/table/invoice/:id",
      name: "driverInvoice",
      component: () => import("../view/invoice/invoiceTable.vue"),
      meta: {
        requiresAuth: true, // This route requires authentication
      },
    },
  {
      path: "/invoice/view/:id",
      name: "invoiceReport",
      component: () => import("../view/invoice/invoiceReport.vue"),
      meta: {
        requiresAuth: true, // This route requires authentication
      },
    },

    // Service 
       {
      path: "/service/vehicle",
      name: "carService",
      component: () => import("../view/car/carService.vue"),
      meta: {
        requiresAuth: true, // This route requires authentication
      },
    },
    
   {
      path: "/service/list",
      name: "listService",
      component: () => import("../view/car/listService.vue"),
      meta: {
        requiresAuth: true, // This route requires authentication
      },
    },

    {
      path: "/service/list/:id",
      name: "driverMaintenance",
      component: () => import("../view/car/listService.vue"),
      meta: {
        requiresAuth: true, // This route requires authentication
      },
    },
    {
      path: "/service/details/:id",
      name: "Servicedetails",
      component: () => import("../view/car/detailsService.vue"),
      meta: {
        requiresAuth: true, // This route requires authentication
      },
    },


    {
      path: "/maintenance/edit/:id",
      name: "maintenanceEdit",
      component: () => import("../view/car/editService.vue"),
      meta: {
        requiresAuth: true, // This route requires authentication
      },
    },

   // uberfile

    {
      path: "/uberfile/listUberFile",
      name: "listUberFile",
      component: () => import("../view/uberfile/listUberFile.vue"),
      meta: {
        requiresAuth: true, // This route requires authentication
      },
    },
    {
      path: "/earningReportlist",
      name: "earningReportlist",
      component: () => import("../view/earning/earningReportList.vue"),
      meta: {
        requiresAuth: true, // This route requires authentication
      },
    },

    {
      path: "/earningReportlist/:name/:last_name",
      name: "driverEarningReportlist",
      component: () => import("../view/earning/earningReportList.vue"),
      meta: {
        requiresAuth: true, // This route requires authentication
      },
    },

    {
      path: "/efficiencyReport",
      name: "efficiencyReport",
      component: () => import("../view/efficiencyReport/efficiency_report.vue"),
      meta: {
        requiresAuth: true, // This route requires authentication
      },
    },

    {
      path: "/efficiencyReport/:id",
      name: "driverEfficiencyReport",
      component: () => import("../view/efficiencyReport/efficiency_report.vue"),
      meta: {
        requiresAuth: true, // This route requires authentication
      },
    },
    {
      path: "/boltdata",
      name: "boltdata",
      component: () => import("../view/uberfile/boltdata.vue"),
      meta: {
        requiresAuth: true, // This route requires authentication
      },
    },

    {
      path: "/main/widgets/crypto-icons",
      name: "crypto-icons",
      component: () => import("@/view/main/widgets/crypto-icons"),
      meta: {
        title: "Crypto Icons",
        breadcrumb: [
          {
            text: "Main"
          },
          {
            text: "Widgets"
          }
        ]
      },
    },
    {
      path: "/main/widgets/user-icons",
      name: "user-icons",
      component: () => import("@/view/main/widgets/user-icons"),
      meta: {
        title: "User Icons",
        breadcrumb: [
          {
            text: "Main"
          },
          {
            text: "Widgets"
          }
        ]
      },
    },
    {
      path: "/main/widgets/flags",
      name: "flags",
      component: () => import("@/view/main/widgets/flags"),
      meta: {
        title: "Flags",
        breadcrumb: [
          {
            text: "Main"
          },
          {
            text: "Widgets"
          }
        ]
      },
    },
    {
      path: "/main/layouts/divider",
      name: "divider",
      component: () => import("@/view/main/layouts/divider"),
      meta: {
        title: "Divider",
        requiresAuth: true, // This route requires authentication
        breadcrumb: [
          {
            text: "Main"
          },
          {
            text: "Layouts"
          }
        ]
      },
    },
    {
      path: "/main/layouts/grid-system",
      name: "grid-system",
      component: () => import("@/view/main/layouts/grid-system"),
      meta: {
        title: "Grid System",
        breadcrumb: [
          {
            text: "Main"
          },
          {
            text: "Layouts"
          }
        ]
      },
    },
    {
      path: "/main/layouts/page-layouts/boxed-layout",
      name: "boxed-layout",
      component: () => import("@/view/main/layouts/page-layouts/boxed-layout"),
    },
    {
      path: "/main/layouts/page-layouts/vertical-layout",
      name: "vertical-layout",
      component: () => import("@/view/main/layouts/page-layouts/vertical-layout"),
    },
    {
      path: "/main/layouts/page-layouts/horizontal-layout",
      name: "horizontal-layout",
      component: () => import("@/view/main/layouts/page-layouts/horizontal-layout"),
      meta: {
        layout: "horizontal",
      },
    },
    {
      path: "/main/layouts/page-layouts/full-layout",
      name: "full-layout",
      component: () => import("@/view/main/layouts/page-layouts/full-layout"),
      meta: {
        layout: "full",
      },
    },

    // PAGES
    {
      path: "/pages/error-403",
      name: "error-403",
      component: () => import("@/view/pages/errors/403"),
      meta: {
        layout: "full",
      },
    },
    {
      path: "/pages/error-404",
      name: "error-404",
      component: () => import("@/view/pages/errors/404"),
      meta: {
        layout: "full",
      },
    },
    {
      path: "/pages/error-500",
      name: "error-500",
      component: () => import("@/view/pages/errors/500"),
      meta: {
        layout: "full",
      },
    },
    {
      path: "/pages/error-502",
      name: "error-502",
      component: () => import("@/view/pages/errors/502"),
      meta: {
        layout: "full",
      },
    },
    {
      path: "/pages/error-503",
      name: "error-503",
      component: () => import("@/view/pages/errors/503"),
      meta: {
        layout: "full",
      },
    },
    {
      path: "/pages/coming-soon",
      name: "coming-soon",
      component: () => import("@/view/pages/errors/coming-soon"),
      meta: {
        layout: "full",
      },
    },
    {
      path: "/pages/maintenance",
      name: "maintenance",
      component: () => import("@/view/pages/errors/maintenance"),
      meta: {
        layout: "full",
      },
    },
    {
      path: "/pages/pricing",
      name: "pricing",
      component: () => import("@/view/pages/pricing"),
      meta: {
        title: "Pricing",
        breadcrumb: [
          {
            text: "Pages"
          }
        ]
      },
    },
    {
      path: "/pages/profile/personel-information",
      name: "profile-password-change",
      component: () => import("../view/pages/profile/PasswordChange.vue"),
      meta: {
        title: "Profile",
        breadcrumb: [
          {
            text: "Pages"
          }
        ]
      },
    },
   
    
    
    {
      path: "/pages/invoice",
      name: "invoice",
      component: () => import("@/view/pages/invoice"),
      meta: {
        title: "Invoice",
        breadcrumb: [
          {
            text: "Pages"
          }
        ]
      },
    },
    {
      path: "/pages/faq",
      name: "faq",
      component: () => import("@/view/pages/faq"),
      meta: {
        title: "FAQ",
        breadcrumb: [
          {
            text: "Pages"
          }
        ]
      },
    },
    {
      path: "/pages/knowledge-base/knowledge-base-1",
      name: "knowledge-base-1",
      component: () => import("@/view/pages/knowledge-base/knowledge-base-1"),
      meta: {
        title: "Knowledge Base-1",
        breadcrumb: [
          {
            text: "Pages"
          }
        ]
      },
    },
    {
      path: "/pages/knowledge-base/knowledge-base-2",
      name: "knowledge-base-2",
      component: () => import("@/view/pages/knowledge-base/knowledge-base-2"),
      meta: {
        title: "Knowledge Base-2",
        breadcrumb: [
          {
            text: "Pages"
          }
        ]
      },
    },
    {
      path: "/pages/blank-page",
      name: "blank-page",
      component: () => import("@/view/pages/blank"),
      meta: {
        title: "Blank Page",
        breadcrumb: [
          {
            text: "Pages"
          }
        ]
      },
    },
    {
      path: "/pages/authentication/login",
      name: "login",
      component: () => import("@/view/pages/authentication/login"),
      meta: {
        layout: "full",
      },
    },
    {
      path: "/pages/authentication/register",
      name: "register",
      component: () => import("@/view/pages/authentication/register"),
      meta: {
        layout: "full",
      },
    },
    {
      path: "/pages/authentication/recover-password",
      name: "recover",
      component: () => import("@/view/pages/authentication/recover"),
      meta: {
        layout: "full",
      },
    },
    {
      path: "/pages/authentication/reset-password",
      name: "reset",
      component: () => import("@/view/pages/authentication/reset"),
      meta: {
        layout: "full",
      },
    },
    {
      path: "/pages/welcome",
      name: "welcome",
      component: () => import("@/view/pages/lock-screen/welcome"),
      meta: {
        layout: "full",
      },
    },
    {
      path: "/pages/deactivated",
      name: "deactivated",
      component: () => import("@/view/pages/lock-screen/deactivated"),
      meta: {
        layout: "full",
      },
    },
    {
      path: "/pages/password-is-changed",
      name: "password-is-changed",
      component: () => import("@/view/pages/lock-screen/password"),
      meta: {
        layout: "full",
      },
    },
    {
      path: "/pages/lock",
      name: "lock",
      component: () => import("@/view/pages/lock-screen/lock"),
      meta: {
        layout: "full",
      },
    },

    // COMPONENTS
    {
      path: "/components/components-page",
      name: "components-page",
      meta: {
        title: "Components",
      },
      component: () => import("@/view/components/components-page")
    },
    {
      path: "/components/general/remix-icons",
      name: "remix-icons",
      meta: {
        title: "Remix Icons",
        breadcrumb: [
          {
            text: "Components",
            path: "/components/components-page"
          },
          {
            text: "General"
          }
        ]
      },
      component: () => import("@/view/components/general/remix-icons")
    },
    {
      path: "/components/general/iconly-icons",
      name: "iconly-icons",
      meta: {
        title: "Iconly Icons",
        breadcrumb: [
          {
            text: "Components",
            path: "/components/components-page"
          },
          {
            text: "General"
          }
        ]
      },
      component: () => import("@/view/components/general/iconly-icons")
    },
    {
      path: "/components/general/buttons",
      name: "buttons",
      meta: {
        title: "Buttons",
        breadcrumb: [
          {
            text: "Components",
            path: "/components/components-page"
          },
          {
            text: "General"
          }
        ]
      },
      component: () => import("@/view/components/general/buttons")
    },
    {
      path: "/components/general/style-guide",
      name: "style-guide",
      meta: {
        title: "Style Guide",
        breadcrumb: [
          {
            text: "Components",
            path: "/components/components-page"
          },
          {
            text: "General"
          }
        ]
      },
      component: () => import("@/view/components/general/style-guide")
    },

    {
      path: "/components/navigation/menu",
      name: "menu",
      meta: {
        title: "Menu",
        breadcrumb: [
          {
            text: "Components",
            path: "/components/components-page"
          },
          {
            text: "Navigation"
          }
        ]
      },
      component: () => import("@/view/components/navigation/menu")
    },
    {
      path: "/components/navigation/dropdown",
      name: "dropdown",
      meta: {
        title: "Dropdown",
        breadcrumb: [
          {
            text: "Components",
            path: "/components/components-page"
          },
          {
            text: "Navigation"
          }
        ]
      },
      component: () => import("@/view/components/navigation/dropdown")
    },
    {
      path: "/components/navigation/breadcrumb",
      name: "breadcrumb",
      meta: {
        title: "Breadcrumb",
        breadcrumb: [
          {
            text: "Components",
            path: "/components/components-page"
          },
          {
            text: "Navigation"
          }
        ]
      },
      component: () => import("@/view/components/navigation/breadcrumb")
    },
    {
      path: "/components/navigation/pagination",
      name: "pagination",
      meta: {
        title: "Pagination",
        breadcrumb: [
          {
            text: "Components",
            path: "/components/components-page"
          },
          {
            text: "Navigation"
          }
        ]
      },
      component: () => import("@/view/components/navigation/pagination")
    },

    {
      path: "/components/data-entry/checkbox",
      name: "checkbox",
      meta: {
        title: "Checkbox",
        breadcrumb: [
          {
            text: "Components",
            path: "/components/components-page"
          },
          {
            text: "Data Entry"
          }
        ]
      },
      component: () => import("@/view/components/data-entry/checkbox")
    },
    {
      path: "/components/data-entry/form",
      name: "form",
      meta: {
        title: "Form",
        breadcrumb: [
          {
            text: "Components",
            path: "/components/components-page"
          },
          {
            text: "Data Entry"
          }
        ]
      },
      component: () => import("@/view/components/data-entry/form")
    },
    {
      path: "/components/data-entry/input",
      name: "input",
      meta: {
        title: "Input",
        breadcrumb: [
          {
            text: "Components",
            path: "/components/components-page"
          },
          {
            text: "Data Entry"
          }
        ]
      },
      component: () => import("@/view/components/data-entry/input")
    },
    {
      path: "/components/data-entry/input-number",
      name: "input-number",
      meta: {
        title: "Input Number",
        breadcrumb: [
          {
            text: "Components",
            path: "/components/components-page"
          },
          {
            text: "Data Entry"
          }
        ]
      },
      component: () => import("@/view/components/data-entry/input-number")
    },
    {
      path: "/components/data-entry/input-group",
      name: "input-group",
      meta: {
        title: "Input Group",
        breadcrumb: [
          {
            text: "Components",
            path: "/components/components-page"
          },
          {
            text: "Data Entry"
          }
        ]
      },
      component: () => import("@/view/components/data-entry/input-group")
    },
    {
      path: "/components/data-entry/radio",
      name: "radio",
      meta: {
        title: "Radio",
        breadcrumb: [
          {
            text: "Components",
            path: "/components/components-page"
          },
          {
            text: "Data Entry"
          }
        ]
      },
      component: () => import("@/view/components/data-entry/radio")
    },
    {
      path: "/components/data-entry/select",
      name: "select",
      meta: {
        title: "Select",
        breadcrumb: [
          {
            text: "Components",
            path: "/components/components-page"
          },
          {
            text: "Data Entry"
          }
        ]
      },
      component: () => import("@/view/components/data-entry/select")
    },
    {
      path: "/components/data-entry/slider",
      name: "slider",
      meta: {
        title: "Slider",
        breadcrumb: [
          {
            text: "Components",
            path: "/components/components-page"
          },
          {
            text: "Data Entry"
          }
        ]
      },
      component: () => import("@/view/components/data-entry/slider")
    },
    {
      path: "/components/data-entry/switch",
      name: "switch",
      meta: {
        title: "Switch",
        breadcrumb: [
          {
            text: "Components",
            path: "/components/components-page"
          },
          {
            text: "Data Entry"
          }
        ]
      },
      component: () => import("@/view/components/data-entry/switch")
    },

    {
      path: "/components/data-display/avatar",
      name: "avatar",
      meta: {
        title: "Avatar",
        breadcrumb: [
          {
            text: "Components",
            path: "/components/components-page"
          },
          {
            text: "Data Display"
          }
        ]
      },
      component: () => import("@/view/components/data-display/avatar")
    },
    {
      path: "/components/data-display/badge",
      name: "badge",
      meta: {
        title: "Badge",
        breadcrumb: [
          {
            text: "Components",
            path: "/components/components-page"
          },
          {
            text: "Data Display"
          }
        ]
      },
      component: () => import("@/view/components/data-display/badge")
    },
    {
      path: "/components/data-display/card",
      name: "card",
      meta: {
        title: "Card",
        breadcrumb: [
          {
            text: "Components",
            path: "/components/components-page"
          },
          {
            text: "Data Display"
          }
        ]
      },
      component: () => import("@/view/components/data-display/card")
    },
    {
      path: "/components/data-display/carousel",
      name: "carousel",
      meta: {
        title: "Carousel",
        breadcrumb: [
          {
            text: "Components",
            path: "/components/components-page"
          },
          {
            text: "Data Display"
          }
        ]
      },
      component: () => import("@/view/components/data-display/carousel")
    },
    {
      path: "/components/data-display/accordion",
      name: "accordion",
      meta: {
        title: "Accordion",
        breadcrumb: [
          {
            text: "Components",
            path: "/components/components-page"
          },
          {
            text: "Data Display"
          }
        ]
      },
      component: () => import("@/view/components/data-display/accordion")
    },
    {
      path: "/components/data-display/collapse",
      name: "collapse",
      meta: {
        title: "Collapse",
        breadcrumb: [
          {
            text: "Components",
            path: "/components/components-page"
          },
          {
            text: "Data Display"
          }
        ]
      },
      component: () => import("@/view/components/data-display/collapse")
    },
    {
      path: "/components/data-display/list",
      name: "list",
      meta: {
        title: "List",
        breadcrumb: [
          {
            text: "Components",
            path: "/components/components-page"
          },
          {
            text: "Data Display"
          }
        ]
      },
      component: () => import("@/view/components/data-display/list")
    },
    {
      path: "/components/data-display/popover",
      name: "popover",
      meta: {
        title: "Popover",
        breadcrumb: [
          {
            text: "Components",
            path: "/components/components-page"
          },
          {
            text: "Data Display"
          }
        ]
      },
      component: () => import("@/view/components/data-display/popover")
    },
    {
      path: "/components/data-display/table",
      name: "table",
      meta: {
        title: "Table",
        breadcrumb: [
          {
            text: "Components",
            path: "/components/components-page"
          },
          {
            text: "Data Display"
          }
        ]
      },
      component: () => import("@/view/components/data-display/table")
    },
    {
      path: "/components/data-display/tabs",
      name: "tabs",
      meta: {
        title: "Tabs",
        breadcrumb: [
          {
            text: "Components",
            path: "/components/components-page"
          },
          {
            text: "Data Display"
          }
        ]
      },
      component: () => import("@/view/components/data-display/tabs")
    },
    {
      path: "/components/data-display/tooltip",
      name: "tooltip",
      meta: {
        title: "Tooltip",
        breadcrumb: [
          {
            text: "Components",
            path: "/components/components-page"
          },
          {
            text: "Data Display"
          }
        ]
      },
      component: () => import("@/view/components/data-display/tooltip")
    },
    {
      path: "/components/feedback/alert",
      name: "alert",
      meta: {
        title: "Alert",
        breadcrumb: [
          {
            text: "Components",
            path: "/components/components-page"
          },
          {
            text: "Feedback"
          }
        ]
      },
      component: () => import("@/view/components/feedback/alert")
    },
    {
      path: "/components/feedback/drawer",
      name: "drawer",
      meta: {
        title: "Drawer",
        breadcrumb: [
          {
            text: "Components",
            path: "/components/components-page"
          },
          {
            text: "Feedback"
          }
        ]
      },
      component: () => import("@/view/components/feedback/drawer")
    },
    {
      path: "/components/feedback/modal",
      name: "modal",
      meta: {
        title: "Modal",
        breadcrumb: [
          {
            text: "Components",
            path: "/components/components-page"
          },
          {
            text: "Feedback"
          }
        ]
      },
      component: () => import("@/view/components/feedback/modal")
    },
    {
      path: "/components/feedback/notification",
      name: "notification",
      meta: {
        title: "Notification",
        breadcrumb: [
          {
            text: "Components",
            path: "/components/components-page"
          },
          {
            text: "Feedback"
          }
        ]
      },
      component: () => import("@/view/components/feedback/notification")
    },
    {
      path: "/components/feedback/progress",
      name: "progress",
      meta: {
        title: "Progress",
        breadcrumb: [
          {
            text: "Components",
            path: "/components/components-page"
          },
          {
            text: "Feedback"
          }
        ]
      },
      component: () => import("@/view/components/feedback/progress")
    },
    {
      path: "/components/feedback/spinner",
      name: "spinner",
      meta: {
        title: "Spinner",
        breadcrumb: [
          {
            text: "Components",
            path: "/components/components-page"
          },
          {
            text: "Feedback"
          }
        ]
      },
      component: () => import("@/view/components/feedback/spinner")
    },
    {
      path: '*',
      component: () => import("@/view/pages/errors/404"),
      meta: {
        layout: "full",
      },
    },
  ]
});


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const token = localStorage.getItem("token");
    if (!token) {
      // User is not authenticated, redirect to login page
      next({ name: 'login' });
    } else {
      // User is authenticated, allow navigation
      next();
    }
  } else {
    // Route doesn't require authentication, allow navigation
    next();
  }
});

export default router