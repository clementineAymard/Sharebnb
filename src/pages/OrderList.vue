<template>

<div class="list">
    <ul>
      <div class="order-preview header-order">
        <span @click="setSortBy('name')" class="header-sort"
          ><font-awesome-icon icon="fa-solid fa-sort" />Name</span
        >
        <span @click="setSortBy('gender')" class="header-sort"
          ><font-awesome-icon icon="fa-solid fa-sort" />Gender</span
        ><span @click="setSortBy('birth_year')" class="header-sort"
          ><font-awesome-icon icon="fa-solid fa-sort" />Birth year</span
        ><span @click="setSortBy('height')" class="header-sort"
          ><font-awesome-icon icon="fa-solid fa-sort" />Height</span
        ><span @click="setSortBy('mass')" class="header-sort"
          ><font-awesome-icon icon="fa-solid fa-sort" />Mass</span
        >
      </div>
      <li v-for="order in orders" :key="order.name">
        <OrderPreview :order="order" @deleteOrder="deleteOrder"></OrderPreview>
      </li>
      <!-- <RouterLink to="/list/people/order">Add a new Character</RouterLink> -->
    </ul>
  </div>
</template>
<script></script>
