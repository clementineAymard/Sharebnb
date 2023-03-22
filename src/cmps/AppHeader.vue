<template>
    <div v-if="isSearchOpen" class="backdrop" @click="onClose"></div>
    <div class="header-wrapper" :class="isSearchOpenClass"></div>
    <header class="header flex align-center justify-between" :class="isSearchOpenClass">

        <RouterLink to="/" class="logo flex align-center">
            <img src="../../public/favicon.png"><span>airbnb</span>
        </RouterLink>

        <div v-if="isSearchOpen" class="sub-search flex align-center ">
            <a class="a">Stays</a>
            <a class="b">Experiences</a>
            <a class="c">Online Experiences</a>
        </div>

        <div class="search-container flex align-center" :class="isExpandedClass">
            <section class="search" :class="isExpandedClass">

                <button @click="onSearch('location')">
                    <div v-if="isSearchOpen" class="flex column" :class="isSearchOpenClass">
                        <label>Where</label>
                        <input type="text" class="sub-title" placeholder="Search destinations">
                    </div>
                    <div v-else :class="isSearchOpenClass">Anywhere</div>
                </button>

                <button @click="onSearch('date')" class="flex ">
                    <div v-if="isSearchOpen" class="flex column" :class="isSearchOpenClass">
                        <label>Check in</label>
                        <input type="text" class="sub-title" placeholder="Add dates">
                    </div>
                    <div v-if="isSearchOpen" class="flex column" :class="isSearchOpenClass">
                        <label>Check out</label>
                        <input type="text" class="sub-title" placeholder="Add dates">
                    </div>
                    <div v-else :class="isSearchOpenClass">Any week</div>
                </button>

                <button class="flex align-center" @click="onSearch('guests')">
                    <div v-if="isSearchOpen" class="flex column" :class="isSearchOpenClass">
                        <label>Who</label>
                        <input type="text" class="sub-title" placeholder="Add guests">
                    </div>
                    <div v-else :class="isSearchOpenClass">Add guests</div>
                    
                </button>
                <div class="glass"><img src="/search.png"></div>
                <!-- <div class="flex align-center justify-between"> -->
                <!-- </div> -->
            </section>
        </div>

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
        <!-- <div v-if="isSearchOpen" class="banniere"></div> -->
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
        isSearchOpenClassAnim() {
            return this.isSearchOpen ? 'animate__animated animate__slideInDown' : 'animate__animated animate__slideInUp'
        },
        isExpandedClass() {
            return this.isSearchOpen ? 'expanded' : 'closed'
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