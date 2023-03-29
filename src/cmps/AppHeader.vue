<template>
    <section class="main-header full my-layout" :class="isDetailsClass">
        <div v-if="isSearchOpen" class="backdrop" @click="onCloseHeader"></div>
        <div class="header-background full" :class="isSearchOpenClass"></div>
        <header class="header flex align-center justify-between" :class="isDetailsClass">

            <BrandLogo @resetFields="onResetFields" />

            <div class="search-container flex align-center" :class="isSearchOpenClass">
                <section class="search" v-if="!isDetails">

                    <button class="location" @click="onOpenSearch('locations')" :class="isActiveClass">
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


                        <button class="glass  flex align-center justify-between"
                            :style="`--mouse-x:${offset.x}; --mouse-y:${offset.y}`" @mouseover="onHoverSearchBtn"
                            @click.stop="onSetFilter">
                            <img src="https://res.cloudinary.com/didkfd9kx/image/upload/v1679577070/search_mnrvky.png">
                            <span v-if="isSearchOpen">Search</span>
                        </button>
                    </button>

                </section>

                <section v-else class="search-details-page flex align-center justify-between">
                    <input type="text" v-model="detailsSearchBar">
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
            // locForDisplayTitle: this.$route.query.loc || 'Anywhere',
            // guestsForDisplayTitle: this.$route.query.adults || 'Add guests',
            // dateFromForDisplay: this.$route.query.from || 'Add dates',
            // dateToForDisplay: this.$route.query.to || 'Add dates',
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
        isSearchOpenClass() {
            return this.isSearchOpen ? 'open' : 'closed'
        },
        isDetailsClass() {
            return this.isDetails ? 'margin-details-page' : 'no-margin'
        },
        isActiveClass() {
            return `active-${this.selectedFilterKey}`
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
            let options = {
                month: 'short',
                day: 'numeric'
            }
            this.filterBy.date.from = new Intl.DateTimeFormat('en-US', options).format(selectedDates[0])
            this.filterBy.date.to = new Intl.DateTimeFormat('en-US', options).format(selectedDates[1])
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
                filterToSend.from = this.filterBy.date.from
                filterToSend.to = this.filterBy.date.to
                delete filterToSend.date
            }

            this.clearBooleans()
            this.setLocFromParams()
            this.setDatesFromParams()
            this.setGuestsFromParams()

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
                this.dateFromForDisplay = this.$route.query.from || 'Add dates'
                this.dateToForDisplay = this.$route.query.to || 'Add dates'
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

                console.log('this.guestsForDisplayTitle', this.guestsForDisplayTitle)
            }, 1)
        },
        onResetFields() {
            this.clearBooleans()
            this.filterBy = {
                loc: '',
                date: {
                    from: '',
                    to: ''
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
        routeQuery() {
            console.log('route query change', this.$route.query)
            this.locForDisplayTitle = this.$route.query.loc || 'Anywhere'

            if (this.$route.query.adults)
                this.guestsForDisplayTitle = this.$route.query.adults || 'Add guests'
            if (this.$route.query.children && this.$route.query.adults)
                this.guestsForDisplayTitle = parseInt(this.$route.query.adults) + parseInt(this.$route.query.children) || 'Add guests'
            if (this.$route.query.infants && this.$route.query.adults)
                this.guestsForDisplayTitle = parseInt(this.$route.query.adults) + parseInt(this.$route.query.children) || 'Add guests'
            if (this.$route.query.children && this.$route.query.adults && this.$route.query.infants)
                this.guestsForDisplayTitle = parseInt(this.$route.query.adults) + parseInt(this.$route.query.children) + parseInt(this.$route.query.infants) || 'Add guests'

                
            if (this.$route.query.to)
                this.dateToForDisplay = this.$route.query.to
            if (this.$route.query.from)
                this.dateFromForDisplay = this.$route.query.from
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