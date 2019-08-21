<template>
  <div class="more">
   <header>更多<img class="goBack" @click="$router.go(-1)" src="../../public/images/back.png" alt /></header>
  </div>
</template>
<script>
export default {
  name:'More'
}
</script>
<style lang="scss" scoped>
  .more{
     header {
    background: #1296db;
    padding: 0.2rem;
    text-align: center;
    font-size: 16px;
    font-weight: 800;
    .goBack{
      position: absolute;
      top:.08rem;
      width: .4rem;
      height: .4rem;
      left:.03rem;
      font-size: 40px;
    }
  }
  }
</style>
