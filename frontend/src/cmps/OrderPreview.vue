
<template>
    <div class="order-pre stay-name medium-font">{{ order.stayName }}</div>
    <section class="order-preview">

        <div class="order-pre buyer-name first-colum">
            <img :src="order.buyerImg" alt="">

            {{ order.buyerFullname }}
        </div>
        <div class="order-pre startDate"> {{ startDate }}</div>
        <div class="order-pre endDate"> {{ endDate }}</div>
        <div class="order-pre totalPrice"> {{ order.totalPrice }}$ </div>
        <div class="order-pre status medium-font" :class="statusClass"> {{ status }}
        </div>
    <!-- < div class=" buttons" v-if="buttons">
                        <div @click=" deleteOrder(order.name)"><font-awesome-icon icon="fa-solid fa-trash" /></div>
                <div @click=" this.$router.push({ name: 'order-edit', params: { name: order.name } })">
                                        <font-awesome-icon icon="fa-edit" /> -->


    </section>
    <div class="order-pre select ">
        <!-- <option value="" disabled>Select status</option> -->
        <el-select v-if="status === 'pending'" v-model="status" @change="onSelectStatus" placeholder="Select">
            <el-option value="" label="Select" selected />
            <el-option value="approved" label="Approve" />
            <el-option value="rejected" label="Reject" />
        </el-select>
    </div>
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
            // console.log('onSelectStatus', this.order.status, this.status)
            this.order.status = this.status

            // console.log('this.order',this.order)
            this.$emit('updateOrder', this.order)
        }
    },
    computed: {
        statusClass() {
            if (this.status === 'approved')
                return 'green'
            else if (this.status === 'rejected')
                return 'red'
            else return 'black'
        },
        startDate() {
            return new Intl.DateTimeFormat('en-GB', {
                dateStyle: "short"
            }).format(new Date(this.order.startDate))
        },
        endDate() {
            var shortDate = new Intl.DateTimeFormat('en-GB', {
                dateStyle: "short"
            })
            return shortDate.format(new Date(this.order.endDate))
        }
    },
    created() { },
    components: {}
}
</script>
