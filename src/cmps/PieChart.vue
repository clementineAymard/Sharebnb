<template>
    <DoughnutChart :chartData="testData" class="chart doughnut"/>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  import { DoughnutChart } from 'vue-chart-3'
  import { Chart, registerables } from 'chart.js'
  
  Chart.register(...registerables)

  export default {
    name: 'PieChart',
    components: { DoughnutChart },
    data() {
      return {
        //testData.labels = labels, testData.datasets[0].data = data
        testData: {
          labels: ['approved', 'rejected','pending'],
          datasets: [
            {
              data: [16, 4, 1],
              backgroundColor: ['#a5e8c1', '#e8b8a5', '#a5a5e8', '#97B0C4', '#FBFFB1'],
            },
          ],
        },
      }
    },
    created() {
      this.setData()
    },
    methods: {
      setData() {
        // const toys = this.getAllToys
        // console.log('this.getAllToys', this.$store.getters.getAllToys)
        // const labelsMap = toys.reduce((acc, toy) => {
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
      // getAllToys() {
      //   return this.$store.getters.getAllToys
      // },
    },
  }
  </script>