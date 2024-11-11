<template>
  <div class="app">
    <Router-view></Router-view>
    <tabbar v-if="!route.meta.hiddentabbar"></tabbar>
    <!-- <copy_tabbar></copy_tabbar> -->
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import tabbar from "./components/tabbar/tabbar.vue"
// import copy_tabbar from "@/components/tabbar/copy_tabbar.vue"

const route = useRoute()
</script>

<style scoped>
</style>