<template>
    <section class="stays-loader">
        <ul class="stays-list">
            <li v-for="index in 12" :key="index" class="stay-preview">
                <div class="img-container"></div>
                <div class="preview-txt">
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
            </li>
        </ul>
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

    },
    created() {

    },
    components: {

    },
}
</script>