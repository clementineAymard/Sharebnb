<template>
    <section className="stay-list"> <!-- @scroll="onCloseHeader"-->

        <StayPreview v-for="stay in stays" :key="stay._id" :stay="stay" @removeStay="$emit('removeStay', stay._id)"
            @updateStay="$emit('updateStay', stay)" @click="this.$router.push(`/stay/${stay._id}`)"></StayPreview>

    </section>
</template>

<script>
import { buildSlots } from '@vue/compiler-core';
import { closeHeader } from "../services/event-bus.service.js"
import StayPreview from './StayPreview.vue';

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
        StayPreview
    },
}
</script>