<template>
    <nav class="flex align-center">
        <div class="links flex align-center">
            <RouterLink class="link-add-stay" to="/stay/edit">Airbnb your home</RouterLink>

            <div class="i18n-container flex align-center">
                <button class="i18n">
                    <img src="https://res.cloudinary.com/didkfd9kx/image/upload/v1679577070/globe_uzkbnn.png">
                </button>
            </div>
        </div>

        <a @click="openUserMenu" class="loggedin-user flex justify-between align-center">
            <img src="https://res.cloudinary.com/didkfd9kx/image/upload/v1679577070/hamburger_vuqyb2.png" class="ham">
            <img src="https://res.cloudinary.com/didkfd9kx/image/upload/v1679577070/user_hyytwy.png" class="user">
        </a>
        <div v-if="isMiniMenuOpen && loggedinUser" class="mini-menu flex column">
            <RouterLink to="/login" class="bold">My Profile</RouterLink>
            <RouterLink to="/" @click="doLogout">Logout</RouterLink>
        </div>
    </nav>
</template>

<script>

import { userService } from '../services/user.service.js'
export default {
    name: '',
    data() {
        return {
            isMiniMenuOpen: false,
        }
    },
    methods: {
        openUserMenu() {
            console.log(this.loggedinUser)
            if (this.loggedinUser) this.isMiniMenuOpen = true
            else {
                this.isMiniMenuOpen = false
                this.$router.push('/login')
            }
        },
        doLogout() {
            this.isMiniMenuOpen = false
            this.$store.dispatch({ type: 'logout' })
        }
    },
    computed: {
        loggedinUser() {
            return this.$store.getters.loggedinUser
        }
    },
    created() {

    },
    components: {

    },
}
</script>