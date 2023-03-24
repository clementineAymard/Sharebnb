<template>
    <div class="locations flex column">
        <span>Search by region</span>
        <div class="locations-options">
            <label for="flexible">
                <input type="radio" value="Flexible" id="Flexible" hidden @click="setLoc">
                <img src="https://res.cloudinary.com/didkfd9kx/image/upload/v1679569899/flexible_rtciou.jpg">
                <span>I'm flexible</span>
            </label>
            <label v-for="region in regions" :for="region.title">
                <input type="radio" :value="region.title" :id="region.title" hidden @click="setLoc">
                <img :src="region.url">
                <span>{{ region.title }}</span>
            </label>
        </div>
    </div>
</template>

<script>

export default {
    name: '',
    data() {
        return {
            regions: [
                {
                    title: 'Middle East',
                    url: 'https://res.cloudinary.com/didkfd9kx/image/upload/v1679569899/middleeast_n7gnuf.webp'
                },
                {
                    title: 'Italy',
                    url: 'https://res.cloudinary.com/didkfd9kx/image/upload/v1679569899/italy_c1ttid.webp'
                },
                {
                    title: 'South America',
                    url: 'https://res.cloudinary.com/didkfd9kx/image/upload/v1679569899/southamerica_mw5nl5.webp'
                },
                {
                    title: 'France',
                    url: 'https://res.cloudinary.com/didkfd9kx/image/upload/v1679569899/france_g942b3.webp'
                },
                {
                    title: 'United States',
                    url: 'https://res.cloudinary.com/didkfd9kx/image/upload/v1679569899/usa_msbaoz.webp'
                },
            ]
        }
    },
    methods: {
        setLoc(ev) {
            this.$emit('setLoc', ev.target.value)
        }
    },
    computed: {

    },
    created() {

    },
    components: {

    },
}
</script>