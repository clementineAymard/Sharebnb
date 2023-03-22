<template>
    <li class="stay-preview flex column">
        <!-- <pre> -->
        <!-- {{ stay.imgUrls[0] }} -->
        <!-- </pre>   -->
        <div class="img-container">
            <i class="fa-regular fa-heart"></i>
            <img class="stay-img" :src="imgUrl" alt="">
        </div>

        <div class="preview-txt">
            <p>
                {{ stay.loc.city }} , {{ stay.loc.country }}
            </p>
            <p class="regular-font">
                {{ stay.name }}
            </p>
            <p class="regular-font beds"> {{ stay.capacity }} beds , {{ rooms }} rooms</p>
            <!-- <p class="regular-font">Viewed <span>{{ randomViwes }}</span> times last week</p> -->
            <p>
                ${{ stay.price?.toLocaleString() }} <span class="regular-font">/ night</span>
            </p>
        </div>

        <!-- <button @click="removeStay(stay._id)">x</button>
            <button @click="updateStay(stay)">Update</button> -->
        <!-- <hr /> -->
    </li>
</template>

<script>
import { utilService } from '../services/util.service'

export default {
    name: 'StayPreview',
    props: { stay: Object },
    data() {
        return {
            imgUrl: `${this.stay.imgUrls[0]}`,
            randomViwes: utilService.getRandomIntInclusive(6000, 25000).toLocaleString(),
            rooms: Math.floor(this.stay.capacity / 2)
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