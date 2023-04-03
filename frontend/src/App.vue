<template>
    <section class="my-layout" :class="isDetailsClass">
        <AppHeader />
        <RouterView class="central-el"/> <!--@wheel="onCloseHeader"-->
        <AppFooter  v-if="isOpen" :class="isDetailsClass"/>
        <UserMsg />
    </section>
</template>

<script>

// import {socketService} from './services/socket.service'
import { userService } from './services/user.service'
import { store } from './store/store'
import { closeHeader, showSuccessMsg } from "./services/event-bus.service.js"

import AppHeader from './cmps/AppHeader.vue'
import AppFooter from './cmps/AppFooter.vue'
import UserMsg from './cmps/UserMsg.vue'


export default {

    created() {
        console.log('Vue App created')
        const user = userService.getLoggedinUser()
        if (user) store.commit({ type: 'setLoggedinUser', user })

        socketService.on('your-order-updated', this.changeTripStatus)
        socketService.on('order-for-you', this.addOrder)
    },
    methods: {
        changeTripStatus(){
            console.log('got notification from socket')
            showSuccessMsg('Your trip status was updated !')
            this.$store.dispatch({ type: 'loadOrders', filterBy: { buyerId: this.loggedinUser._id } })
        },
        addOrder() {
            showSuccessMsg('Notification: New order.')
            this.$store.dispatch({ type: 'loadOrders', filterBy: { buyerId: this.loggedinUser._id } })
        },
    },
    computed: {
        isDetailsClass() {
            return (this.$route.name === 'StayDetails') ? 'narrow' : 'regular'
        },
        isOpen() {
            return (this.$route.name === 'Home' || this.$route.name === 'StayDetails')
        },
    },
    components: {
        AppHeader,
        AppFooter,
        UserMsg
    },
}
</script>