<template>
    <div class="list-trip">
        <ul v-if="orders.length">
            <div class="trip-preview header-trip">
                <span @click="setSortBy('name')" class="header-sort-trip">Stay
                    Name</span>
                <span @click="setSortBy('host')" class="header-sort-trip">Host</span>
                <span @click="setSortBy('startDate')" class="header-sort-trip">Check in</span>
                <span @click="setSortBy('endDate')" class="header-sort-trip">Check out</span>
                <span @click="setSortBy('totalPrice')" class="header-sort-trip">Total price</span>
                <span @click="setSortBy('status')" class="header-sort-trip">Status</span>
            </div>
            <li v-for="order in orders" :key="order.name">
                <TripPreview :order="order"></TripPreview>
            </li>
            <!-- <RouterLink to="/list/people/order">Add a new Character</RouterLink> -->
        </ul>


        <h3 v-else>No trips yet.</h3>
    </div>
</template>
  
<script>
import TripPreview from './../cmps/TripPreview.vue'
import { showSuccessMsg } from '../services/event-bus.service'

export default {
    name: '',
    data() {
        return {
            // filterBy: {
            //   buyerId: this.loggedinUser._id
            // },

        }
    },
    methods: {
        changeTripStatus() {
            // const orderToChange = this.orders.find((o) => o._id === trip._id)
            // if (orderToChange) orderToChange.status = trip.status
            console.log('got notification from socket')
            showSuccessMsg('Your trip status was updated !')
            this.$store.dispatch({ type: 'loadOrders', filterBy: { buyerId: this.loggedinUser._id } })
        },
    },
    computed: {
        orders() {
            console.log('trips: ', this.$store.getters.orders)
            return JSON.parse(JSON.stringify(this.$store.getters.orders)).reverse()
        },
        loggedinUser() {
            console.log('loggedinUser : ', this.$store.getters.loggedinUser)
            return this.$store.getters.loggedinUser
        }
    },
    async created() {
        socketService.on('your-order-updated', this.changeTripStatus)
        try {
            await this.$store.dispatch({ type: 'loadOrders', filterBy: { buyerId: this.loggedinUser._id } })
        }
        catch (err) {
            console.log(err, 'cannot load trips');
        }
    },
    unmounted() {
        socketService.off('your-order-updated')
    },
    components: {
        TripPreview
    },
}

</script>
  
