<template>
  <b-card class="hp-card-4 hp-chart-text-color">
    <h4>Revenue</h4>

    <div id="revenue-column-card" class="overflow-hidden">
      <apexchart
        type="bar"
        height="303"
        legend="legend"
        :options="options"
        :series="series"
      ></apexchart>
    </div>
  </b-card>
</template>

<script>
import { BRow, BCol, BCard } from "bootstrap-vue";

export default {
  data() {
    return {
      series: [
        {
          name: "Earning",
          data: [
            28877, 29334, 33233, 36439, 32675, 32333, 33457, 38345, 36783,
            39457, 22459, 39840,
          ],
        },
        {
          name: "Expense",
          data: [
            12010, 11313, 14623, 18935, 17345, 13465, 17813, 19125, 16256,
            20356, 12233, 14570,
          ],
        },
      ],
      options: {
        chart: {
          id: "revenue-column-card",
          fontFamily: "Manrope, sans-serif",
          type: "bar",
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
        },
        labels: {
          style: {
            fontSize: "14px",
          },
        },

        dataLabels: {
          enabled: false,
        },

        grid: {
          borderColor: "#DFE6E9",
          row: {
            opacity: 0.5,
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            borderRadius: 2,
            columnWidth: "45%",
            endingShape: "rounded",
          },
          colors: {
            backgroundBarColors: ["#0063F7", "#00F7BF"],
          },
        },

        stroke: {
          show: true,
          width: 4,
          colors: ["transparent"],
        },
        xaxis: {
          axisTicks: {
            show: false,
            borderType: "solid",
            color: "#78909C",
            height: 6,
            offsetX: 0,
            offsetY: 0,
          },

          tickPlacement: "between",
          labels: {
            style: {
              colors: ["636E72"],
              fontSize: "14px",
            },
          },
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
        },
        legend: {
          horizontalAlign: "right",
          offsetX: 40,
          position: "top",
          markers: {
            radius: 12,
          },
        },
        yaxis: {
          labels: {
            style: {
              colors: ["636E72"],
              fontSize: "14px",
            },
            formatter: (value) => {
              return value / 1000 + "K";
            },
          },

          min: 0,
          max: 40000,
          tickAmount: 4,
        },
      },
    };
  },
  components: {
    BRow,
    BCol,
    BCard,
  },
};
</script>
