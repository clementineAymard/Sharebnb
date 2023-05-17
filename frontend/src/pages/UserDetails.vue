<template>
    <section class="user-profile">
        <h2 v-if="isMe">My Profile</h2>
        <h1 v-else>User Profile - {{ user.fullname }}</h1>
        <div class="user-name flex align-center gap1rem">
            <img :src="user.imgUrl" />
            <h3>{{ user.fullname }}</h3>
        </div>
        <nav>
            <ul class="user-menu flex column gap1rem">
                <a @click="this.$router.push(user._id + '/staywishlist')"><span>♡</span>WishList</a>
                <a @click="this.$router.push(user._id + '/trips')"><img class="img-map"
                        src="https://res.cloudinary.com/didkfd9kx/image/upload/v1684234277/map_1_f2e1f4.png">Trips</a>
                <!-- stays where user is guest -->
                <a @click="this.$router.push(user._id + '/orders')"><img class="img-dashboard"
                        src="https://res.cloudinary.com/didkfd9kx/image/upload/v1684311229/dashboard_yqznav.png">Orders</a>
                <!-- stays where user is host -->
            </ul>
        </nav>
    </section>
    <div class="back" @click="goBack" >
        <img src="https://res.cloudinary.com/didkfd9kx/image/upload/v1684147823/back_k9lue1.png">
    </div>
</template>

<script>

export default {
    data() {
        return {
        }
    },
    async created() {
    },
    methods: {
        goBack() {
            this.$router.back()
        }
    },
    watch: {
        userId: {
            handler() {
                if (this.userId) {
                    this.$store.dispatch({ type: "loadAndWatchUser", userId: this.userId })
                }
            },
            immediate: true,
        },
    },
    computed: {
        user() {
            return this.$store.getters.watchedUser
        },
        userId() {
            return this.$route.params.userId
        },
        isMe() {
            return this.userId === this.$store.getters.loggedinUser._id
        },
    },
}
</script>