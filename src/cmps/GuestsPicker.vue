<template>
    <section class="guests-picker flex column">
        <div class="adults flex align-center justify-between">
            <div>
                <div class="type">Adults</div>
                <div class="description">Ages 13 or above</div>
            </div>
            <CounterIncDec/>
        </div>

        <div class="children flex align-center justify-between">
            <div>
                <div class="type">Children</div>
                <div class="description">Ages 2-12</div>
            </div>
            <CounterIncDec/>        
        </div>

        <div class="infants flex align-center justify-between">
            <div>
                <div class="type">Infants</div>
                <div class="description">Under 2</div>
            </div>
            <CounterIncDec/>
        </div>
    </section>
</template>

<script>

import CounterIncDec from './CounterIncDec.vue'

export default {
    name: '',
    data() {
        return {
            adultsCount:0,
            childrenCount:0,
            infantsCount:0,
        }
    },
    methods: {

    },
    computed: {

    },
    created() {

    },
    components: {
        CounterIncDec
    },
}
</script>