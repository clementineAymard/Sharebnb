
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
          <button>
            <span>📤</span>
            <span>Share</span>
          </button>
        </div>
        <div class="save">
          <button>
            <span>❤️</span>
            <span>Save</span>
          </button>
        </div>

        <section class="cards-container">
          <div class="card1" @click="toggleSidebar">
            <img class="stay-img-details"
              src="https://res.cloudinary.com/deayegq6w/image/upload/v1679475459/12d767dc.c10_vifdof.jpg" alt="">
          </div>

          <div class="card2">
            <img class="stay-img-details"
              src="https://res.cloudinary.com/deayegq6w/image/upload/v1679475459/12d767dc.c10_vifdof.jpg" alt="">
          </div>

          <div class="card3">
            <img class="stay-img-details"
              src="https://res.cloudinary.com/deayegq6w/image/upload/v1679475459/12d767dc.c10_vifdof.jpg" alt="">
          </div>

          <div class="card4">
            <img class="stay-img-details"
              src="https://res.cloudinary.com/deayegq6w/image/upload/v1679475459/12d767dc.c10_vifdof.jpg" alt="">
          </div>

          <div class="card5">
            <img class="stay-img-details"
              src="https://res.cloudinary.com/deayegq6w/image/upload/v1679475459/12d767dc.c10_vifdof.jpg" alt="">
          </div>
        </section>
      </div>
    </div>
  </section>

  <section v-if="stay" class="stay-details flex flex-col items-center gap-2">
    <article>
      <pre>{{ stay }}</pre>
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
      stay: null,
    }
  },
  async created() {
    const { id } = this.$route.params
    await stayService.getById(id).then((stay) => {
      this.stay = stay
    })
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
