<template>
  <div class="city">
    <van-search
      v-model="searchvalue"
      show-action
      placeholder="城市/区域/位置"
      shape="round"
      @cancel="onCancel"
    />

    <van-tabs v-model:active="Tabactive" color="#ff9854">
      <template v-for="(value, key, index) in cityAll" :key="key">
        <van-tab :title="value.title"></van-tab>
      </template>
    </van-tabs>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import useCityStore from '@/stores/modules/city';
import { storeToRefs } from 'pinia';

const searchvalue = ref("")
const Tabactive = ref(0);
const router = useRouter()
const onCancel = () => {
  router.push("/home")
}

const cityAllData = useCityStore()
cityAllData.fetchCityAllAction()
const { cityAll } = storeToRefs(cityAllData)

</script>

<style lang="less" scoped>
</style>