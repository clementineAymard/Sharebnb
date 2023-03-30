<template>
    <footer class="full" :class="isDetailsPageClass">
        <section class="footer my-layout ">
            <div class="flex align-center">
                <span>© 2023 Sharebnb, Inc.</span>
                <span>·</span>
                <span>Terms</span>
                <span>·</span>
                <span>Sitemap</span>
                <span>·</span>
                <span>Privacy</span>
                <span>·</span>
                <span>Your Privacy Choices</span>
            </div>
        </section>
    </footer>
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
        isHome() {
            return (this.$route.name === 'Home')
        },
        isDetailsPageClass() {
            return (this.$route.name === 'StayDetails') ? 'stay-details-page' : 'any-page'
        }
    },
    created() {

    },
    components: {

    },
}
</script>