<template>
    <li class="stay-preview flex column" @click="handleViews">

        <div class="img-container">
            <i class="fa-solid fa-heart" @click.stop="addToFavorite(stay)" :class="(isFavorite) ? 'red' : 'black'"></i>
            <el-carousel trigger="click" arrow="hover" :interval="Number('0')" :loop="false">
                <el-carousel-item v-for="(stay, index) in this.stay.imgUrls" :key="index">
                    <img class="stay-img" :src="this.stay.imgUrls[index]" alt="stay">
                </el-carousel-item>
            </el-carousel>
        </div>

        <div class="preview-txt">
            <p class="bold-font address">
                {{ stay.loc.city }} , {{ stay.loc.country }}
            </p>
            <p class="rating regular-font">
                <i class="fa-sharp fa-solid fa-star"></i>
                {{ stay.rate }}
            </p>
            <p class="regular-font grey stayName">
                {{ stay.name }}
            </p>
            <div class="beds">

                <p class="regular-font beds grey" v-if="stay.capacity > 1 && stay.bedrooms > 1"> {{ stay.capacity }} beds ,
                    {{ stay.bedrooms }}
                    rooms</p>
                <p v-else="stay.capacity===1" class="regular-font grey">{{ stay.capacity }} bed, {{ stay.bedrooms }} rooms
                </p>
                <p v-else="stay.bedrooms===1" class="regular-font grey">{{ stay.capacity }} beds, {{ stay.bedrooms }} room
                </p>
            </div>
            <p class="medium-font price">
                ${{ stay.price }} <span class="regular-font"> night</span>
            </p>
        </div>


    </li>
</template>

<script>
import { utilService } from '../services/util.service'
import { ElCarousel, ElCarouselItem } from 'element-plus';
import { showErrorMsg } from '../services/event-bus.service';

export default {
    name: 'StayPreview',
    props: { stay: Object },
    data() {
        return {
            isFavorite: false,
            randomViews: utilService.getRandomIntInclusive(6000, 25000).toLocaleString(),
            intervalNum: parseInt(0),
            wishList: [],
            // user: this.$store.getters.loggedinUser

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

            if (this.stay.name.length > 30) {

                this.stay.name.splice(0, 30) + '...'
            }
        },
        handleViews() {
            this.randomViews++
            this.$emit('openStayDetails', this.stay._id)
        },
        addToFavorite() {
            if (this.loggedinUser) {
                this.isFavorite = !this.isFavorite
                this.$store.dispatch({ type: 'addToWishList', user: this.loggedinUser, stay: this.stay })
            } else {
                showErrorMsg('Login to save to wishlist.')
            }
        }
    },
    computed: {
        loggedinUser() {
            return this.$store.getters.loggedinUser
        }
    },
    created() {

    },
    components: {
        ElCarousel,
        ElCarouselItem,
    },
}
</script>