<template>
    <section class="order-confirm">
        <header class="header-order1">
            <p class="medium-font first-line">Your order has been sent to host</p>
        </header>
        <div class="order-container flex justify-between">
            <div class="order-text">
                <p class="bold-font Attention big">Attention!</p>
                <p class="bold-font">Your reservation won't be confirmed until the host accepts your request (within 24
                    hours).</p>
                <p class="pad-end">You won't be charged until then.</p>
                <hr>
                <p class="bold-font big">Cancellation policy</p>
                <p class="pad-end">Free cancellation before April 29. Cancel before May 3 for a partial refund.</p>
                <hr>
                <p class="bold-font big">Ground rules</p>
                <p>We ask every guest to remember a few simple things about what makes a great guest.</p>
                <ul class="list-on-order pad-end">
                    <li> Follow the house rules</li>
                    <li>Treat your Host's home like your own </li>
                </ul>
                <button class="CheckoutBtn flex align-center justify-between"
                    :style="`--mouse-x:${offset.x}; --mouse-y:${offset.y}`" @mouseover="onHoverCheckoutBtn">
                    <span>Check your orders</span>
                </button>
                <a @click="goToOrders">Check your orders</a>
            </div>
            <div class="order-sticky">
                <div class="order-details-container">
                    <div class="stay-info-container">
                        <img src="http://res.cloudinary.com/dmtlr2viw/image/upload/v1663437045/dmquvficldi8ssfdlrrx.jpg"
                            alt="">
                        <p>Fantastic duplex apartment with three bedrooms</p>
                        <div class="review-totals">
                            <i class="fa-sharp fa-solid fa-star"></i>
                            <p>4.74 </p>
                            <p class="under-line">21 reviews</p>


                        </div>
                    </div>
                    <div class="protected">
                        <p> Your booking is protected by <span class="air-txt medium-font">Air</span><span
                                class="cover-txt medium-font">Cover</span></p>
                    </div>
                    <div class="price-details ">
                        <p class="header medium-font">Price Details</p>
                        <div class="price-order">
                            <p>${{ order.stay.price }} x {{nightsCount}} nights</p>
                            <p class="end">${{ order.totalPrice }}</p>
                            <p>total guests</p>
                            <p class="end" v-if="order.guests.length > 0">{{guestsCount}}</p>
                            <p class="end" v-else>2</p>
                        </div>

                    </div>
                    <div class="total-price-order">
                        <p class="bold-font">Total after fees</p>
                        <p class="end bold-font">${{ order.totalPrice }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    name: '',
    data() {
        return {
            order: this.$store.getters.currOrder,
            offset: {
                x: 0,
                y: 0
            },
            // stays: this.$store.getters.stays
        }
    },
    methods: {
        onHoverCheckoutBtn(event) {
            this.offset.x = event.offsetX
            this.offset.y = event.offsetY
        },
        goToOrders(){
            this.$router.push(`/user/${this.order.buyer._id}/orders`)
        }
    },
    computed: {
        nights() {
            return this.order.endDate - this.order.startDate
        },
        totalAfterFees() {
            return (this.order.totalPrice * 1.08).toFixed(2)
        },
        nightsCount(){
            return (new Date(this.order.endDate) - new Date(this.order.startDate)) / 86400000
        },
        guestsCount(){
            return parseInt(this.order.guests.adults) + parseInt(this.order.guests.children) + parseInt(this.order.guests.infants)
        }
    },
    created() {

    },
    components: {

    },
}
</script>