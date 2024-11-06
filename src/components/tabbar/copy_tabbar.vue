<template>
  <div class="tabbar">
    <template v-for="(item, index) in tarbarData" :key="item">
      <div class="tabbar-item" :class="{active: currentIndex === index}" @click="itemClick(index, item)">
        <!-- 1. Webpack打包工具下拿本地img资源
        <img :src="require(item.image)" :alt="item.text"> -->
        <!-- 2. Vite打包工具下拿本地img资源 -->
        <img v-if="currentIndex !== index" :src="getimageURL(item.image)" :alt="item.text">
        <img v-else :src="getimageURL(item.imageActive)" :alt="item.text">
      <span class="text">{{ item.text }}</span>
    </div>
    </template>
  </div>
</template>

<script setup>
import tarbarData from '@/assets/localData/tabbar';

import { ref } from 'vue';
import { useRouter } from 'vue-router';

const getimageURL = (image) => {
  return new URL(image, import.meta.url).href
}

const currentIndex = ref(0)
const router = useRouter()
const itemClick = (index, item) => {
  currentIndex.value = index
  router.push(item.path)
}

</script>

<style lang="less" scoped>
.tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 48px;
  display: flex;
  border-top: 1px solid #f3f3f3;

  .tabbar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &.active {
    color: var(--primary-color);
    }

    img {
      width: 25px;
      height: 25px;
      padding-bottom: 2px
    }

    text {
      font-size: 12px;
    }
  }
}
</style>