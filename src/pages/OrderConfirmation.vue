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
                <p class="pad-end">Free cancellation before Mar 29. Cancel before Apr 3 for a partial refund.</p>
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
                <button>Check your orders</button>
            </div>
            <div class="order-sticky">
                <div class="order-details-container">
                    <div class="stay-info-container">

                        <img src="https://a0.muscache.com/im/pictures/e386d60e-d902-4589-aefb-1943eb7947c3.jpg?im_w=720"
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
                            <p>$65 x 4 nights</p>
                            <p class="end">$260</p>
                            <p>total guests</p>
                            <p class="end">1</p>
                        </div>

                    </div>
                    <div class="total-price-order">
                        <p class="bold-font">Total after fees</p>
                        <p class="end bold-font">$330.20</p>
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
            offset: {
                x: 0,
                y: 0
            },
        }
    },
    methods: {
        onHoverCheckoutBtn(event) {
            this.offset.x = event.offsetX
            this.offset.y = event.offsetY
        },
    },
    computed: {

    },
    created() {

    },
    components: {

    },
}
</script>