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
