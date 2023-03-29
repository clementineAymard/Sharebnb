
<template>
    <section class="order-preview">

        <div class="order-pre buyer-name">{{ order.buyer.fullname }}</div>
        <div class="order-pre stay-name">{{ order.stay.name }}</div>
        <div class="order-pre startDate"> {{ order.startDate }}</div>
        <div class="order-pre endDate"> {{ order.endDate }}</div>
        <div class="order-pre totalPrice"> {{ order.totalPrice }}</div>
        <div class="order-pre status"> {{ order.status }}</div>
        <div class="order-pre select"> 
            <select v-if="order.status==='pending'" v-model="status" @change="onSelectStatus">
            <option value="" selected>Select status</option>
            <option value="approved">Approve</option>
            <option value="rejected">Reject</option>
        </select></div>
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
            status:''
        }
    },
    methods: {
        onSelectStatus(){
            this.$emit('updateOrder', this.status)
        }
    },
    computed: {

    },
    created() {

    },
    components: {

    }
}
</script>
