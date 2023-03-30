import { createRouter, createWebHashHistory } from 'vue-router'

import Home from './pages/Home.vue'
import Chat from './pages/Chat.vue'
import StayDetails from './pages/StayDetails.vue'
import StayEdit from './pages/StayEdit.vue'
import Explore from './pages/Explore.vue'
import ReviewIndex from './pages/ReviewIndex.vue'
import LoginSignup from './cmps/LoginSignup.vue'
import UserDetails from './pages/UserDetails.vue'
import OrderConfirmation from './pages/OrderConfirmation.vue'
import WishList from './pages/WishList.vue'
import OrderList from './pages/OrderList.vue'
import TripList from './pages/TripList.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/explore',
    name: 'Explore',
    component: Explore
  },
  {
    path: '/stay/:stayId',
    name: 'StayDetails',
    component: StayDetails
  },
  {
    path: '/stay/edit/:stayId?',
    name: 'StayEdit',
    component: StayEdit
  },
  {
    path: '/review',
    name: 'ReviewIndex',
    component: ReviewIndex
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat
  },
//   {
//     path: '/login',
//     name: 'LoginSignup',
//     component: LoginSignup
//   },

  {
    path: '/order/:orderId',
    name: 'OrderConfirmation',
    component: OrderConfirmation
  },
  {
    path: '/user/:userId',
    name: 'UserDetails',
    component: UserDetails
  },
  {
    path: '/user/:userId/staywishlist',
    name: 'WishList',
    component: WishList
  },
  {
    path: '/user/:userId/orders',
    name: 'OrderList',
    component: OrderList
  },
  {
    path: '/user/:userId/trips',
    name: 'TripList',
    component: TripList
  },
]


export const router = createRouter({
  routes,
  history: createWebHashHistory(),
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  }
  // base: process.env.BASE_URL,
})

