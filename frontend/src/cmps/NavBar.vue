<template>
    <nav class="header-nav-bar align-center">
        <div class="links flex align-center">
            <RouterLink  class="link-add-stay" to="/stay/edit">Sharebnb your home</RouterLink>
        </div>

        <a @click="toggleMiniMenu" class="user-menu flex justify-between align-center">
            <img src="https://res.cloudinary.com/didkfd9kx/image/upload/v1679577070/hamburger_vuqyb2.png" class="ham">
            <img src="https://res.cloudinary.com/didkfd9kx/image/upload/v1679577070/user_hyytwy.png" class="user">
            <img v-if="!isMiniMenuOpen || loggedinUser" class="sparkle" src="https://res.cloudinary.com/didkfd9kx/image/upload/v1684666318/sparkles_pkxixo.png">
        </a>
        
        <div v-if="isMiniMenuOpen && loggedinUser" class="mini-menu flex column">
            <div class="guest-options">
                <a @click="goToPage('/staywishlist')">WishList</a>
                <a @click="goToPage('/trips')">Trips</a>
            </div>
            <div class="host-options">
                <a @click="goToPage('')">My Profile</a>
                <a @click="goToPage('/orders')">Reservations</a>
            </div>
            <RouterLink to="/" @click="doLogout">Logout</RouterLink>
        </div>

        <div v-if="isMiniMenuOpen && !loggedinUser" class="mini-menu flex column">
            <a @click="openModal" class="bold">Login</a>
            <a @click="openModal" class="bold">Signup</a>
        </div>
    </nav>
    <LoginSignup v-if="isModalOpen" @closeModal="onCloseModal" />
</template>

<script>

import { userService } from '../services/user.service.js'
import LoginSignup from './LoginSignup.vue'
export default {
    name: '',
    data() {
        return {
            isMiniMenuOpen: false,
            isModalOpen: false,
        }
    },
    methods: {
        toggleMiniMenu() {
            this.isMiniMenuOpen = !this.isMiniMenuOpen
            // console.log(this.loggedinUser)
        },
        doLogout() {
            this.isMiniMenuOpen = false
            this.$store.dispatch({ type: 'logout' })
        },
        openModal() {
            this.isModalOpen = true
            this.isMiniMenuOpen = !this.isMiniMenuOpen
        },
        onCloseModal() {
            this.isModalOpen = false
        },
        goToPage(path) {
            this.$router.push(`/user/${this.loggedinUser._id}${path}`)
            this.isMiniMenuOpen = !this.isMiniMenuOpen
        },
    },
    computed: {
        loggedinUser() {
            return this.$store.getters.loggedinUser
        }
    },
    created() {

    },
    components: {
        LoginSignup
    },
}
</script>