
<template>
    <section class="trip-preview">


        <div class="order-stay">
            <img :src="order.stay.imgUrl" alt="">
            {{ order.stay.name }}
        </div>
        <div>{{ hostName }}</div>
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
        onSelectStatus() {
            this.$emit('updateOrder', this.status)
        },
        imgStay(){
           return  "order.stay.imgUrl" 
        }

    },
     computed: {
        users(){
            return this.$store.getters.users
        },
        hostName() {
            const host = this.users.find(host => host._id === this.order.hostId)
            console.log('host', host)

            return host?.fullname || 'Inbar'
        }
    },
    created() {
        this.$store.dispatch({ type: 'loadUsers' })
    },
    components: {

    },
    watch:{
        // hostName() {

        // }
    }
}
</script>
