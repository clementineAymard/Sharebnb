<template>

  <div class="list-trip">
     
      <ul v-if="orders">
        <div class="trip-preview header-trip">
          <span @click="setSortBy('name')" class="header-sort-trip"><font-awesome-icon icon="fa-solid fa-sort" />Stay Name</span>
          <span @click="setSortBy('host')" class="header-sort-trip"><font-awesome-icon icon="fa-solid fa-sort" />Host</span>
              <span @click="setSortBy('startDate')" class="header-sort-trip"><font-awesome-icon icon="fa-solid fa-sort" />Check in</span>
              <span @click="setSortBy('endDate')" class="header-sort-trip"><font-awesome-icon icon="fa-solid fa-sort" />Check out</span>
            <span @click="setSortBy('totalPrice')" class="header-sort-trip"><font-awesome-icon icon="fa-solid fa-sort" />Total price</span>
            <span @click="setSortBy('status')" class="header-sort-trip"><font-awesome-icon icon="fa-solid fa-sort" />Status</span>
        </div>
        <li v-for="order in orders" :key="order.name">
          <TripPreview :order="order" @updateOrder="updateOrder"></TripPreview>
        </li>
        <!-- <RouterLink to="/list/people/order">Add a new Character</RouterLink> -->
      </ul>

      
        <h3 v-else>No trips yet.</h3>
    </div>
  </template>
  
  <script>
  import TripPreview from './../cmps/TripPreview.vue'
  
  export default {
    name: '',
    data() {
      return {
        // filterBy: {
        //   buyerId: this.loggedinUser._id
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
        await this.$store.dispatch({ type: 'loadOrders', filterBy: {buyerId : this.loggedinUser._id} })
      }
      catch(err){
        console.log(err,'cannot load trips');
      }
      },
    components: {
      TripPreview
    },
  }
  
  </script>
  
