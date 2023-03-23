<template>
    <section class="main-header">
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

                    <button @click="onSearch('locations')">
                        <div v-if="isSearchOpen" class="flex column" :class="isSearchOpenClass">
                            <label>Where</label>
                            <input v-model="filterBy.destination" type="text" class="sub-title"
                                placeholder="Search destinations">
                            <div class="locations flex column " v-if="isLocationShown">
                                <span>Search by region</span>
                                <ul class="locations">
                                    <li label="I'm flexible" value=""><img src="/flexible.jpg"></li>
                                    <li v-for="region in regions" :label="region.title" :value="region.title">
                                        <img :src="region.url">
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div v-else :class="isSearchOpenClass">Anywhere</div>
                    </button>

                    <button @click="onSearch('dates')" class="flex ">
                        <div v-if="isSearchOpen" class="flex column" :class="isSearchOpenClass">
                            <label>Check in</label>
                            <input v-model="filterBy.date.from" type="text" class="sub-title" placeholder="Add dates">
                        </div>
                        <div v-if="isSearchOpen" class="flex column" :class="isSearchOpenClass">
                            <label>Check out</label>
                            <input v-model="filterBy.date.to" type="text" class="sub-title" placeholder="Add dates">
                        </div>
                        <div v-else :class="isSearchOpenClass">Any week</div>
                    </button>

                    <button class="flex align-center" @click="onSearch('guests')">
                        <div v-if="isSearchOpen" class="flex column" :class="isSearchOpenClass">
                            <label>Who</label>
                            <input v-model="filterBy.guests" type="text" class="sub-title" placeholder="Add guests">
                        </div>
                        <div v-else :class="isSearchOpenClass">Add guests</div>

                    </button>

                    <button class="glass flex align-center justify-between"
                        :style="`--mouse-x:${offset.x}; --mouse-y:${offset.y}`" @mouseover="onHoverSearchBtn"
                        @click="onSearch('location')">
                        <img src="/search.png">
                        <span v-if="isSearchOpen">Search</span>
                    </button>

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
    </section>
</template>

<script>

export default {
    data() {
        return {
            isSearchOpen: false,
            isLocationShown: false,
            isDatesShown: false,
            isGuestsShown: false,
            offset: {
                x: 0,
                y: 0
            },
            filterBy: {
                destination: 'Anywhere',
                date: {
                    from: '',
                    to: ''
                }, // 'Add guests'
                guests: 'Add guests'
            },
            regions: [
                {
                    title: 'middleeast',
                    url: 'public/middleeast.webp'
                },
                {
                    title: 'italy',
                    url: 'public/italy.webp'
                },
                {
                    title: 'southamerica',
                    url: 'public/southamerica.webp'
                },
                {
                    title: 'france',
                    url: 'public/france.webp'
                },
                {
                    title: 'usa',
                    url: 'public/usa.webp'
                },
            ]
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
            this.isLocationShown = type === 'locations'
                ? true
                : type === 'dates'
                    ? true
                    : type === 'guests'
                        ? true
                        : false
            // this.isDatesShown = type === 'dates' ? true : false
            // this.isGuestsShown = 
        },
        onClose() {
            this.isSearchOpen = false
        },
        onHoverSearchBtn(event) {
            this.offset.x = event.offsetX
            this.offset.y = event.offsetY

        }
    }
}
</script>