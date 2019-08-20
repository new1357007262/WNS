<template>
  <div class="info">
     <header>个人信息  <img class="goBack" @click="$router.go(-1)" src="../../public/images/back.png" alt=""></header>
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
         <img src="../../public/images/xiayibu.png" alt="">
       </router-link >
       <router-link to="/index" tag="section" class="logout">
        <button>退出</button>
       </router-link>
  </div>
</template>
<script>
export default {
  name:'Info'
}
</script>
<style lang="scss" scoped>
  .info{
    height: 100vh;
    background: #E4F4EA;
    header {
    background: #1296db;
    padding: 0.2rem;
    text-align: center;
    font-size: 16px;
    font-weight: 800;
    position: relative;
    .goBack{
    position: absolute;
      top: .05rem;
      left: 0px;
      width: .5rem;
      height: .5rem;
    }
  }
  .info-box{
    font-size: 14px;
    .info-item{
    padding: .17rem;
    background: #fff;
      display: flex;
      border-bottom: 1px solid #ccc;
      span{
        flex:1;
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
        background: #fff;
    img{
      position: absolute;
      top: .1rem;
      right: .1rem;
    }
  }
  .logout{
    text-align: center;
    button{
      border: none;
      outline: none;
      color:#fff;
      background: #1296DB;
      padding:.1rem .3rem;
      border-radius: .1rem;
    }
  }
  }
</style>
