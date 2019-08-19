<template>
  <div class="more">
    <header>更多<span class="goBack" @click="$router.go(-1)"> < </span></header>
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
      top:.05rem;
      left:.13rem;
      font-size: 40px;
    }
  }
  }
</style>
