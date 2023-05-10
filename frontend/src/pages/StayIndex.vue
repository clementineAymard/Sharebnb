<template>
    <div>
        <FilterCategory @filterBy="filterBy"/>

        <StayList :stays="stays" @removeStay="removeStay" @updateStay="updateStay"/>
    </div>
</template>

<script>
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { stayService } from '../services/stay.service.local'
import { getActionRemoveStay, getActionUpdateStay, getActionAddStayMsg } from '../store/stay.store'
import StayList from '../cmps/StayList.vue'
import FilterCategory from '../cmps/FilterCategory.vue'

export default {
    data() {
        return {
            stayToAdd: stayService.getEmptyStay()
        }
    },
    computed: {
        loggedInUser() {
            return this.$store.getters.loggedinUser
        },
        stays() {
            return this.$store.getters.stays
        }
    },
    created() {
        this.$store.dispatch({ type: 'loadStays', filterBy: {} })
    },
    methods: {
        filterBy(filterBy) {
            console.log('Selected category:', filterBy)
            this.$store.dispatch({ type: 'loadStays', filterBy })
        },
        async addStay() {
            try {
                await this.$store.dispatch({ type: 'addStay', stay: this.stayToAdd })
                showSuccessMsg('Stay added')
                this.stayToAdd = stayService.getEmptyStay()
            } catch (err) {
                console.log(err)
                showErrorMsg('Cannot add stay')
            }
        },
        async removeStay(stayId) {
            try {
                await this.$store.dispatch(getActionRemoveStay(stayId))
                showSuccessMsg('Stay removed')

            } catch (err) {
                console.log(err)
                showErrorMsg('Cannot remove stay')
            }
        },
        async updateStay(stay) {
            try {
                stay = { ...stay }
                stay.price = +prompt('New price?', stay.price)
                await this.$store.dispatch(getActionUpdateStay(stay))
                showSuccessMsg('Stay updated')

            } catch (err) {
                console.log(err)
                showErrorMsg('Cannot update stay')
            }
        },
    },
    components: {
        StayList,
        FilterCategory
    }


}
</script>
