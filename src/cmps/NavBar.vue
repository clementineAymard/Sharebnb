<template>
    <nav class="flex align-center">
        <div class="links flex align-center">
            <RouterLink class="link-add-stay" to="/stay/edit">Airbnb your home</RouterLink>
        </div>

        <a @click="openUserMenu" class="loggedin-user flex justify-between align-center">
            <img src="https://res.cloudinary.com/didkfd9kx/image/upload/v1679577070/hamburger_vuqyb2.png" class="ham">
            <img src="https://res.cloudinary.com/didkfd9kx/image/upload/v1679577070/user_hyytwy.png" class="user">
        </a>
        <div v-if="isMiniMenuOpen && loggedinUser" class="mini-menu flex column">
            <div class="guest-options">
                <a @click="goToPage('/staywishlist')">WishList</a>
                <a @click="goToPage('/trips')">Trips</a>
            </div>
            <div class="host-options">
                <a @click="goToPage('')">My Profile</a>
                <a @click="goToPage('/orders')">Orders</a>
            </div>
            <RouterLink to="/" @click="doLogout">Logout</RouterLink>
        </div>
        <div v-if="isMiniMenuOpen && !loggedinUser" class="mini-menu flex column">
            <a @click="openModal">Login</a>
            <a @click="openModal">Signup</a>
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
        openUserMenu() {
            this.isMiniMenuOpen = true
            // console.log(this.loggedinUser)
        },
        doLogout() {
            this.isMiniMenuOpen = false
            this.$store.dispatch({ type: 'logout' })
        },
        openModal() {
            this.isModalOpen = true
            this.isMiniMenuOpen = false
        },
        onCloseModal() {
            this.isModalOpen = false
        },
        goToPage(path) {
            this.$router.push(`/user/${this.loggedinUser._id}${path}`)
            this.isMiniMenuOpen = false
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