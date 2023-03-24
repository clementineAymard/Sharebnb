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

                    <button class="location" @click="onSearch('locations')">
                        <div v-if="isSearchOpen" class="flex column" :class="isSearchOpenClass">
                            <label>Where</label>
                            <input v-model="filterBy.loc" type="text" class="sub-title" placeholder="Search destinations">
                            <LocationPicker v-if="selectedFilterKey === 'locations'" @setLoc="onSetLoc($event)" />
                        </div>
                        <div v-else>Anywhere</div>
                    </button>

                    <button @click="onSearch('dates')" class="dates flex ">

                        <div v-if="isSearchOpen" class="from flex column" :class="isSearchOpenClass">
                            <label>Check in</label>
                            <div class="sub-title">Add dates</div>
                            <DatePicker v-if="selectedFilterKey === 'dates'" />
                        </div>

                        <div v-if="isSearchOpen" class="to flex column" :class="isSearchOpenClass">
                            <label>Check out</label>
                            <div class="sub-title">Add dates</div>
                        </div>

                        <div v-if="!isSearchOpen" :class="isSearchOpenClass">Any week</div>


                    </button>

                    <button class="guests flex align-center" @click="onSearch('guests')">
                        <div v-if="isSearchOpen" class="who flex column" :class="isSearchOpenClass">
                            <label>Who</label>
                            <input v-model="filterBy.guests" type="text" class="sub-title" placeholder="Add guests">
                        </div>
                        <GuestsPicker v-if="selectedFilterKey === 'guests'" @setGuests="onSetGuests($event)" />

                        <div v-if="!isSearchOpen" class="title">Add guests</div>

                    </button>

                    <button class="glass  flex align-center justify-between"
                        :style="`--mouse-x:${offset.x}; --mouse-y:${offset.y}`" @mouseover="onHoverSearchBtn"
                        @click="onSetFilter">
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
import LocationPicker from './LocationPicker.vue'
import DatePicker from './DatePicker.vue'
import GuestsPicker from './GuestsPicker.vue'
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
                loc: '',
                date: {
                    from: '',
                    to: ''
                },
                guests: ''
            },
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
        onSetLoc(selectedLoc) {
            this.filterBy.loc = selectedLoc
            this.selectedFilterKey = 'dates'
        },
        onSetDates(selectedDates) {
            this.filterBy.date.to = selectedDates[0]
            this.filterBy.date.from = selectedDates[1]
            this.selectedFilterKey = 'guests'
        },
        onSetGuests(selectedGuests) {
            this.filterBy.guests = selectedGuests
        },
        onHoverSearchBtn(event) {
            this.offset.x = event.offsetX
            this.offset.y = event.offsetY
        },
        onSetFilter() {
            if (this.isSearchOpen)
                this.$store.dispatch({ type: 'loadStays', filterBy: this.filterBy })
            this.clearBooleans()
        },
        clearBooleans() {
            this.isSearchOpen = false
            this.selectedFilterKey = 'locations'
        }
    },
    watch: {

    },
    components: {
        BrandLogo,
        LocationPicker,
        DatePicker,
        GuestsPicker,
        NavBar
    }
}
</script>