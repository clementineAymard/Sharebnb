<template>
    <section class="footer flex align-center" v-if="isOpen">
        <span>© 2023 Airbnb, Inc.</span>
        <span>·</span>
        <span>Terms</span>
        <span>·</span>
        <span>Sitemap</span>
        <span>·</span>
        <span>Privacy</span>
        <span>·</span>
        <span>Your Privacy Choices</span>
    </section>
</template>

<script>
export default {
    name: '',
    data() {
        return {

        }
    },
    methods: {

    },
    computed: {
        isOpen(){
            return (this.$route.name === 'Home')
        }
    },
    created() {

    },
    components: {

    },
}
</script>