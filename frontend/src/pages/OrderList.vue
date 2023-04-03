<template>
    <h1 class="head-order">My reservations</h1>
    <div class="charts-container">

        <PieChart :orders="orders" />
        <div class="table-order">
            <!-- <TableOrder></TableOrder> -->
            <StatisticOrder />
        </div>
        <BarChart />
    </div>
    <div class="list">
        <ul v-if="orders">
            <div class="order-preview header-order">
                <span @click="setSortBy('guest')" class="header-sort first-colum">
                    Guest</span>
                <!-- <span @click="setSortBy('name')" class="header-sort name">
                    Stay Name</span> -->
                <span @click="setSortBy('startDate')" class="header-sort">Check
                    in
                </span>
                <span @click="setSortBy('endDate')" class="header-sort">Check
                    out
                </span>
                <span @click="setSortBy('totalPrice')" class="header-sort">
                    Total price</span>
                <span @click="setSortBy('status')" class="header-sort">
                    Status</span>
                <span class="header-sort"></span>
            </div>
            <li v-for="order in orders" :key="order.name">
                <OrderPreview :order="order" @updateOrder="updateOrder"></OrderPreview>
            </li>
        </ul>

        <h3 v-else>No orders yet.</h3>
    </div>
</template>

<script>
import { socketService } from '../services/socket.service'
import OrderPreview from '../cmps/OrderPreview.vue'
import PieChart from '../cmps/PieChart.vue'
import BarChart from '../cmps/BarChart.vue'
import TableOrder from '../cmps/TableOrder.vue'
import StatisticOrder from '../cmps/StatisticOrder.vue'
import { showSuccessMsg } from '../services/event-bus.service'

export default {
    name: '',
    data() {
        return {}
    },
    methods: {
        async updateOrder(order) {
            try {
                await this.$store.dispatch({ type: 'updateOrder', order: order })
                this.orders = JSON.parse(JSON.stringify(this.$store.getters.orders)).reverse()

                // socketService.emit('your-order-updated', order)
            } catch (err) {
                throw err
            }
        },
        addOrder(order) {
            showSuccessMsg('Notification: New order.')
            this.loadOrders()
            // this.orders = JSON.parse(JSON.stringify(this.$store.getters.orders)).reverse()
        },
        loadOrders() {
            this.$store.dispatch({ type: 'loadOrders', filterBy: { hostId: this.loggedinUser._id } })
        }
    },
    computed: {
        orders() {
            // console.log(this.$store.getters.orders)
            return JSON.parse(JSON.stringify(this.$store.getters.orders)).reverse()
        },
        loggedinUser() {
            console.log(this.$store.getters.loggedinUser);
            return this.$store.getters.loggedinUser
        }
    },
    async created() {
        socketService.on('order-for-you', this.addOrder)
        try {
            await this.loadOrders()
        }
        catch (err) {
            console.log(err, 'cannot load orders');
        }

    },
    unmounted() {
        socketService.off('order-for-you')
    },
    components: {
        OrderPreview,
        PieChart,
        BarChart,
        TableOrder,
        StatisticOrder
    },
}

</script>
