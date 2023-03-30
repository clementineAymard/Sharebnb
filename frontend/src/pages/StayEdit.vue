<template>
    <section class="stay-edit flex column  align-center">
        <div v-if="!loggedinUser">
            <div class="editTitle">Sharebnb it.</div>
            <div class="editSecondLine">You could earn</div>
            <div class="money"> $1,337</div>

            <div class="estimated "><span class="nights">7 nights </span> at an estimated $191 a night</div>
            <el-slider :min="1" :max="30" value="7" class="nightsRange" id="nightsRange" v-model="value" />
            <div class="estimate">Learn how we estimate your earnings</div>
        </div>
        <div v-else class="flex column">
            <form @submit="saveStay">
                <label>Your home details</label>
                <input v-model="stay.name" type="text" placeholder="Name" selected>
                <input v-model="stay.summary" type="text" placeholder="Description">
                <input v-model="stay.loc.address" type="text" placeholder="Address">
                <input v-model="stay.loc.city" type="text" placeholder="City">
                <input v-model="stay.loc.country" type="text" placeholder="Country">
                <select v-model="stay.type">
                    <option value="" selected>Type</option>
                    <option value="House">House</option>
                    <option value="Appartment">Appartment</option>
                    <!-- <option >Appartment</option> -->
                </select>
                <select multiple v-model="stay.amenities">
                    <option selected value="">Amenities</option>
                    <option value="Wifi">Wifi</option>
                    <option value="Kitchen">Kitchen</option>
                    <option value="TV">TV</option>
                    <option value="Smoking allowed">Smoking allowed</option>
                    <option value="Pets allowed">Pets allowed</option>
                    <option value="Cooking basics">Cooking basics</option>
                </select>
                <select multiple v-model="stay.labels">
                    <option value="" selected   >Categories</option>
                    <option v-for="label in labels" :value="label.key">{{ label.key }}</option>
                </select>
                <input v-model="stay.capacity" type="number" placeholder="Capacity (beds)">
                <ImgUploader @uploaded="addImgUrl" />
                <input v-model="stay.price" type="number" placeholder="Price">
                <button class="save-stay bold-font">Save</button>
            </form>
        </div>
    </section>
</template>

<script>
// TODO : Create template same as stay-details but with a form : input texts, checkboxes and upload images
// all with v-model for data's stay

import { stayService } from '../services/stay.service.local';
import ImgUploader from '../cmps/ImgUploader.vue'

// import stay service
export default {
    data() {
        return {
            stay: null,
            value: 7,
        }
    },
    methods: {
        // save : dispatch edit stay 
        saveStay() {
            if (this.stay._id)
                this.$store.dispatch({ type: 'updateStay', stay: this.stay })
            else
                this.$store.dispatch({ type: 'addStay', stay: this.stay })

        },
        addImgUrl(imgUrl) {
            this.stay.imgUrls.push(imgUrl)
        },
    },
    computed: {
        loggedinUser() {
            return this.$store.getters.loggedinUser
        },
        labels() {
            return stayService.getLabels()
        }
    },
    created() {
        // DONE : get id from params / if not get empty stay 
        if (this.$route.params.stayId)
            this.stay = stayService.getById(this.$route.params.stayId)
        else
            this.stay = stayService.getEmptyStay()
    },
    components: {
        ImgUploader
    },
}
</script>