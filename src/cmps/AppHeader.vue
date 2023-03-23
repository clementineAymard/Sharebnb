<template>
    <section class="main-header">
        <div v-if="isSearchOpen" class="backdrop" @click="onCloseHeader"></div>
        <div class="header-background" :class="isSearchOpenClass"></div>
        <header class="header flex align-center justify-between">

            <RouterLink to="/" class="logo flex align-center">
                <img src="https://res.cloudinary.com/didkfd9kx/image/upload/v1679577070/favicon_a0jwly.png">
                <span>airbnb</span>
            </RouterLink>

            <div v-if="isSearchOpen" class="sub-search flex align-center ">
                <a class="a">Stays</a>
                <a class="b">Experiences</a>
                <a class="c">Online Experiences</a>
            </div>

            <div class="search-container flex align-center" :class="isSearchOpenClass">
                <section class="search">

                    <button @click="onSearch('locations')">
                        <div v-if="isSearchOpen" class="flex column" :class="isSearchOpenClass">
                            <label>Where</label>
                            <input v-model="filterBy.destination" type="text" class="sub-title"
                                placeholder="Search destinations">
                            <div class="locations flex column " v-if="isLocationShown">
                                <span>Search by region</span>
                                <div class="locations-options">
                                    <label for="flexible">
                                        <input type="radio" value="" id="flexible" hidden>
                                        <img
                                            src="https://res.cloudinary.com/didkfd9kx/image/upload/v1679569899/flexible_rtciou.jpg">
                                        <span>I'm flexible</span>
                                    </label>
                                    <label v-for="region in regions" :for="region.title">
                                        <input type="radio" :value="region.title" :id="region.title" hidden>
                                        <img :src="region.url">
                                        <span>{{ region.title }}</span>
                                    </label>


                                </div>
                            </div>
                        </div>
                        <div v-else>Anywhere</div>
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
                        <img src="https://res.cloudinary.com/didkfd9kx/image/upload/v1679577070/search_mnrvky.png">
                        <span v-if="isSearchOpen">Search</span>
                    </button>

                </section>
            </div>


            <nav class="flex align-center">
                <div class="links flex align-center">
                    <RouterLink class="link-add-stay" to="/edit">Airbnb your home</RouterLink>

                    <div class="i18n-container flex align-center">
                        <button class="i18n">
                            <img src="https://res.cloudinary.com/didkfd9kx/image/upload/v1679577070/globe_uzkbnn.png">
                        </button>
                    </div>
                </div>

                <RouterLink to="/login" class="loggedin-user flex justify-between align-center">
                    <img src="https://res.cloudinary.com/didkfd9kx/image/upload/v1679577070/globe_uzkbnn.png" class="ham">
                    <img src="https://res.cloudinary.com/didkfd9kx/image/upload/v1679577070/user_hyytwy.png" class="user">
                </RouterLink>
            </nav>
        </header>
    </section>
</template>

<script>

import { eventBus } from "../services/event-bus.service.js"

export default {
    created() {
        eventBus.on('closeHeader', () => {
            this.isSearchOpen = false
        })
    },
    data() {
        return {
            isSearchOpen: false,
            selectedFilterKey: 'locations',
            offset: {
                x: 0,
                y: 0
            },
            filterBy: {
                destination: '',
                date: {
                    from: '',
                    to: ''
                },
                guests: ''// 'Add guests'
            },
            regions: [
                {
                    title: 'middle east',
                    url: 'https://res.cloudinary.com/didkfd9kx/image/upload/v1679569899/middleeast_n7gnuf.webp'
                },
                {
                    title: 'italy',
                    url: 'https://res.cloudinary.com/didkfd9kx/image/upload/v1679569899/italy_c1ttid.webp'
                },
                {
                    title: 'south america',
                    url: 'https://res.cloudinary.com/didkfd9kx/image/upload/v1679569899/southamerica_mw5nl5.webp'
                },
                {
                    title: 'france',
                    url: 'https://res.cloudinary.com/didkfd9kx/image/upload/v1679569899/france_g942b3.webp'
                },
                {
                    title: 'united states',
                    url: 'https://res.cloudinary.com/didkfd9kx/image/upload/v1679569899/usa_msbaoz.webp'
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
        isExpandedClass() {
            return this.isSearchOpen ? 'expanded' : 'closed'
        },

    },
    methods: {
        onSearch(filterKey) {
            this.isSearchOpen = true
            this.selectedFilterKey = filterKey
        },
        onCloseHeader() {
            this.isSearchOpen = false
        },
        onHoverSearchBtn(event) {
            this.offset.x = event.offsetX
            this.offset.y = event.offsetY

        }
    }
}
</script>