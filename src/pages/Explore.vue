<template>
    <section class="exlpore">
        <FilterCategory />
        
        <h3 v-if="stays.length">Found {{ stayNumber }} home<span v-if="stays.length > 1">s</span></h3>
        <h3 v-else>No results found for this search.</h3>

        <StayList :stays="stays" />
    </section>
</template>

<script>
import FilterCategory from '../cmps/FilterCategory.vue';
import StayList from '../cmps/StayList.vue';


export default {
    name: '',
    data() {
        return {
            filterBy: {},
            stays: null
        }
    },
    methods: {

    },
    computed: {
        stays(){
            return this.$store.getters.stays
        },
        stayNumber() {
            return new Intl.NumberFormat().format(this.stays.length)
        }
    },
    created() {
        this.filterBy = this.$route.query
        console.log('this.filterBy', this.filterBy)
        this.$store.dispatch({ type: 'loadStays', filterBy: this.filterBy })
    },
    components: {
        FilterCategory,
        StayList
    },
}
</script>