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
    props: { orders: Array },
    components: { DoughnutChart },
    data() {
      return {
        //testData.labels = labels, testData.datasets[0].data = data
        testData: {
          labels: ['approved', 'rejected','pending'],
          datasets: [
            {
              data: [7, 4, 1],
              backgroundColor: ['#a5e8c1', '#e8b8a5', '#a5a5e8', '#97B0C4', '#FBFFB1'],
            },
          ],
          options:{
       
          }
        },
      }
      // return { testData };
    },
    created() {
      // this.setData()
    },
    mounted() {
    // datasets: [
    //   {
    //     data: this.testData.datasets[0].data[0] = this.orders.reduce((acc,order)=>{
    //     if(order.status === 'approved')  acc++
    //     return acc
    //   },0),
    //     data1: this.testData.datasets[0].data[1] = this.orders.reduce((acc,order)=>{
    //     if(order.status === 'rejected')  acc++
    //     return acc
    //   },0),
    //     data2: this.testData.datasets[0].data[2] = this.orders.reduce((acc,order)=>{
    //     if(order.status === 'pending')  acc++
    //     return acc
    //   },0),
    //   },
    // ]
  
},

    methods: {
      // setData() {
      //  var appCount = this.orders.reduce((acc,order)=>{
      //   if(order.status === 'approved')  acc++
      //   return acc
      // },0)
      // this.testData.datasets[0].data[0]=appCount

      //  var rejCount = this.orders.reduce((acc,order)=>{
      //   if(order.status === 'rejected')  acc++
      //   return acc
      // },0)
      // this.testData.datasets[0].data[1]=rejCount

      //  var penCount = this.orders.reduce((acc,order)=>{
      //   if(order.status === 'pending')  acc++
      //   return acc
      // },0)
      // this.testData.datasets[0].data[2]=penCount

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
      // },
    },
    computed: {
    //   approvedNum(){
    //     this.orders.reduce((acc,order)=>{
    //     if(order.status === 'approved')  acc++
    //     return acc
    //   },0)
    //  }
      // getAllToys() {
      //   return this.$store.getters.getAllToys
      // },
    },
  }
  </script>