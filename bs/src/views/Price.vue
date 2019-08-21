<template>
  <div class="price">
  <header>贷款通知<img class="goBack" @click="$router.go(-1)" src="../../public/images/back.png" alt /></header>
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
      top: 0.08rem;
      left: 0px;
      width: 0.4rem;
      height: 0.4rem;
    }
  }
  }
</style>
