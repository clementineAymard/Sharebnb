import { createRouter, createWebHashHistory } from 'vue-router'

import Home from './pages/Home.vue'
import Chat from './pages/Chat.vue'
import StayDetails from './pages/StayDetails.vue'
import StayEdit from './pages/StayEdit.vue'
import StayIndex from './pages/StayIndex.vue'
import ReviewIndex from './pages/ReviewIndex.vue'
import LoginSignup from './pages/LoginSignup.vue'
import UserDetails from './pages/UserDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: StayIndex
  },
  {
    path: '/stay',
    name: 'StayIndex',
    component: StayIndex
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
    path: '/edit',
    name: 'edit',
    component: LoginSignup
  },

  {
    path: '/user/:id',
    name: 'UserDetails',
    component: UserDetails
  }
]


export const router = createRouter({
  routes,
  history: createWebHashHistory()
  // base: process.env.BASE_URL,
})

