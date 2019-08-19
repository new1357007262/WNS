<template>
  <div class="price">
  <header>贷款通知<span class="goBack" @click="$router.go(-1)"> < </span></header>
  </div>
</template>
<script>
export default {
  name:'Price'
}
</script>
<style lang="scss" scoped>
  .price{
    header {
    background: #1296db;
    padding: 0.2rem;
    text-align: center;
    font-size: 16px;
    font-weight: 800;
    .goBack{
      position: absolute;
      top:.05rem;
      left:.13rem;
      font-size: 40px;
    }
  }
  }
</style>
