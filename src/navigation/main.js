export default {
  // header: "Main",
  children: [


    {
      id: "/dashboard",
      title: "Dashboard",
      icon: "Curved-Graph",
      navLink: "/dashboard",
    },
    


    {
      id: "drivers",
      title: "Drivers",
      icon: "Curved-AddUser",
      
      children: [
        {
          id: "drivers",
          title: "Add Drivers",
          navLink: "/drivers/add",
        },
        {
          id: "drivers",
          title: "List Drivers",
          navLink: "/drivers/list",
        },
      ],
    },

     {
      id: "vehicle",
      title: "Vehicle", 
      icon: "Curved-Wallet",
      children: [
        {
          id: "vehicle",
          title: "Add Vehicle",
          navLink: "/vehicle/addVehicle",
        },
        {
          id: "vehicle",
          title: "List Vehicle",
          navLink: "/vehicle/listVehicle",
        },
      ],
    },
     {
      id: "B2B",
      title: "B2B",
      icon: "Curved-People",
      children: [
          {
      id: "driver",
      title: "Drivers",
      icon: "Curved-Work",
      children: [
        {
          id: "driver",
          title: "Add Drivers",
          navLink: "/B2B/driver/add",
        },
        {
          id: "driver",
          title: "List Drivers",
          navLink: "/B2B/driver/lists",
        },
         
      ],
    },
         {
      id: "vehicles",
      title: "Vehicle",
      icon: "Curved-Document",
      children: [
        {
          id: "vehicles",
          title: "Add Vehicle",
          navLink: "/B2B/Vehicle/add",
        },
        {
          id: "vehicles",
          title: "List Vehicle",
          navLink: "/B2B/Vehicle/lists",
        },
      ],
    },
      ],
    },
    //  Report 
     {
      id: "Expense",
      title: "Expense",
      icon: "Curved-EditSquare",
      
      children: [
        {
          id: "Expense",
          title: "Add Expense",
          navLink: "/expense/add",
        },
        {
          id: "Expense",
          title: "List Expense",
          navLink: "/expense/list",
        },
      ],
    },
      
  ]
}