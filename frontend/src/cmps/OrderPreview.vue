
<template>
    <section class="order-preview-wrapper flex column">
        <div class=" stay-name medium-font flex align-center">
            <span>Location : </span>
            {{ order.stayName }}
        </div>
        <section class="order-preview order-list-layout">
            <div class=" buyer-name first-column flex">
                <img :src="order.buyerImg" alt="">
                <span>{{ order.buyerFullname }}</span>
            </div>
            <div class=" startDate"> {{ startDate }}</div>
            <div class=" endDate"> {{ endDate }}</div>
            <div class=" totalPrice"> {{ order.totalPrice }}$ </div>
            <div class=" status medium-font" :class="statusClass"> {{ status }}
            </div>
        </section>

        <div class=" select flex" v-if="status === 'pending'">
            <label for="approval">
                <input type="radio" v-model="status" value="approved" id="approval" hidden @input="onSelectStatus('approved')">
                <span class="approval">Approve</span>
            </label>
            <label for="rejection">
                <input type="radio" v-model="status" value="rejected" id="rejection" hidden @input="onSelectStatus('rejected')">
                <span class="reject">Reject</span>
            </label>
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
        onSelectStatus(newStatus) {
            console.log('onSelectStatus', this.order.status, newStatus)
            this.order.status = newStatus

            console.log('this.order',this.order)
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
