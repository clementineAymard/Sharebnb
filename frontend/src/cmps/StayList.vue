<template>
    <StaysLoader v-if="stays.length === 0" />
    
    <section v-else className="stay-list"> 
    <!-- <section className="stay-list"> @scroll="onCloseHeader" -->

        <StayPreview v-for="stay in stays" :key="stay._id" :stay="stay" @click="onOpenDetails(stay._id)">
        </StayPreview>

    </section>
</template>

<script>

import StayPreview from './StayPreview.vue';
import StaysLoader from './StaysLoader.vue';

export default {
    name: 'StayList',
    props: {
        stays: Array
    },
    data() {
        return {

        }
    },
    methods: {
        onOpenDetails(stayId) {
            var queryStr = this.$route.query
            this.$router.push({
                path: `/stay/${stayId}`,
                query: queryStr,
            })
        },
        removeStay(stayId) {
            this.$emit('removeStay', stayId)
        },
        updateStay(stay) {
            this.$emit('updateStay', stay)
        },
    },
    computed: {

    },
    created() {
    },
    components: {
        StayPreview,
        StaysLoader
    },
}
</script>