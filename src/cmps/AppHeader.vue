<template>
  <header class="header">

    <RouterLink to="/" class="logo flex align-center">
      <img src="../../public/favicon.png"><span>airbnb</span>
    </RouterLink>

    <section class="search">
      <span class="little-search"></span>
      <button>Anywhere</button>
      <span class="a"></span>
      <button>Any week</button>
      <span class="b"></span>
      <div class="flex align-center justify-between">
        <button class="g">Add guests</button>
        <div class="glass"><img src="/search.png"></div>
      </div>

    </section>

    <nav class="flex align-center">
      <RouterLink class="link-add-stay" to="/stay">Airbnb your home</RouterLink>

      <div class="" > <!--v-if="loggedInUser"-->
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
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedinUser
    },
  }
}
</script>