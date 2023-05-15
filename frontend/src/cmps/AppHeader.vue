<template>
    <section class="main-header full my-layout " :class="isDetailsClass">
        <div v-if="isSearchOpen" class="backdrop" @click="onCloseHeader"></div>
        <div class="header-background full animate__animated animate__fadeInDown" :class="isSearchOpenClass"></div>
        <header class="header flex align-center justify-between " :class="isDetailsClass">

            <BrandLogo @resetFields="onResetFields" />

            <div class="search-container align-center " :class="isSearchOpenClass">
                <section class="search  animate__animated " v-if="!isDetails && !isUserPage && !isOrderPage">

                    <button class="location " @click="onOpenSearch('locations')" :class="isActiveClass">
                        <div v-if="isSearchOpen" class="mode flex column" :class="isActiveClass">
                            <label>Where</label>
                            <input v-model="filterBy.loc" type="text" class="sub-title" placeholder="Search destinations"
                                @input="setLoc">
                            <LocationPicker v-if="selectedFilterKey === 'locations'" @setLoc="onSetLoc($event)" />
                        </div>
                        <div v-else>{{ locForDisplayTitle }}</div>
                    </button>

                    <button @click="onOpenSearch('dates')" class="dates flex " :class="isActiveClass">

                        <div v-if="isSearchOpen" class="from flex column">
                            <label>Check in</label>
                            <div class="sub-title">
                                <span v-if="dateFromForDisplay">{{ dateFromForDisplay }}</span>
                                <span v-else>Add dates</span>
                            </div>
                            <DatePicker v-if="selectedFilterKey === 'dates'" @setDates="onSetDates" />
                        </div>

                        <div v-if="isSearchOpen" class="to flex column">
                            <label>Check out</label>
                            <div class="sub-title">
                                <span v-if="dateToForDisplay">{{ dateToForDisplay }}</span>
                                <span v-else>Add dates</span>
                            </div>
                        </div>

                        <div v-if="!isSearchOpen">
                            <span v-if="dateFromForDisplay !== 'Add dates'" class="medium-font black">
                                {{ dateFromForDisplay }} - {{ dateToForDisplay }}
                            </span>
                            <span v-else>Any week</span>
                        </div>

                    </button>

                    <button class="guests flex align-center" @click="onOpenSearch('guests')" :class="isActiveClass">
                        <div v-if="isSearchOpen" class="who flex column">
                            <label>Who</label>
                            <div class="sub-title">
                                <span v-if="guestsForDisplayTitle > 0">{{ guestsForDisplayTitle }} guest<span
                                        v-if="guestsForDisplayTitle > 1">s</span></span><span v-else>Add guests</span>
                            </div>
                            <GuestsPicker v-if="selectedFilterKey === 'guests'" @setGuests="onSetGuests" />
                        </div>

                        <div v-else class="title">
                            <span v-if="guestsForDisplayTitle > 0" class="medium-font black">
                                {{ guestsForDisplayTitle }} guest<span v-if="guestsForDisplayTitle > 1">s</span>
                            </span>
                            <span v-else>Add guests</span>
                        </div>

                    </button>
                    <div class="glass  flex align-center justify-between"
                        :style="`--mouse-x:${offset.x}; --mouse-y:${offset.y}`" @mousemove="onHoverSearchBtn"
                        @click.stop="onSetFilter">
                        <img src="https://res.cloudinary.com/didkfd9kx/image/upload/v1679577070/search_mnrvky.png">
                        <span v-if="isSearchOpen">Search</span>
                    </div>


                </section>

                <section v-if="isDetails" class="search-details-page flex align-center justify-between">
                    <input type="text" v-model="detailsSearchBar">
                    <button class="glass  flex align-center justify-between"
                        :style="`--mouse-x:${offset.x}; --mouse-y:${offset.y}`" @mouseover="onHoverSearchBtn"
                        @click="onSetFilter">
                        <img src="https://res.cloudinary.com/didkfd9kx/image/upload/v1679577070/search_mnrvky.png">
                        <span v-if="isSearchOpen">Search</span>
                    </button>
                </section>

                <section v-if="isUserPage" class="search-user-page flex align-center justify-between">
                    <input type="text" v-model="detailsSearchBar">
                    <button class="glass  flex align-center justify-between"
                        :style="`--mouse-x:${offset.x}; --mouse-y:${offset.y}`" @mouseover="onHoverSearchBtn"
                        @click="onSetFilter">
                        <img src="https://res.cloudinary.com/didkfd9kx/image/upload/v1679577070/search_mnrvky.png">
                        <span v-if="isSearchOpen">Search</span>
                    </button>
                </section>

            </div>

            <NavBar :class="isDetailsClass" />
        </header>
        

        <header class="header-mobile align-center justify-between" >
            <BrandLogo @resetFields="onResetFields" />
            <img class="search" src="https://res.cloudinary.com/didkfd9kx/image/upload/v1684144299/magnifying-glass_shtw8h.png">
            <img  class="user" src="https://res.cloudinary.com/didkfd9kx/image/upload/v1679577070/user_hyytwy.png">
        </header>
    </section>
</template>

<script>

import 'animate.css'
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
        if (this.$route.params.userId) this.isUserPage = true
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
            isUserPage: false,
            isOrderPage: false,
            offset: {
                x: 0,
                y: 0
            },
            filterBy: {
                loc: '',
                date: {
                    startDate: '',
                    endDate: ''
                },
                guests: 0
            },
            locForDisplayTitle: 'Anywhere',
            guestsForDisplayTitle: 'Add guests',
            dateFromForDisplay: 'Add dates',
            dateToForDisplay: 'Add dates',
            detailsSearchBar: 'Start your search',
        }
    },
    computed: {
        stayId() {
            return this.$route.params.stayId
        },
        userId() {
            return this.$route.params.userId
        },
        isSearchOpenClass() {
            return this.isSearchOpen ? 'open' : 'closed'
        },
        isDetailsClass() {
            return this.isDetails ? 'narrow' : ''
        },
        isActiveClass() {
            return `active-${this.selectedFilterKey}`
        },
        routeQuery() {
            return this.$route.query
        },
        routePath() {
            return this.$route.path
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
            let options = {
                month: 'short',
                day: 'numeric'
            }
            this.filterBy.date.startDate = new Intl.DateTimeFormat('en-US', options).format(selectedDates[0])
            this.filterBy.date.endDate = new Intl.DateTimeFormat('en-US', options).format(selectedDates[1])
            this.$router.push({
                query: { ...this.filterBy.date },
            })
            this.selectedFilterKey = 'guests'
        },
        onSetGuests(selectedGuests) {
            this.filterBy.guests = selectedGuests
            console.log('this.filterBy.guests', this.filterBy.guests)
            this.$router.push({
                query: { ...this.filterBy.guests },
            })
        },
        onHoverSearchBtn(event) {
            this.offset.x = event.offsetX
            this.offset.y = event.offsetY
        },
        onSetFilter() {
            this.isSearchOpen = false
            let filterToSend = this.filterBy
            if (this.filterBy.guests) {
                filterToSend.adults = this.filterBy.guests.adults
                filterToSend.children = this.filterBy.guests.children
                filterToSend.infants = this.filterBy.guests.infants
                delete filterToSend.guests
            }
            if (this.filterBy.date) {
                filterToSend.startDate = this.filterBy.date.startDate
                filterToSend.endDate = this.filterBy.date.endDate
                delete filterToSend.date
            }

            this.clearBooleans()
            this.setLocFromParams()
            this.setDatesFromParams()
            this.setGuestsFromParams()

            console.log('filterToSend', filterToSend)
            this.$router.push({
                name: 'Explore',
                query: filterToSend,
            })
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
        setDatesFromParams() {
            setTimeout(() => {
                this.dateFromForDisplay = this.$route.query.startDate || 'Add dates'
                this.dateToForDisplay = this.$route.query.endDate || 'Add dates'
            }, 1)
        },
        setGuestsFromParams() {
            setTimeout(() => {
                if (this.$route.query.adults)
                    this.guestsForDisplayTitle = this.$route.query.adults || 'Add guests'
                if (this.$route.query.children && this.$route.query.adults)
                    this.guestsForDisplayTitle = parseInt(this.$route.query.adults) + parseInt(this.$route.query.children) || 'Add guests'
                if (this.$route.query.infants && this.$route.query.adults)
                    this.guestsForDisplayTitle = parseInt(this.$route.query.adults) + parseInt(this.$route.query.children) || 'Add guests'
                if (this.$route.query.children && this.$route.query.adults && this.$route.query.infants)
                    this.guestsForDisplayTitle = parseInt(this.$route.query.adults) + parseInt(this.$route.query.children) + parseInt(this.$route.query.infants) || 'Add guests'

                // console.log('this.guestsForDisplayTitle', this.guestsForDisplayTitle)
            }, 1)
        },
        onResetFields() {
            this.clearBooleans()
            this.filterBy = {
                loc: '',
                date: {
                    startDate: '',
                    endDate: ''
                },
                guests: 0
            }
            this.locForDisplayTitle = 'Anywhere'
            this.guestsForDisplayTitle = 'Add guests'
            this.dateFromForDisplay = 'Add dates'
            this.dateToForDisplay = 'Add dates'
            this.detailsSearchBar = 'Start your search'
        }
    },
    watch: {
        stayId() {
            this.isDetails = this.$route.params.stayId ? true : false
        },
        userId() {
            this.isUserPage = this.$route.params.userId ? true : false
        },
        routePath() {
            this.isOrderPage = (this.$route.path === '/order') ? true : false
        },
        routeQuery() {
            this.locForDisplayTitle = this.$route.query.loc || 'Anywhere'

            if (this.$route.query.adults)
                this.guestsForDisplayTitle = this.$route.query.adults || 'Add guests'
            if (this.$route.query.children && this.$route.query.adults)
                this.guestsForDisplayTitle = parseInt(this.$route.query.adults) + parseInt(this.$route.query.children) || 'Add guests'
            if (this.$route.query.infants && this.$route.query.adults)
                this.guestsForDisplayTitle = parseInt(this.$route.query.adults) + parseInt(this.$route.query.children) || 'Add guests'
            if (this.$route.query.children && this.$route.query.adults && this.$route.query.infants)
                this.guestsForDisplayTitle = parseInt(this.$route.query.adults) + parseInt(this.$route.query.children) + parseInt(this.$route.query.infants) || 'Add guests'


            if (this.$route.query.endDate)
                this.dateToForDisplay = this.$route.query.endDate
            if (this.$route.query.startDate)
                this.dateFromForDisplay = this.$route.query.startDate
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