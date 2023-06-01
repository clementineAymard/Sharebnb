<template>
    <DoughnutChart :options="chartOptions" :chartData="chartData" class="doughnut" />
</template>
  
<script lang="ts">
import { DoughnutChart } from 'vue-chart-3'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

export default {
    name: 'PieChart',
    props: { orders: Array },
    components: { DoughnutChart },
    data() {
        return {
            chartData: {
                labels: ['Approved', 'Rejected', 'Pending'],
                datasets: [
                    {
                        data: [9, 1, 1],
                        backgroundColor: ['#a5e8c1', '#e8b8a5', '#a5a5e8'],
                    },
                ],
                options: {

                }
            },
            chartOptions: {
                responsive: true,
                pieceLabel: {
                    mode: 'percentage',
                    precision: 1
                }
            }
        }
    },
    created() {
    },
    mounted() {
        // this.setData()
    },
    methods: {
        setData() {
            var approvedCount = this.orders.reduce((acc, order) => {
                if (order.status === 'approved') acc++
                return acc
            }, 0)
            this.testData.datasets[0].data[0] = approvedCount

            var rejectedCount = this.orders.reduce((acc, order) => {
                if (order.status === 'rejected') acc++
                return acc
            }, 0)
            this.testData.datasets[0].data[1] = rejectedCount

            var pendingCount = this.orders.reduce((acc, order) => {
                if (order.status === 'pending') acc++
                return acc
            }, 0)
            this.testData.datasets[0].data[2] = pendingCount
        }
    },
    computed: {},
}
</script>