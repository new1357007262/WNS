<template>
  <div class="info">
     <header>完善信息 <span class="goBack" @click="$router.go(-1)"> < </span></header>
     <section class="info-box">
       <section class="info-item">
         <span>姓名</span>
         <span>刘少雄</span>
       </section>
       <section class="info-item">
         <span>性别</span>
         <span>男</span>
       </section>
       <section class="info-item">
         <span>宿舍门牌号</span>
         <span>6#207</span>
       </section>
        <section class="info-item">
         <span>家庭住址</span>
         <span>内蒙古呼尔浩特市赛罕区</span>
       </section>
       <section class="info-item">
         <span>助理班主任联系电话</span>
         <span>110</span>
       </section>
     </section>
      <router-link to="/setting" class="my-setting" tag="section">
         个人设置
         <img src="../assets/images/xiayibu.png" alt="">
       </router-link >
  </div>
</template>
<script>
export default {
  name:'Info'
}
</script>
<style lang="scss" scoped>
  .info{
    header {
    background: #1296db;
    padding: 0.2rem;
    text-align: center;
    font-size: 16px;
    font-weight: 800;
    position: relative;
    .goBack{
      position: absolute;
      top:.05rem;
      left:.13rem;
      font-size: 40px;
    }
  }
  .info-box{
    font-size: 14px;
    .info-item{
    padding: .17rem;
      display: flex;
      border-bottom: 1px solid #ccc;
      span{
        flex:1;
        text-align: right;
      }
    }
  }
  .my-setting{
    margin-top:.2rem;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    font-size: 16px;
    text-align: left;
    padding: .16rem .2rem;
    position: relative;
    img{
      position: absolute;
      top: .1rem;
      right: .1rem;
    }
  }
  }
</style>
