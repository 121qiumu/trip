<template>
  <div class="tabbar">
    <van-tabbar v-model="active" active-color="#ff9854">
      <van-tabbar-item v-for="(item, index) in tarbarData" :key="index" :to="item.path">
        <span>{{ item.text }}</span>
        <template #icon="props">
          <img :src="props.active ? getimageURL(item.imageActive) : getimageURL(item.image)" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import tarbarData from "@/assets/localData/tabbar"
const active = ref(0);

const getimageURL = (image) => {
  return new URL(image, import.meta.url).href
}

</script>

<style scoped>

</style>