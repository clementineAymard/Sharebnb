
<template>
    <section class="order-preview">

        <div class="order-pre buyer-name">{{ order.buyer.imgUrl }} {{ order.buyer.fullname }}</div>
        <div class="order-pre stay-name">{{ order.stay.name }}</div>
        <div class="order-pre startDate"> {{ order.startDate }}</div>
        <div class="order-pre endDate"> {{ order.endDate }}</div>
        <div class="order-pre totalPrice"> $ {{ order.totalPrice }}</div>
        <div class="order-pre status medium-font" :class="statusClass"> {{ status }}
        </div>
        <div class="order-pre select ">
            <!-- <option value="" disabled>Select status</option> -->
            <select v-if="status === 'pending'" v-model="status" @change="onSelectStatus">
                <option value="approved">Approve</option>
                <option value="rejected">Reject</option>
            </select>
        </div>
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
            status: this.order.status,
            isApproved: this.order.status
        }
    },
    methods: {
        onSelectStatus() {
            console.log('onSelectStatus', this.order.status, this.status)
            this.order.status = this.status
            this.$emit('updateOrder', this.status)
        }
    },
    computed: {
        statusClass() {
            if (this.status === 'approved')
                return 'green'
            else if (this.status === 'rejected')
                return 'red'
            else return 'black'
        }
    },
    created() {

    },
    components: {

    }
}
</script>
