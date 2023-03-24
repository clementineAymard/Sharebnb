<template>
    <nav class="flex align-center">
        <div class="links flex align-center">
            <RouterLink class="link-add-stay" to="/edit">Airbnb your home</RouterLink>

            <div class="i18n-container flex align-center">
                <button class="i18n">
                    <img src="https://res.cloudinary.com/didkfd9kx/image/upload/v1679577070/globe_uzkbnn.png">
                </button>
            </div>
        </div>

        <RouterLink to="/login" class="loggedin-user flex justify-between align-center">
            <img src="https://res.cloudinary.com/didkfd9kx/image/upload/v1679577070/hamburger_vuqyb2.png" class="ham">
            <img src="https://res.cloudinary.com/didkfd9kx/image/upload/v1679577070/user_hyytwy.png" class="user">
        </RouterLink>
    </nav>
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