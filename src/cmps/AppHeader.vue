<template>
    <section class="main-header full main-container">
        <div v-if="isSearchOpen" class="backdrop" @click="onCloseHeader"></div>
        <div class="header-background full" :class="isSearchOpenClass"></div>
        <header class="header flex align-center justify-between" :class="isDetailsClass">

            <BrandLogo @resetFields="onResetFields" />

            <div class="search-container flex align-center" :class="isSearchOpenClass">
                <section class="search" v-if="!isDetails">

                    <button class="location" @click="onOpenSearch('locations')">
                        <div v-if="isSearchOpen" class="flex column" :class="isSearchOpenClass">
                            <label>Where</label>
                            <input v-model="filterBy.loc" type="text" class="sub-title" placeholder="Search destinations">
                            <LocationPicker v-if="selectedFilterKey === 'locations'" @setLoc="onSetLoc($event)" />
                        </div>
                        <div v-else>{{ locForDisplayTitle }}</div>
                    </button>

                    <button @click="onOpenSearch('dates')" class="dates flex ">

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

                    <button class="guests flex align-center" @click="onOpenSearch('guests')">
                        <div v-if="isSearchOpen" class="who flex column" :class="isSearchOpenClass">
                            <label>Who</label>
                            <div class="sub-title">
                                <span v-if="guestsForDisplayTitle > 0">{{ guestsForDisplayTitle }} guest<span
                                        v-if="guestsForDisplayTitle > 1">s</span></span><span v-else>Add guests</span>
                            </div>
                            <GuestsPicker v-if="selectedFilterKey === 'guests'" @setGuests="onSetGuests" />
                        </div>

                        <div v-else class="title">
                            <span v-if="guestsForDisplayTitle > 0" class="medium-font black">{{ guestsForDisplayTitle }}
                                guest<span v-if="guestsForDisplayTitle > 1">s</span></span>
                            <span v-else>Add guests</span>
                        </div>

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
    },
    mounted() {
        this.setLocFromParams()
        this.setGuestsFromParams()
        this.clearBooleans()
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
                guests: 0
            },
            locForDisplayTitle: this.$route.query.loc || 'Anywhere',
            guestsForDisplayTitle: this.$route.query.adults || 'Add guests'
        }
    },
    computed: {
        stayId() {
            return this.$route.params.stayId
        },
        isSearchOpenClass() {
            return this.isSearchOpen ? 'open' : 'closed'
        },
        isDetailsClass() {
            return this.isDetails ? 'margin-details-page' : 'no-margin'
        },
        routeQuery() {
            return this.$route.query
        }
    },
    methods: {
        onOpenSearch(filterKey) {
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
            console.log('this.filterBy.guests', this.filterBy.guests)
        },
        onHoverSearchBtn(event) {
            this.offset.x = event.offsetX
            this.offset.y = event.offsetY
        },
        onSetFilter() {
            let filterToSend = this.filterBy
            if (this.filterBy.guests) {
                filterToSend.adults = this.filterBy.guests.adults
                filterToSend.children = this.filterBy.guests.children
                filterToSend.infants = this.filterBy.guests.infants
                delete filterToSend.guests
            }
            delete filterToSend.date

            this.$router.push({
                name: 'Explore',
                query: filterToSend,
            })
            this.clearBooleans()
            this.setLocFromParams()
            this.setGuestsFromParams()
        },
        clearBooleans() {
            this.isSearchOpen = false
            this.selectedFilterKey = 'locations'
            this.isDetails = false
        },
        setLocFromParams() {
            setTimeout(() => {
                this.locForDisplayTitle = this.$route.query.loc || 'Anywhere'
            }, 1)
        },
        setGuestsFromParams() {
            setTimeout(() => {
                if (this.$route.query.adults && this.$route.query.children)
                    this.guestsForDisplayTitle = this.$route.query.adults + this.$route.query.children || 'Add guests'
                else if (this.$route.query.adults)
                    this.guestsForDisplayTitle = this.$route.query.adults || 'Add guests'

                console.log('this.guestsForDisplayTitle', this.guestsForDisplayTitle)
            }, 1)
        },
        onResetFields() {
            this.clearBooleans()
        }
    },
    watch: {
        stayId() {
            this.isDetails = this.$route.params.stayId ? true : false
        },
        routeQuery() {
            this.locForDisplayTitle = this.$route.query.loc || 'Anywhere'
            if (this.$route.query.children)
                this.guestsForDisplayTitle = this.$route.query.adults + this.$route.query.children || 'Add guests'
            else
                this.guestsForDisplayTitle = this.$route.query.adults || 'Add guests'
        },
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

<style>
.el-popper.is-pure.is-light.el-picker__popper{
    display: block;
}
</style>