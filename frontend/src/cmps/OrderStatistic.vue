<template>
    <div class="stats flex column">
        <div class="stat flex align-center">
            <span>
                {{ data.views.title }}:
            </span>
            <span :class="viewsClass">
                {{ data.views.value }} ↗
            </span>
        </div>
        <div class="stat flex align-center">
            <span>
                {{ data.income.title }}:
            </span>
            <span :class="incomeClass">
                ${{ data.income.value }} ↘
            </span>
        </div>
        <div class="stat flex align-center">
            <span>
                {{ data.reservations.title }}:
            </span>
            <span :class="reservClass">
                {{ data.reservations.value }} ↗
            </span>
        </div>
    </div>
</template>

<script>

export default {
    name: '',
    data() {
        return {
            data: {
                views: {
                    title: 'Monthly views',
                    value: 850
                },
                income: {
                    title: 'Total income from reservations',
                    value: 9762
                },
                reservations: {
                    title: 'Monthly reservations on average',
                    value: 5.42
                }
            },

        }
    },
    methods: {},
    computed: {
        viewsClass() {
            return (this.data.views.value > 200) ? 'green' : 'red'
        },
        incomeClass() {
            return (this.data.income.value > 10000) ? 'green' : 'red'
        },
        reservClass() {
            return (this.data.reservations.value > 3) ? 'green' : 'red'
        },

    },
    created() { },
    components: {},
}
</script>