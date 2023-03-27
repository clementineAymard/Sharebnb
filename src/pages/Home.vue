<template>
    <section class="container home text-center">
        <StayIndex />
    </section>
</template>

<script>
import StayIndex from './StayIndex.vue';

export default {
    name: "home",
    created() {
        this.$store.dispatch({ type: 'loadStays', filterBy: {} })
    },
    data() {
        return {};
    },
    computed: {},
    methods: {},
    components: { StayIndex }
}
</script>
