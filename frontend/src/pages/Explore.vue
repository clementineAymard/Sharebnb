<template>
    <section class="explore">
        <FilterCategory @filterBy="onFilterBy" />

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
            filterBy: {
                loc: '',
                startDate: '',
                endDate: '',
                adults: 0,
                children: 0,
                infants: 0,
                category: ''
            },
            // stays: null
        }
    },
    methods: {
        onFilterBy(filter) {
            console.log('Selected category:', filter)
            this.filterBy.category = filter.category
            this.$store.dispatch({ type: 'loadStays', filterBy: this.filterBy })
        }
    },
    computed: {
        stays() {
            return this.$store.getters.stays
        },
        stayNumber() {
            if (this.stays)
                return new Intl.NumberFormat().format(this.stays.length)
        }
    },
    created() {
        this.filterBy.loc = this.$route.query.loc
        this.filterBy.startDate = this.$route.query.startDate
        this.filterBy.endDate = this.$route.query.endDate
        this.filterBy.adults = this.$route.query.adults
        this.filterBy.children = this.$route.query.children
        this.filterBy.infants = this.$route.query.infants
        this.filterBy.category = this.$route.query.category

        console.log('EXPLORE this.filterBy', this.filterBy)

        delete this.filterBy.startDate
        delete this.filterBy.endDate

        console.log('this.filterBy after del startDate endDate', this.filterBy)

        this.$store.dispatch({ type: 'loadStays', filterBy: this.filterBy })
    },
    components: {
        FilterCategory,
        StayList
    },
}
</script>