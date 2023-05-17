<template>
    <section class="wish-list">
        <h1 class="header-wish-list medium-font">Wishlists</h1>
        <div class="preview-wish-list">
            <div class="container-wish-list" @click="onOpenWishList()">

                <div class="imgs-wish-list">
                    <!-- <img src="{{ user.wishList[0].imgsUrl[0] }}" alt="">
    
                        <img v-if="user.wishList.length > 1" src="{{ user.wishList[1].imgsUrl[0] }}" alt="">
                        <img v-else src="{{ wishList[0].imgsUrl[1] }}" alt="">
    
                        <img v-if="user.wishList.length > 2" src="{{ user.wishList[2].imgsUrl[0] }}" alt="">
                        <img v-else src="{{ user.wishList[1].imgsUrl[1] }}" alt=""> -->

                    <img class="img1-wish-list"
                        src="http://res.cloudinary.com/dmtlr2viw/image/upload/v1663437040/oarfkdxx7gyyvcynvwko.jpg"
                        alt="stay">
                    <img class="img2-wish-list"
                        src="http://res.cloudinary.com/dmtlr2viw/image/upload/v1663437355/fy46xsk3yd7xujzcs2uz.jpg"
                        alt="stay">
                    <img class="img3-wish-list"
                        src="http://res.cloudinary.com/dmtlr2viw/image/upload/v1663436886/cvc2yfmhfg9dabfkyiqw.jpg"
                        alt="stay">
                </div>
                <div class="wish-list-name">
                    <h3>My Wish List 💓</h3>
                </div>
            </div>           
        </div>
    </section>
    <div class="back" @click="goBack" >
        <img src="https://res.cloudinary.com/didkfd9kx/image/upload/v1684147823/back_k9lue1.png">
    </div>
</template>

<script>
export default {
    name: '',
    data() {
        return {
         
            // stays: this.$store.getters.stays
        }
    },
    methods: {
        // onOpenWishList() {},
        goBack() {
            this.$router.back()
        }
    },
    computed: {
        user() {
            return this.$store.getters.loggedinUser
        },
        userId() {
            return this.$route.params.userId
        },
    },
    created() {

    },
    components: {

    },
}
</script>