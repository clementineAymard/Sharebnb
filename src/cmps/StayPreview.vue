<template>
    <ul>
        <li class="stay-preview">
            <!-- <pre> -->
            <!-- {{ stay.imgUrls[0] }} -->
            <!-- </pre>   -->
            <p class="img-container">

                <button @click="removeStay(stay._id)">x</button>
                <button @click="updateStay(stay)">Update</button>
                <button @click="goToDetail(stay)">Details</button>
                <hr />
                <i class="fa-regular fa-heart"></i>
                <img class="stay-img" :src="imgUrl" alt="">

            </p>
            <hr>
            <p>
                {{ stay.name }} , {{ stay.loc.country }}
            </p>
            <p class="regular-font">Viewed <span>{{ randomViwes }}</span> times last week</p>
            <p>
                ${{ stay.price?.toLocaleString() }} <span class="regular-font">night</span>
            </p>

            <!-- <button @click="removeStay(stay._id)">x</button>
            <button @click="updateStay(stay)">Update</button> -->
            <!-- <hr /> -->
        </li>
    </ul>
</template>

<script>
import { utilService } from '../services/util.service'

export default {
    name: 'StayPreview',
    props: { stay: Object },
    data() {
        return {
            imgUrl: `${this.stay.imgUrls[0]}`,
            randomViwes: utilService.getRandomIntInclusive(6000, 25000)
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