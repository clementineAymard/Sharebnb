<template>
    <ul>
        <li class="stay-preview">
            <!-- {{ stay.url }} -->
            <!-- <img src={{ stay.url }} alt=""> -->
            <p>
                {{stay.name}}
                  </p>
                  <p>
                      ${{stay.price?.toLocaleString()}}
                  </p>

            <button @click="removeStay(stay._id)">x</button>
            <button @click="updateStay(stay)">Update</button>
            <button @click="goToDetail(stay)">Details</button>
            <hr />
        </li>
    </ul>
</template>

<script>
export default {
name: 'StayPreview',
props: { stay: Object },
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
    goToDetail() {
      this.$router.push(`/stay/${this.stay._id}`)
    },
},
computed: {

},
created() {

},
components: {

},
}
</script>