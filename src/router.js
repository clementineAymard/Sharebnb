import { createRouter, createWebHashHistory } from 'vue-router'

import Home from './pages/Home.vue'
import Chat from './pages/Chat.vue'
import StayDetails from './pages/StayDetails.vue'
import StayEdit from './pages/StayEdit.vue'
import Explore from './pages/Explore.vue'
import ReviewIndex from './pages/ReviewIndex.vue'
import LoginSignup from './pages/LoginSignup.vue'
import UserDetails from './pages/UserDetails.vue'
import OrderConfirmation from './pages/OrderConfirmation.vue'
import WishList from './pages/WishList.vue'
import OrderList from './pages/OrderList.vue'
import TripsList from './pages/TripsList.vue'

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
  {
    path: '/login',
    name: 'LoginSignup',
    component: LoginSignup
  },

  {
    path: '/order/:id',
    name: 'OrderConfirmation',
    component: OrderConfirmation
  },
  {
    path: '/user/:id',
    name: 'UserDetails',
    component: UserDetails
  },
  {
    path: '/user/:id/wishlist',
    name: 'WishList',
    component: WishList
  },
  {
    path: '/user/:id/orders',
    name: 'OrderList',
    component: OrderList
  },
  {
    path: '/user/:id/trips',
    name: 'TripsList',
    component: TripsList
  },
]


export const router = createRouter({
  routes,
  history: createWebHashHistory()
  // base: process.env.BASE_URL,
})

