<template>
 <section className="stay-list">
    <!-- <ul> -->
        <StayPreview 
        v-for="stay in stays" 
        :key="stay._id" 
        :stay="stay" 
        @removeStay="$emit('removeStay',stay._id)"
        @updateStay="$emit('updateStay',stay)" @click=" this.$router.push(`/stay/${stay._id}`)"></StayPreview>
    <!-- </ul> -->

</section>
</template>

<script>
import StayPreview from './StayPreview.vue';

export default {
name: 'StayList',
props: {
    stays: Array
  },
data() {
return {

}
},
methods: {
    removeStay(stayId) {
        this.$emit('removeStay', stayId)
    },
    updateStay(stay) {
        this.$emit('updateStay', stay)
    },
},
computed: {
   
},
created() {

},
components: {
    StayPreview
},
}
</script>