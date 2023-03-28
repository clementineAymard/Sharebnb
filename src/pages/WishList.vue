<template>
    <section class="wish-list">
        <h1 class="header-wish-list medium-font">Wishlists</h1>
        <div class="preview-wish-list">
            <div class="container-wish-list">
                <div class="imgs-wish-list">
                    <!-- <img src="{{ wishList[0].imgsUrl[0] }}" alt="">

                    <img v-if="wishList.length > 1" src="{{ wishList[1].imgsUrl[0] }}" alt="">
                    <img v-else src="{{ wishList[0].imgsUrl[1] }}" alt="">

                    <img v-if="wishList.length > 2" src="{{ wishList[2].imgsUrl[0] }}" alt="">
                    <img v-else src="{{ wishList[1].imgsUrl[1] }}" alt=""> -->

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
                </div>
                
            </div>
            <h3>My Wish List 💓</h3>
        </div>
    </section>
</template>

<script>
export default {
    name: '',
    data() {
        return {
            wishList: this.$store.getters.wishList,
            stays: this.$store.getters.stays
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
</script>