<template>
  <div v-show="alive" class="alert" :class="alertClass">
    {{ msg?.txt }}
  </div>
</template>


<script>

import 'animate.css'
import { eventBus, SHOW_MSG } from "../services/event-bus.service.js"

export default {
  created() {
    console.log('USER MSG CREATED');
    eventBus.on(SHOW_MSG, (msg) => {
      this.msg = msg
      var delay = msg.delay || 7000
      this.alive = true
      setTimeout(() => {
        this.alive = false
      }, delay)
    })
  },
  data() {
    return {
      alive: false,
      msg: null,
    }
  },
  computed: {
    alertClass() {
      if (!this.msg) return
      return `alert-${this.msg.type}`
    },
  },
}
</script>