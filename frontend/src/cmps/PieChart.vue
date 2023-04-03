<template>
    <DoughnutChart :chartData="testData" class="doughnut" />
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
            testData: {
                labels: ['Approved', 'Rejected', 'Pending'],
                datasets: [
                    {
                        data: [7, 4, 1],
                        backgroundColor: ['#a5e8c1', '#e8b8a5', '#a5a5e8', '#97B0C4', '#FBFFB1'],
                    },
                ],
                options: {

                }
            },
        }
    },
    created() {
        // this.setData()
    },
    mounted() {

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

    },
    computed: {
        //   approvedNum(){
        //     this.orders.reduce((acc,order)=>{
        //     if(order.status === 'approved')  acc++
        //     return acc
        //   },0)
        //  }
    },
}
</script>