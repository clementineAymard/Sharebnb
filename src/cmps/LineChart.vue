<template>
    <LineChart :chartData="testData" :chart-options="options" class="chart line" />
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'
import { LineChart } from 'vue-chart-3'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

export default {
    name: 'PieChart',
    components: { LineChart },
    data() {
        return {
            //testData.labels = labels, testData.datasets[0].data = data
            testData: {
                labels: ['December', 'January', 'February', 'March'],
                datasets: [
                    {
                        data: [5, 3, 4, 2],
                        backgroundColor: ['#FFBFA9', '#FFACAC', '#FFEBB4', '#97B0C4', '#FBFFB1'],
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: "Chart Title",
                    }
                }
            }
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