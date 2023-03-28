<template>
    <div class="date-picker flex ">
        <el-date-picker ref="calendar" v-model="dates" type="daterange"/>
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

    },
    computed: {

    },
    created() {
        
        // this.$refs.calendar.handleOpen()
    },
    components: {

    },
}
</script>