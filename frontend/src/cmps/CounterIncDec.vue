<template>
    <div class="counter-inc-dec flex align-center">
        <button @click="changeCount(-1)" :disabled="count === 0">
           <svg viewBOx="0 0 32 32" xmins="http://www.w3.org/200©/svg" aria-hidden="true" role="presentation" focusable="false">
                <path d="m2 16h28"></path>
            </svg>
        </button>
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