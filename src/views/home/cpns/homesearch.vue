<template>
  <div class="homesearch">
    <div class="location">
      <div class="city" @click="CityClick">
        <span class="text">广州</span>
      </div>
      <div class="position">
        <span class="text">我的位置</span>
        <img src="../../../assets/imgs/location.png" alt="定位">
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
const CityClick = () => {
  router.push("/city")
}

</script>

<style lang="less" scoped>
  .location {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 44px;

    .city {
      flex: 1;
      .text {
        margin-left: 6px;
        font-size: 15px;
      }
    }

    .position {
      display: flex;
      justify-content: center;
      align-items: center;

      .text {
        font-size: 15px;
      }

      img {
        padding-left: 1px;
        padding-right: 2px;
        height: 27px;
        width: 27px;
      }
    }
  }
</style>