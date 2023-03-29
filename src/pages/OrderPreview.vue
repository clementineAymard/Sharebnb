
<template>
    <section class="user-preview">

  
   
        <div>{{ user.name }}</div>
            <div > {{ user.gender }}</div>
                <div > {{ user.birth_year }}</div>
                    <div  > {{ user.height }}</div>
                        <div> {{ user.mass }}</div>
                        <!-- < div class=" buttons" v-if="buttons">
                        <div @click=" deleteUser(user.name)"><font-awesome-icon icon="fa-solid fa-trash" /></div>
                <div @click=" this.$router.push({ name: 'user-edit', params: { name: user.name } })">
                <font-awesome-icon icon="fa-edit" /> -->
         
       
        </section>
        </template>

        <script>
        </script>
