<template>
    <section class="guests-picker flex column">
        <div class="adults flex align-center justify-between">
            <div>
                <div class="type">Adults</div>
                <div class="description">Ages 13 or above</div>
            </div>
            <CounterIncDec :count="adultsCount" @changeCount="onChangeAdultsCount" />
        </div>

        <div class="children flex align-center justify-between">
            <div>
                <div class="type">Children</div>
                <div class="description">Ages 2-12</div>
            </div>
            <CounterIncDec :count="childrenCount" @changeCount="onChangeChildrenCount" />
        </div>

        <div class="infants flex align-center justify-between">
            <div>
                <div class="type">Infants</div>
                <div class="description">Under 2</div>
            </div>
            <CounterIncDec :count="infantsCount" @changeCount="onChangeInfantsCount" />
        </div>
    </section>
</template>

<script>

import CounterIncDec from './CounterIncDec.vue'

export default {
    name: '',
    data() {
        return {
            adultsCount: 0,
            childrenCount: 0,
            infantsCount: 0,
        }
    },
    methods: {
        onChangeAdultsCount(type) {
            this.adultsCount += type
            if (this.adultsCount < 0) this.adultsCount = 0
            this.$emit('setGuests', {...this.guests})
        },
        onChangeChildrenCount(type) {
            this.childrenCount += type
            if (this.childrenCount < 0) this.childrenCount = 0
            this.$emit('setGuests', {...this.guests})
        },
        onChangeInfantsCount(type) {
            this.infantsCount += type
            if (this.infantsCount < 0) this.infantsCount = 0
            this.$emit('setGuests', {...this.guests})
        },
    },
    computed: {
        guests() {
            return {
                adults: this.adultsCount,
                children: this.childrenCount,
                infants: this.infantsCount
            }
        }
    },
    created() {

    },
    components: {
        CounterIncDec
    },
}
</script>