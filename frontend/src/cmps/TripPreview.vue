
<template>
    <section class="trip-preview">


        <div class="order-stay">
            <img :src="imgStay" alt="">
            {{ order.stayName }}
        </div>
        <div>{{ order.hostFullname }}</div>
        <div> {{ order.startDate }}</div>
        <div> {{ order.endDate }}</div>
        <div> {{ order.totalPrice }}</div>
        <div class="status medium-font"> {{ order.status }}</div>

    <!-- < div class=" buttons" v-if="buttons">
                        <div @click=" deleteOrder(order.name)"><font-awesome-icon icon="fa-solid fa-trash" /></div>
                <div @click=" this.$router.push({ name: 'order-edit', params: { name: order.name } })">
                                        <font-awesome-icon icon="fa-edit" /> -->


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
