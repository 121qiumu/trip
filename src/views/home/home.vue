<template>
  <div class="home">
    <homenavbar></homenavbar>
    <div class="banner">
      <img src="../../assets/imgs/banner.png" alt="搜也旅途-永无止境">
    </div>
    <homesearch></homesearch>
  </div>
</template>

<script setup>
import homenavbar from './cpns/homenavbar.vue';
import homesearch from './cpns/homesearch.vue';

</script>

<style lang="less" scoped>
.home {
  .banner{
    img {
      width: 100%;
    }
  }
}
</style>