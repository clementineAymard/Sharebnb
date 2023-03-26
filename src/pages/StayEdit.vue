<template>
    <section class="stay-edit flex column  align-center">
        <div>
            <div class="editTitle">Airbnb it.</div> 
             <div class="editSecondLine">You could earn</div> 
            <div class="money"> $1,337</div>
           
            <div class="estimated "><span class="nights">7 nights </span> at an estimated $191 a night</div> 
        <el-slider :min="1" :max="30" value="7" class="nightsRange" id="nightsRange" v-model="value"/>
       <div class="estimate">Learn how we estimate your earnings</div>
    </div>
    </section>
</template>

<script>
// TODO : Create template same as stay-details but with a form : input texts, checkboxes and upload images
// all with v-model for data's stay

// import stay service
export default {
    data() {
        return {
            value: 7
            // stay : null
        }
    },
    methods: {
        // save : dispatch edit stay 
    },
    computed: {

    },
    created() {
        // TODO : get id from params / if not get empty stay 
    },
    components: {

    },
}
</script>