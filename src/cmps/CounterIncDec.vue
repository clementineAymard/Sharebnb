<template>
    <div class="counter-inc-dec flex align-center">
        <button @click="changeCount(-1)">-</button>
        <span><input type="number" v-model="count"></span>
        <button @click="changeCount(1)">+</button>
    </div>
</template>

<script>

export default {
    name: '',
    props: {
        count: Number
    },
    data() {
        return {}
    },
    methods: {
        changeCount(type) {
            console.log('changeCount', this.count)
            this.$emit('changeCount', type)
        },
    },
    computed: {
    },
    created() {
    },
    components: {
    },
    watch: {
    }
}
</script>