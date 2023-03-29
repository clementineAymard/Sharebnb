<template>
    <section class="user-profile">
        <nav>
            <ul class="user-menu">
                <a @click="this.$router.push(user._id + '/wishlist')">Wishlist</a>
                <li>Trips</li> <!-- stays user has been hosted by = where user is guest -->
                <li>Dashboard</li>
                <li>Listings</li> <!-- stays user has hosted= where user is host -->
            </ul>
        </nav>
        <h2 v-if="isMe">My Profile</h2>
        <h1 v-else>User Profile - {{ user.fullname }}</h1>
        <h3>{{ user.username }}</h3>
        <img style="max-width: 200px;" :src="user.imgUrl" />
        <h2>Reviews</h2>
        <ul>
            <li v-for="review in user.givenReviews" :key="review._id">
                {{ review.txt }}
                <RouterLink :to="`/user/${review.aboutUser._id}`">
                    About {{ review.aboutUser.fullname }}
                </RouterLink>
            </li>
        </ul>

        <!-- <details>
      <summary>Full JSON</summary>
      <pre>{{ user }}</pre>
    </details> -->
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
        // const user = await userService.getById(id)
        // this.user = user
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
            return this.$route.params.id
        },
        isMe() {
            return this.userId === this.$store.getters.loggedinUser._id
        },
    },
}
</script>