<template>
  <header class="header">

    <RouterLink to="/">
      <img class="logo" src="../../public/favicon.png">
    </RouterLink>

    <section class="search">
      <span class="little-search"></span>
      <button>Anywhere</button>
      <span class="a"></span>
      <button>Any week</button>
      <span class="b"></span>
      <div class="flex align-center justify-between">
        <button class="g">Add guests</button>
        <div></div>
      </div>

    </section>

    <nav>
      <RouterLink to="/stay">Airbnb your home</RouterLink>

      <div class="loggedin-user" v-if="loggedInUser">
        <RouterLink to="/login">
          Login
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