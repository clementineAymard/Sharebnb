<template>
    <section class="main-container">
        <AppHeader />
        <RouterView  /> <!--@wheel="onCloseHeader"-->
        <AppFooter />
        <!-- <UserMsg /> -->
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
    components: {
        AppHeader,
        AppFooter,
        UserMsg
    },
}
</script>