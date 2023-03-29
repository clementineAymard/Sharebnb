<template>
  <div class="list">
   
    <ul>
      <div class="order-preview header-order">
        <span @click="setSortBy('guest')" class="header-sort"><font-awesome-icon icon="fa-solid fa-sort" />Guest</span>
        <span @click="setSortBy('name')" class="header-sort"><font-awesome-icon icon="fa-solid fa-sort" />Stay Name</span>
            <span @click="setSortBy('startDate')" class="header-sort"><font-awesome-icon icon="fa-solid fa-sort" />Check in</span>
            <span @click="setSortBy('endDate')" class="header-sort"><font-awesome-icon icon="fa-solid fa-sort" />Check out</span>
          <span @click="setSortBy('totalPrice')" class="header-sort"><font-awesome-icon icon="fa-solid fa-sort" />Total price</span>
          <span @click="setSortBy('status')" class="header-sort"><font-awesome-icon icon="fa-solid fa-sort" />Status</span>
          <span class="header-sort"></span>
      </div>
      <li v-for="order in orders" :key="order.name">
        <OrderPreview :order="order" @updateOrder="updateOrder"></OrderPreview>
      </li>
      <!-- <RouterLink to="/list/people/order">Add a new Character</RouterLink> -->
    </ul>
  </div>
</template>

<script>
import OrderPreview from './OrderPreview.vue'

export default {
  name: '',
  data() {
    return {
      // filterBy: {
      //   hostId: this.loggedinUser._id
      // },

    }
  },
  methods: {

  },
  computed: {
    orders() {
      return this.$store.getters.orders
    },
    loggedinUser(){
      console.log(this.$store.getters.loggedinUser);
      return this.$store.getters.loggedinUser
    }
  },
  async created() {
    try{
      await this.$store.dispatch({ type: 'loadOrders', filterBy: {hostId: this.loggedinUser._id} })
    }
    catch(err){
      console.log(err,'cannot load orders');
    }
    },
  components: {
    OrderPreview
  },
}

</script>
