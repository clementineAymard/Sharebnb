<template>
    <section class="order-list-wrapper">
        <h1 class="title">My Reservations</h1>
        <details open>
            <summary>Dashboard</summary>
            <div class="charts-container">
                <PieChart :orders="orders" />
                <OrderStatistic />
                <BarChart />
            </div>
        </details>

        <div class="list">
            <ul v-if="orders">
                <div class="order-list-header order-list-layout">
                    <div @click="setSortBy('guest')" class="header-title first-colum">
                        Guest</div>
                    <!-- <div @click="setSortBy('name')" class="header-title name">
                    Stay Name</div> -->
                    <div @click="setSortBy('startDate')" class="header-title">Check in
                    </div>
                    <div @click="setSortBy('endDate')" class="header-title">Check out
                    </div>
                    <div @click="setSortBy('totalPrice')" class="header-title">
                        Total price</div>
                    <div @click="setSortBy('status')" class="header-title">
                        Status</div>
                    <!-- <div class="header-title"></div> -->
                </div>
                <li v-for="order in orders" :key="order.name">
                    <OrderPreview :order="order" @updateOrder="updateOrder"></OrderPreview>
                </li>
            </ul>

            <h3 v-else>No orders yet.</h3>
        </div>
    </section>

    <div class="back" @click="goBack">
        <img src="https://res.cloudinary.com/didkfd9kx/image/upload/v1684147823/back_k9lue1.png">
    </div>
</template>

<script>
import { socketService } from '../services/socket.service'
import OrderPreview from '../cmps/OrderPreview.vue'
import PieChart from '../cmps/PieChart.vue'
import BarChart from '../cmps/BarChart.vue'
import OrderStatistic from '../cmps/OrderStatistic.vue'
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

                socketService.emit('change-order-status', order)
            } catch (err) {
                throw err
            }
        },
        async addOrder(order) {
            showSuccessMsg('Notification: New order.')
            // this.loadOrders()
            await this.$store.dispatch({ type: 'loadOrders', filterBy: { hostId: this.loggedinUser._id } })
        },
        async loadOrders() {
            console.log('LOAD ORDERS')
            await this.$store.dispatch({ type: 'loadOrders', filterBy: { hostId: this.loggedinUser._id } })
        },
        goBack() {
            this.$router.back()
        }
    },
    computed: {
        orders() {
            // console.log('GETTERS:', this.$store.getters.orders)
            return JSON.parse(JSON.stringify(this.$store.getters.orders)).reverse()
        },
        loggedinUser() {
            // console.log(this.$store.getters.loggedinUser);
            return this.$store.getters.loggedinUser
        }
    },
    async created() {
        socketService.on('order-for-you', () => {
            this.addOrder()
        })
        try {
            this.loadOrders()
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
        OrderStatistic
    },
}

</script>
