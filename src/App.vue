<template>
<nav class="bg-green-500">
  <router-link to="/">Home</router-link> |
  <router-link to="/Dogs"> Dogs</router-link> |
  <router-link to="/Cats"> Cats</router-link> |
  <router-link to="/Horses">  Horse Pictures</router-link>
</nav>
<router-view />
</template>

<script setup></script>
