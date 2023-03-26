<template>
    <section class="main-header full main-container">
        <div v-if="isSearchOpen" class="backdrop" @click="onCloseHeader"></div>
        <div class="header-background" :class="isSearchOpenClass"></div>
        <header class="header  flex align-center justify-between" :class="isDetailsClass">

            <BrandLogo @resetFields="onResetFields" />

            <div class="search-container flex align-center" :class="isSearchOpenClass">
                <section class="search" v-if="!isDetails">

                    <button class="location" @click="onSearch('locations')">
                        <div v-if="isSearchOpen" class="flex column" :class="isSearchOpenClass">
                            <label>Where</label>
                            <input v-model="filterBy.loc" type="text" class="sub-title" placeholder="Search destinations">
                            <LocationPicker v-if="selectedFilterKey === 'locations'" @setLoc="onSetLoc($event)" />
                        </div>
                        <div v-else>{{ locForDisplayTitle }}</div>
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
                            <div class="sub-title">{{ guestsForDisplay }}</div>
                            <GuestsPicker v-if="selectedFilterKey === 'guests'" @setGuests="onSetGuests" />
                        </div>

                        <div v-else class="title">{{ guestsForDisplayTitle }}</div>

                    </button>

                    <button class="glass  flex align-center justify-between"
                        :style="`--mouse-x:${offset.x}; --mouse-y:${offset.y}`" @mouseover="onHoverSearchBtn"
                        @click="onSetFilter">
                        <img src="https://res.cloudinary.com/didkfd9kx/image/upload/v1679577070/search_mnrvky.png">
                        <span v-if="isSearchOpen">Search</span>
                    </button>

                </section>

                <section v-else class="search-details-page flex align-center justify-between">
                    <input type="text" placeholder="Start your search">
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
import { utilService } from "../services/util.service"

export default {
    created() {
        eventBus.on('closeHeader', () => {
            this.isSearchOpen = false
        })
        if (this.$route.params.stayId) this.isDetails = true

        this.locForDisplayTitle = utilService.getValFromParam('loc') || 'Anywhere'
        // this.filterBy.guests = {}
        // this.filterBy.guests.adults = utilService.getValFromParam('adults')
        // this.filterBy.guests.children = utilService.getValFromParam('children')
        // this.filterBy.guests.infants = utilService.getValFromParam('infants')
        // console.log(this.filterBy.guests)
        // this.guestsForDisplayTitle = this.guestsForDisplay
    },
    data() {
        return {
            isSearchOpen: false,
            selectedFilterKey: 'locations',
            isDetails: false,
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
            locForDisplayTitle: 'Anywhere',
            guestsForDisplayTitle: 'Add guests'
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
        guestsForDisplay() {
            // console.log('guests display ', this.filterBy.guests)
            if (this.filterBy.guests) return `${this.filterBy.guests.adults} adults, ${this.filterBy.guests.chidren} chidren, ${this.filterBy.guests.infants} infants`
            else return 'Add guests'
        },
        stayId() {
            return this.$route.params.stayId
        },
        isDetailsClass() {
            return this.isDetails ? 'margin-details-page' : 'no-margin'
        }
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
                this.$store.dispatch({ type: 'loadStays', filterBy: JSON.parse(JSON.stringify(this.filterBy)) })
            // console.log(this.filterBy)
            this.clearBooleans()
            this.locForDisplayTitle = utilService.getValFromParam('loc') || 'Anywhere'
            this.guestsForDisplayTitle = this.guestsForDisplay
        },
        clearBooleans() {
            this.isSearchOpen = false
            this.selectedFilterKey = 'locations'
            this.isDetails = false
        },
        onResetFields() {
            this.locForDisplayTitle = 'Anywhere'
            this.guestsForDisplayTitle = 'Add guests'
            this.clearBooleans()
        }
    },
    watch: {
        stayId() {
            this.isDetails = this.$route.params.stayId ? true : false
        }
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