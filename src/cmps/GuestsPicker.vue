<template>
    <section class="guests-picker flex column">
        <div class="adults flex align-center justify-between">
            <div>
                <div class="type">Adults</div>
                <div class="description">Ages 13 or above</div>
            </div>
            <div class="selector">
                <button @click="dec">-</button>
                <span><input type="number" v-model="adultsCount"></span>
                <button @click="inc">+</button>
            </div>
        </div>

        <div class="children flex align-center justify-between">
            <div>
                <div class="type">Children</div>
                <div class="description">Ages 2-12</div>
            </div>
            <div class="selector"></div>
        </div>

        <div class="infants flex align-center justify-between">
            <div>
                <div class="type">Infants</div>
                <div class="description">Under 2</div>
            </div>
            <div class="selector"></div>
        </div>
    </section>
</template>

<script>

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

    },
}
</script>