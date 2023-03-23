<template>
    <li class="stay-preview flex column">
    
        <div class="img-container">
            <i class="fa-regular fa-heart"></i>
            <el-carousel trigger="click" arrow="hover" :interval="Number('0')">
                <el-carousel-item v-for="(stay, index) in this.stay.imgUrls" :key="index">
                    <img class="stay-img" :src="this.stay.imgUrls[index]" alt="stay">
                </el-carousel-item>
            </el-carousel>
        </div>

        <div class="preview-txt">
            <p class="medium-font">
                {{ stay.loc.city }} , {{ stay.loc.country }}
            </p>
            <p class="regular-font">
                {{ stay.name }}
            </p>
            <p class="regular-font beds"> {{ stay.capacity }} beds , {{ rooms }} rooms</p>
            <p class="medium-font">
                ${{ randomPrice.toLocaleString() }} <span class="regular-font">/ night</span>
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
      
            randomPrice: utilService.getRandomIntInclusive(350, 2500).toLocaleString(),
            randomViwes: utilService.getRandomIntInclusive(6000, 25000).toLocaleString(),
            rooms: Math.floor(this.stay.capacity / 2),
            intervalNum: parseInt(0)
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
        ElCarousel,
        ElCarouselItem,
    },
}
</script>