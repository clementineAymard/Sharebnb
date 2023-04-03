
<template>
    <section class="order-preview-wrapper flex column">
        <div class="order-pre stay-name medium-font">{{ order.stayName }}</div>
        <section class="order-preview">

            <div class="order-pre buyer-name first-column flex column">
                <img :src="order.buyerImg" alt="">
                <span>{{ order.buyerFullname }}</span>
            </div>
            <div class="order-pre startDate"> {{ startDate }}</div>
            <div class="order-pre endDate"> {{ endDate }}</div>
            <div class="order-pre totalPrice"> {{ order.totalPrice }}$ </div>
            <div class="order-pre status medium-font" :class="statusClass"> {{ status }}
            </div>
        </section>

        <div class="order-pre select flex" v-if="status === 'pending'">
            <label for="approval">
                <input type="radio" v-model="status" value="approved" id="approval" hidden @input="onSelectStatus">
                <span class="approval">Approve</span>
            </label>
            <label for="rejection">
                <input type="radio" v-model="status" value="rejected" id="rejection" hidden @input="onSelectStatus">
                <span class="reject">Reject</span>
            </label>


            <!-- <option value="" disabled>Select status</option> -->
        <!-- <el-select v-if="status === 'pending'" v-model="status" @change="onSelectStatus" placeholder="Select">
            <el-option value="" label="Select" selected />
            <el-option value="approved" label="Approve" />
            <el-option value="rejected" label="Reject" />
                        </el-select> -->
        </div>
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
            return new Intl.DateTimeFormat('en', { dateStyle: "short" }).format(new Date(this.order.startDate))
        },
        endDate() {
            var shortDate = new Intl.DateTimeFormat('en', { dateStyle: "short" })
            return shortDate.format(new Date(this.order.endDate))
        }
    },
    created() { },
    components: {}
}
</script>
