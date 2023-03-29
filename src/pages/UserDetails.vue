<template>
    <section class="user-profile">
        <nav>
            <ul class="user-menu">
                <a @click="this.$router.push('user/' + user._id + '/staywishlist')">WishList</a>
                <a @click="this.$router.push('user/' + user._id + '/trips')">Trips</a> <!-- stays where user is guest -->
                <a @click="this.$router.push('user/' + user._id + '/orders')">Orders</a> <!-- stays where user is host -->
            </ul>
        </nav>
        <h2 v-if="isMe">My Profile</h2>
        <h1 v-else>User Profile - {{ user.fullname }}</h1>
        <div class="flex gap1rem">
            <img style="max-width: 40px;" :src="user.imgUrl" />
            <h3>{{ user.fullname }}</h3>
        </div>
        <!-- <h2>Reviews</h2>
        <ul>
            <li v-for="review in user.givenReviews" :key="review._id">
                {{ review.txt }}
                <RouterLink :to="`/user/${review.aboutUser._id}`">
                    About {{ review.aboutUser.fullname }}
                </RouterLink>
            </li>
        </ul> -->
    </section>
</template>

<script>
// import {userService} from '../services/user.service'

export default {
    data() {
        return {
            // user: null
        }
    },
    async created() {
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