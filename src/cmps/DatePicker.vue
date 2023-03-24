<template>
    <div class="date-picker flex ">

        <div class="block">
            <span class="demonstration">daterange</span>
            <el-date-picker v-model="dates" type="daterange" 
            start-placeholder="Start Date" end-placeholder="End Date"
                :default-value="[new Date(2010, 9, 1), new Date(2010, 10, 1)]" />
        </div>

    </div>
</template>

<script>

import { ref } from 'vue'

export default {
    name: '',
    data() {
        return {
            dates:''
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