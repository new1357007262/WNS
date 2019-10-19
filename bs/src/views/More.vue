<template>
  <div class="more">
   <header>更多<img class="goBack" @click="$router.go(-1)" src="../../public/images/back.png" alt /></header>
  <!-- <section class="box">
    <img src="https://mmbiz.qpic.cn/mmbiz_png/kDPsYnnCeVl87U9ianZNnYomZ2uHqZXEjXe0bj3Tr9ibRtwst4rxZ6DzyYjSVOvJXhIhdEKK2gbVHRMJsTMUFZhA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1" alt />
  </section> -->
    <img src="../../public/images/404.png"/>
  </div>
</template>
<script>
export default {
  name:'More'
}
</script>
<style lang="scss" scoped>
  .more{
    
    background: #e4f4ea;
    height: 100vh;
    text-align: center;
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
    img{
          width: 60vw;
    height: 30vh;
    position: absolute;
    top: 31vh;
    left: 26vw;
    }
    .box{
      width: 100%;
      height: 100%;
      // overflow-y: auto;
      img{
        @extend .box;
      }
    }
  }
</style>
