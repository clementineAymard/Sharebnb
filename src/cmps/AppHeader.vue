<template>
  <div v-if="isSearchOpen" class="backdrop" @click="onClose"></div>
  <header class="header flex align-center justify-between">

    <RouterLink to="/" class="logo flex align-center">
      <img src="../../public/favicon.png"><span>airbnb</span>
    </RouterLink>

    <section class="search">
      <span class="a"></span>
      <button @click="onSearch('location')">
        <div v-if="isSearchOpen" :class="isSearchOpenClass">Location</div>
        <div v-else :class="isSearchOpenClass">Anywhere</div>
      </button>

      <span class="b"></span>
      <button @click="onSearch('date')">
        <div v-if="isSearchOpen" :class="isSearchOpenClass">Check in / Check out</div>
        <div v-else :class="isSearchOpenClass">Any week</div>
      </button>

      <span class="c"></span>
      <button class="flex align-center" @click="onSearch('guests')">
        <div v-if="isSearchOpen" :class="isSearchOpenClass">Guests</div>
        <div v-else :class="isSearchOpenClass">Add guests</div>
        <div class="glass"><img src="/search.png"></div>
      </button>
      <!-- <div class="flex align-center justify-between"> -->
      <!-- </div> -->
    </section>

    <nav class="flex align-center">

      <div class="links flex align-center">
        <RouterLink class="link-add-stay" to="/stay">Airbnb your home</RouterLink>

        <div class="i18n-container flex align-center">
          <button class="i18n"><img src="/globe.png"></button>
        </div>
      </div>

      <div class=""> <!--v-if="loggedInUser"-->
        <RouterLink to="/login" class="loggedin-user flex justify-between align-center">
          <img src="/hamburger.png" class="ham">
          <img src="/user.png" class="user">
        </RouterLink>
      </div>
    </nav>

  </header>
</template>

<script>

export default {
  data() {
    return {
      isSearchOpen: false,
    }
  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedinUser
    },
    isSearchOpenClass() {
      return this.isSearchOpen ? 'open' : 'closed'
    },

  },
  methods: {
    onSearch(type) {
      this.isSearchOpen = true
    },
    onClose() {
      this.isSearchOpen = false
    }
  }
}
</script>