<template>
    <section class="my-layout" :class="isDetailsClass">
        <AppHeader />
        <RouterView class="central-el"/> <!--@wheel="onCloseHeader"-->
        <AppFooter  v-if="isOpen" :class="isDetailsClass"/>
        <UserMsg />
    </section>
</template>

<script>


import { userService } from './services/user.service'
import { store } from './store/store'
import { closeHeader } from "./services/event-bus.service.js"

import AppHeader from './cmps/AppHeader.vue'
import AppFooter from './cmps/AppFooter.vue'
import UserMsg from './cmps/UserMsg.vue'


export default {

    created() {
        console.log('Vue App created')
        const user = userService.getLoggedinUser()
        if (user) store.commit({ type: 'setLoggedinUser', user })
    },
    methods: {
        onCloseHeader() {
            closeHeader()
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