
<template>
    <section class="trip-preview">
        <div class="order-stay">
            <img :src="imgStay" alt="">
            {{ order.stayName }}
        </div>
        <div>{{ order.hostFullname }}</div>
        <div> {{ order.startDate }}</div>
        <div> {{ order.endDate }}</div>
        <div> {{ order.totalPrice }}$</div>
        <div class="status medium-font capitalize" :class="statusClass"> {{ order.status }}</div>
    </section>
</template>

<script>
export default {
    name: '',
    props: { order: Object },
    data() {
        return {
            status: '',

        }
    },
    methods: {
    },
    computed: {
        users() {
            return this.$store.getters.users
        },
        imgStay() {
            return this.order.stayImg
        },
        statusClass() {
            if (this.order.status === 'approved')
                return 'green'
            else if (this.order.status === 'rejected')
                return 'red'
            else return 'black'
        }

    },
    created() {
        this.$store.dispatch({ type: 'loadUsers' })
    },
    components: {

    },
    watch: {
        // hostName() {

        // }
    }
}
</script>
