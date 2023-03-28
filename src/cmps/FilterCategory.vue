<template>
    <Carousel class="filter-category" :settings="settings" :breakpoints="breakpoints">
        <Slide class="nav-item" v-for="img in imgs" :key="img">
            <div class="carousel__item" @click="setFilterBy(img.key)" :class="isActive===img.key?'active':'inactive'">
                <img :src="img.url" :alt="img.key">
                <p>{{ img.key }}</p>
            </div>
        </Slide>
        <template #addons>
            <!-- :nextLabel="'>'" :prevLabel="'<'" -->
            <Navigation />
        </template>
    </Carousel>
</template>

<script>
import { stayService } from '../services/stay.service.local';
import { defineComponent } from 'vue';
import { Carousel, Navigation, Slide } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
    name: 'FilterNav',
    data() {
        return {
            filterBy: {
                category: ''
            },
            imgs: stayService.getLabels(),
            settings: {
                itemsToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                snapAlign: 'center',
            },
            breakpoints: {
                // 700px and up
                700: {
                    itemsToShow: 8,
                    snapAlign: 'center',
                },
                // 1024 and up
                1024: {
                    itemsToShow: 13,
                    snapAlign: 'start',
                }
            },
            isActive: ''
        }
    },
    methods: {
        setFilterBy(filterBy) {
            this.isActive = filterBy
            this.filterBy.category = filterBy
            this.$emit('filter-by', this.filterBy);
        }
    },
    computed: {

    },
    components: {
        Carousel,
        Navigation,
        Slide
    },
});
</script>
