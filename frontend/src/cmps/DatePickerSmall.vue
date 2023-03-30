<template>
    <div class="date-picker-small flex ">
        <el-date-picker ref="calendar" popper-class="details-date-popper" v-model="dates" type="daterange" @change="setDates" :teleported="false"/>
    </div>
</template>

<script>

import { ref } from 'vue'

export default {
    name: '',
    data() {
        return {
            dates: []
        }
    },
    methods: {
        setDates(dates) {
            console.log('this.dates', this.dates)
            this.$emit('setDates', { ...this.dates })
        }
    },
    computed: {

    },
    created() {
    },
    components: {

    },
    unmounted() {
        // this.$emit('setDates', this.dates)
    }
}
</script>