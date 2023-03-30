<template>
    <RouterLink to="/" class="logo flex align-center" @click="resetStringParams">
        <img src="https://res.cloudinary.com/didkfd9kx/image/upload/v1679577070/favicon_a0jwly.png">
        <span>Sharebnb</span>
    </RouterLink>
</template>

<script>
import { utilService } from '../services/util.service';


export default {
    name: '',
    data() { return {} },
    methods: {
        resetStringParams() {
            const url = new URL(window.location.href)
            url.search = ''
            window.history.pushState({ path: url.href }, '', url.href)
            this.$store.dispatch({
                type: 'loadStays', filterBy: {}
            })
            this.$emit('resetFields')
        }
    },
    computed: {},
    created() { },
    components: {},
}
</script>