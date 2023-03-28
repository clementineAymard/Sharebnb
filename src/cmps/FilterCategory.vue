<template>
    <Carousel class="filter-category" :settings="settings" :breakpoints="breakpoints" :start="0"
        @before-slide="handleBeforeSlide" :hide-arrows="hideArrows">
        <Slide class="nav-item" v-for="(img, index) in imgs" :key="index">
            <div class="carousel__item" @click="setFilterBy(img.key)" :class="(isActive === img.key) ? 'active' : 'inactive'">
                <img :src="img.url" :alt="img.key" :class="(isActive === img.key) ? 'active' : 'inactive'">
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
                // slidesToScroll: 12,
                // infinite: true,
                snapAlign: 'center',
            },
            breakpoints: {
                300: {
                    itemsToShow: 5,
                    snapAlign: 'center',
                },

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
            isActive: 'Trending',
            hideArrows : false
        }
    },
    methods: {
        setFilterBy(filterBy) {
            this.isActive = filterBy
            this.filterBy.category = filterBy
            this.$emit('filter-by', this.filterBy);
          
        },
        handleBeforeSlide(index) {
            if (index === 0) {
                this.hideArrows = true; // hide left arrow on first slide
            } else if (index === this.imgs.length - 1) {
                this.hideArrows = true; // hide right arrow on last slide
            } else {
                this.hideArrows = false; // show both arrows on other slides
            }

        },
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
