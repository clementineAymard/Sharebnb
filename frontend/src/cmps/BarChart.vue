<template>
  <BarChart :chartData="testData" :options="chartOptions" class="bar" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { BarChart } from 'vue-chart-3'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

const barLabels = ['December', 'January', 'February', 'March']
const barBackgroundColors = ['#FFBFA9', '#FBFFB1', '#FFEBB4', '#97B0C4']

export default defineComponent({
  name: 'PieChart',
  components: { BarChart },
  data() {
    return {
      //testData.labels = labels, testData.datasets[0].data = data
      testData: {
        labels: [ 'January', 'February', 'March'],
        datasets: [
          // {
          //   label: 'Last year',
          //   data: [2065, 2148, 2608,2400 ],
          //   backgroundColor:['#97B0C4'],
          // },
          {
            label: `Monthly income`,
            data: [3065, 2348, 2758],
            backgroundColor: ['#FFBFA9', '#97B0C4','#FBFFB1'],

            barThickness: 16,  // number (pixels) or 'flex'
            maxBarThickness: 18 // number (pixels)

          },
        ],
      },
      chartOptions: {
        responsive: true,
        // plugins: {
        //   title: {
        //     display: true,
        //     text: "Monthly Report",
        //   },
        // },
        scales: {
          xAxes: [{
            barThickness: 6,  // number (pixels) or 'flex'
            maxBarThickness: 8 // number (pixels)
          }]
        }
      }
    }
  },
  created() {
    //   this.setData()
  },
  methods: {
    setData() {
      // const stays = this.stays
      // console.log('this.getAllStays', this.$store.getters.stays)
      // const labelsMap = stays.reduce((acc, toy) => {
      // console.log('toy', toy)
      // toy.labels.forEach((label) => {
      // console.log('label:', label)
      // if (acc[label]) return (acc[label] = toy.price)
      // return (acc[label] = acc[label] + toy.price)
      // })
      // }, {})
      // labelAvgPriceMap {baby:25,outdoor:35,barbie:80,art:5}
      // Object.keys(labelAvgPriceMap) labels ['baby','outdoot','barbie','art']
      // Object.values(labelAvgPriceMap) data [25,35,80,5]
      // const labels =
      // const data =
    },
  },
  computed: {
    // stays() {
    //   return this.$store.getters.getAllStays
    // },
  },
})
</script>
