<template>
  <div class="homesearch">
    <div class="location">
      <div class="city">
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

</script>

<style lang="less" scoped>
  .location {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 44px;

    .city {
      flex: 1;
    }

    .position {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        padding-left: 3px;
        padding-right: 2px;
        height: 27px;
        width: 27px;
      }
    }
  }
</style>