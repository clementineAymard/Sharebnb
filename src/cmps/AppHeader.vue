<template>
    <section class="main-header">
        <div v-if="isSearchOpen" class="backdrop" @click="onCloseHeader"></div>
        <div class="header-background" :class="isSearchOpenClass"></div>
        <header class="header flex align-center justify-between">

            <BrandLogo />

            <div v-if="isSearchOpen" class="sub-search flex align-center ">
                <a class="stays">Stays</a>
                <a class="experiences">Experiences</a>
                <a class="online-experiences">Online Experiences</a>
            </div>

            <div class="search-container flex align-center" :class="isSearchOpenClass">
                <section class="search">

                    <button @click="onSearch('locations')">
                        <div v-if="isSearchOpen" class="flex column" :class="isSearchOpenClass">
                            <label>Where</label>
                            <input v-model="filterBy.destination" type="text" class="sub-title"
                                placeholder="Search destinations">
                            <div class="locations flex column " v-if="selectedFilterKey === 'locations'">
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
                            <div class="sub-title">Add dates</div>
                        </div>
                        <div v-if="selectedFilterKey === 'dates'"></div>

                        <div v-if="isSearchOpen" class="flex column" :class="isSearchOpenClass">
                            <label>Check out</label>
                            <div class="sub-title">Add dates</div>
                        </div>
                        <!-- <DatePicker  v-if="selectedFilterKey === 'dates'"/> -->
                        
                        <div v-if="!isSearchOpen" :class="isSearchOpenClass">Any week</div>


                    </button>

                    <button class="flex align-center" @click="onSearch('guests')">
                        <div v-if="isSearchOpen" class="flex column" :class="isSearchOpenClass">
                            <label>Who</label>
                            <input v-model="filterBy.guests" type="text" class="sub-title" placeholder="Add guests">

                            <div v-if="selectedFilterKey === 'dates'"></div>///////////////////////////////////////////////
                            CHOOSE GUESTS //////////

                        </div>
                        <div v-else :class="isSearchOpenClass">Add guests</div>

                    </button>

                    <button class="glass  flex align-center justify-between"
                        :style="`--mouse-x:${offset.x}; --mouse-y:${offset.y}`" @mouseover="onHoverSearchBtn"
                        @click="onSearch('location')">
                        <img src="https://res.cloudinary.com/didkfd9kx/image/upload/v1679577070/search_mnrvky.png">
                        <span v-if="isSearchOpen">Search</span>
                    </button>

                </section>
            </div>

            <NavBar />
        </header>
    </section>
</template>

<script>

import { eventBus } from "../services/event-bus.service.js"
import BrandLogo from './BrandLogo.vue'
import DatePicker from './DatePicker.vue'
import NavBar from './NavBar.vue'

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
                guests: ''
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

        },
        onSetFilter() {
            this.$store.dispatch({ type: 'loadStays', filterBy: this.filterBy })
        }
    },
    components: {
        BrandLogo,
        DatePicker,
        NavBar
    }
}
</script>