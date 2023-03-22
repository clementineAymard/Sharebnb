<!-- <template>

</template>

<script>

export default {
name: '',
data() {
return {

}
},
methods: {

},
computed: {

},
created() {

},
components: {

},
}
</script> -->

<!-- //////////////////////////////////////////////////////// -->


<template>
    <section v-if="stay" class="stay-details flex flex-col items-center gap-2">
      <article>
        <!-- <pre>{{stay}}</pre> -->
        <p><span class="fw-bold">Name:</span> {{ stay.name }}</p>
        <p><span class="fw-bold">Price:</span> ${{ stay.price }}</p>
        <p><span class="fw-bold">Created at:</span> {{ formattedDate }}</p>
      </article>
      <!-- <button @click="goBack" class="btn btn-primary">go back</button> -->
  
  
    </section>
  </template>
  
  <script>
  import { stayService } from '../services/stay.service.local.js'
  
  export default {
    name: 'stay-detail',
    data() {
      return {
        stay: null,
      }
    },
    async created() {
      const { stayId } = this.$route.params
      const stay = await stayService.getById(stayId)
      // console.log('stay',stay)
        this.stay = stay
      
    },
    methods: { 
      goBack() {
        this.$router.push('/stay')
      },
    },
    computed: {
      formattedDate() {
        return new Date(this.stay.createdAt).toLocaleDateString()
      },
      // getLabels(){
      //   return this.stay?.labels.join(', ')
      // }
    },
  }
  </script>
<template>
  <section>
    <div>
      <div class="stay-list">
      <h1>BALIAN TREEHOUSE w beautiful pool</h1>
    </div>
    <div class="stay-details1">
      <span class="first-span">
        <span class="star">⭐</span>
        <span class="rate"> 4.84 .</span>
        <span class="reviews"> 281 reviews</span>
      </span>
      <span> . </span>
      <span class="second-span">
        <span class="host"> Superhost </span>
        <span> . </span>
      </span>
      <span class="third-span">
        <span> Balian Beach, Bali, Indonesia</span>
      </span>
    </div>
    <div class="share-save">
      <div class="share">
        <span>📤</span>
        <span>Share</span>
      </div>
      <div class="save">
        <span>❤️</span>
        <span>Save</span>
      </div>
      
    </div>
    
  </div>
</section>
  
  <section v-if="stay" class="stay-details flex flex-col items-center gap-2">
    <article>

      <!-- <h2 class="stay-details__title">{{ stay.name }}</h2> -->
      <!-- <p><span class="fw-bold">Name:</span> {{ stay.name }}</p> -->
      <!-- <p><span class="fw-bold">Price:</span> ${{ stay.price }}</p> -->
      <!-- <p><span class="fw-bold">Created at:</span> {{ formattedDate }}</p> -->
    </article>
    <button @click="goBack" class="btn btn-primary">go back</button>


  </section>
</template>
  
<script>
import { stayService } from '../services/stay.service.local.js'

export default {
  name: 'stay-detail',
  data() {
    return {
      stay: { name: 'home', price: '70' },
    }
  },
  created() {
    // const { id } = this.$route.params
    // stayService.getById(id).then((stay) => {
    //   this.stay = stay
    // })
  },
  methods: {
    goBack() {
      this.$router.push('/stay')
    },
  },
  computed: {
    formattedDate() {
      return new Date(this.stay.createdAt).toLocaleDateString()
    },
    // getLabels(){
    //   return this.stay?.labels.join(', ')
    // }
  },
}
</script>
