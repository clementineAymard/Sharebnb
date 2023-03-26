<template>
    <div class="counter-inc-dec flex align-center">
        <button @click="changeCount(-1)">
           <svg style="display: block; fill: none; height: 27px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible; flex-grow: 1; scale: 0.4;"
           viewBOx="0 0 32 32" xmins="http://www.w3.org/200©/svg" aria-hidden="true" role="presentation" focusable="false">
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