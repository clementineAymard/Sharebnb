<template>
    
    <div v-if="loggedinUser" class="mobile-user-menu">
        <span class="flex align-center">
            <span>☰</span>
            <h1>Menu</h1>
        </span>
        <div class="guest-options">
            <a @click="goToPage('/staywishlist')"><span>♡</span> WishList</a>
            <a @click="goToPage('/trips')"><img class="img-map" src="https://res.cloudinary.com/didkfd9kx/image/upload/v1684234277/map_1_f2e1f4.png"> Trips</a>
        </div>
        <div class="host-options">
            <a @click="goToPage('')"><img src="https://res.cloudinary.com/didkfd9kx/image/upload/v1684311008/user_1_xcinvs.png"> My Profile</a>
            <a @click="goToPage('/orders')"><img class="img-dashboard" src="https://res.cloudinary.com/didkfd9kx/image/upload/v1684311229/dashboard_yqznav.png"> Reservations</a>
        </div>
        <RouterLink to="/" @click="doLogout"><img src="https://res.cloudinary.com/didkfd9kx/image/upload/v1684233996/exit_tbz0cq.png">Logout</RouterLink>
    </div>

    <div v-else class="mobile-login-signup">
        <LoginSignup />
    </div>
</template>

<script>

import LoginSignup from '../cmps/LoginSignup.vue'

export default {
    name: '',
    data() {
        return {}
    },
    methods: {
        goToPage(path) {
            this.$router.push(`/user/${this.loggedinUser._id}${path}`)
        },
        doLogout() {
            this.$store.dispatch({ type: 'logout' })
        },
    },
    computed: {
        loggedinUser() {
            return this.$store.getters.loggedinUser
        },
    },
    created() { },
    components: {
        LoginSignup,
    },
}
</script>