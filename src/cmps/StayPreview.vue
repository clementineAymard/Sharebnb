<template>
    <li class="stay-preview flex column" @click="handleViews">

        <div class="img-container">
            <i class="fa-solid fa-heart"></i>
            <el-carousel trigger="click" arrow="hover" :interval="Number('0')" :loop="false">
                <el-carousel-item v-for="(stay, index) in this.stay.imgUrls" :key="index">
                    <img class="stay-img" :src="this.stay.imgUrls[index]" alt="stay">
                </el-carousel-item>
            </el-carousel>
        </div>

        <div class="preview-txt">
            <p class="bold-font">
                {{ stay.loc.city }} , {{ stay.loc.country }}
                 <p class="rating regular-font">
                    <i class="fa-sharp fa-solid fa-star"></i>
                    {{ getRate }} ({{ stay.reviews.length }})</p>
            </p>
            <p class="regular-font">
                {{ stay.name }}
                <!-- {{ stayName }} -->
            </p>
            <p class="regular-font beds"> {{ stay.capacity }} beds , {{ rooms }} rooms</p>
            <p class="medium-font">
                ${{ stay.price }} <span class="regular-font"> night</span>
            </p>
        </div>


    </li>
</template>

<script>
import { utilService } from '../services/util.service'
import { ElCarousel, ElCarouselItem } from 'element-plus';

export default {
    name: 'StayPreview',
    props: { stay: Object },
    data() {
        return {

            randomViwes: utilService.getRandomIntInclusive(6000, 25000).toLocaleString(),
            rooms: Math.floor(this.stay.capacity / 2),
            intervalNum: parseInt(0),
            getRate: (Math.random() + 4).toFixed(2)

        }
    },
    methods: {
        removeStay(stayId) {
            this.$emit('removeStay', stayId)
        },
        updateStay(stay) {
            this.$emit('updateStay', stay)
        },
        stayName() {
            if (this.stay.name.length > 30){

                this.stay.name.slice(0, 30) + '...'
            }
        },
        handleViews(){
            this.randomViwes++
        }
    },
    computed: {

    },
    created() {

    },
    components: {
        ElCarousel,
        ElCarouselItem,
    },
}
</script>