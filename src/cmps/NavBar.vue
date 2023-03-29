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
                <a class="bold flex justify-between">
                    <span @click="this.$router.push(`/user/${this.loggedinUser._id}/staywishlist`)">WishList</span>
                </a>
                <a class="bold flex justify-between">
                    <span @click="this.$router.push(`/user/${this.loggedinUser._id}`)">My Profile</span>
                </a>
            </div>
            <div class="host-options">
                <a class="bold flex justify-between">
                    <span @click="this.$router.push(`/user/${this.loggedinUser._id}/orders`)">Orders</span>
                </a>
                <a class="bold flex justify-between">
                    <span @click="this.$router.push(`/user/${this.loggedinUser._id}/trips`)">Trips</span>
                </a>
            </div>
            <RouterLink to="/" @click="doLogout">Logout</RouterLink>
        </div>
        <div v-if="isMiniMenuOpen && !loggedinUser" class="mini-menu flex column">

            <div @click="openModal">Login / Signup</div>

        </div>
    </nav>
    <LoginSignup/>
</template>

<script>

import { userService } from '../services/user.service.js'
import LoginSignup from './LoginSignup.vue'
export default {
    name: '',
    data() {
        return {
            isMiniMenuOpen: false,
        }
    },
    methods: {
        openUserMenu() {
            this.isMiniMenuOpen = true
            // console.log(this.loggedinUser)
        },
        openProfile() {
            this.isMiniMenuOpen = false
            this.$router.push(`/user/${this.loggedinUser._id}`)
        },
        doLogout() {
            this.isMiniMenuOpen = false
            this.$store.dispatch({ type: 'logout' })
        },
        openModal(){

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
        LoginSignup
    },
}
</script>