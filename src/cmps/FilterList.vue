<template>
    <section>
        <div class="filter-list">
            <button v-for="(img, idx) in imgs" class="nav-item" @click="setFilterBy(img.key)">
                <img :src=img.url :alt=img.key>
                <br /> <span>{{img.key}}</span>
            </button>
            <!-- <button class="nav-item" @click="setFilterBy('trending')">
                <img src="https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg" alt="trending">
                <br /> <span>Trending</span>
            </button>
            <button class="nav-item" @click="setFilterBy('castles')">
                <img src="https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg" alt="castles">
                <br /> <span>Castles</span>
            </button>
            <button class="nav-item" @click="setFilterBy('beachfront')">
                <img src="https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg" alt="beachfront">
                <br /> <span>Beachfront</span>
            </button>
            <button class="nav-item" @click="setFilterBy('surfing')">
                <img src="https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg" alt="surfing">
                <br /> <span>Surfing</span>
            </button>
            <button class="nav-item" @click="setFilterBy('iconic cities')">
                <img src="https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg" alt="iconic cities">
                <br /> <span>Iconic cities</span>
            </button>
            <button class="nav-item" @click="setFilterBy('mansions')">
                <img src="https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg" alt="mansions">
                <br /> <span>Mansions</span>
            </button>
            <button class="nav-item" @click="setFilterBy('lakefront')">
                <img src="https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg" alt="lakefront">
                <br /> <span>Lakefront</span>
            </button>
            <button class="nav-item" @click="setFilterBy('luxe')">
                <img src="https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg" alt="luxe">
                <br />
                <span>Luxe</span>
            </button>
            <button class="nav-item" @click="setFilterBy('omg')">
                <img src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg" alt="omg">
                <br /> <span>Omg!</span>
            </button>
            <button class="nav-item" @click="setFilterBy('amazing views')">
                <img src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg" alt="amazing views">
                <br /> <span>Amazing views</span>
            </button>
            <button class="nav-item"  @click="setFilterBy('private rooms')">
                <img src="https://a0.muscache.com/pictures/eb7ba4c0-ea38-4cbb-9db6-bdcc8baad585.jpg" alt="private rooms">
                <br /> <span>Private rooms</span>
            </button>
            <button class="nav-item" @click="setFilterBy('boats')">
                <img src="https://a0.muscache.com/pictures/687a8682-68b3-4f21-8d71-3c3aef6c1110.jpg" alt="boats">
                <br /> <span>Boats</span>
            </button>
            <button class="nav-item" @click="setFilterBy('cabins')">
                <img src="https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg" alt="cabins">
                <br /> <span>Cabins</span>
            </button>
            <button class="nav-item" @click="setFilterBy('amazing pools')">
                <img src="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg" alt="amazing pools">
                <br /> <span>Amazing pools</span>
            </button> -->
        </div>
    </section>
</template>

<script>
import { stayService } from '../services/stay.service.local';

export default {
    name: 'filter-nav',
    data() {
        return {
            imgs: stayService.getLabels()
        }
    },
    methods: {
        setFilterBy(filterBy) {
            console.log('filterBy', filterBy)
        }
    },
    computed: {

    },
    created() {

    },
    components: {

    },
}
</script>