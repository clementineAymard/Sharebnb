<template>
    <BarChart :chartData="testData" class="chart bar"/>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  import { BarChart } from 'vue-chart-3'
  import { Chart, registerables } from 'chart.js'
  
  Chart.register(...registerables)
  
  export default {
    name: 'PieChart',
    components: { BarChart },
    data() {
      return {
        //testData.labels = labels, testData.datasets[0].data = data
        testData: {
          labels: ['December','January','February','March'],
          datasets: [
            {
              data: [3065, 2348, 2758,1974 ],
              backgroundColor: ['#FFBFA9', '#FBFFB1', '#FFEBB4', '#97B0C4', '#FBFFB1'],
            },
          ],
        },
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
  }
  </script>