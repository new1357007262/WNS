<template>
  <div class="info">
     <header>个人信息  <img class="goBack" @click="$router.go(-1)" src="../../public/images/back.png" alt=""></header>
     <section class="info-box" v-if="user">
       <section class="info-item">
         <span>姓名</span>
         <span>{{ user.name }}</span>
       </section>
       <section class="info-item">
         <span>性别</span>
         <span>{{ user.gender  }}</span>
       </section>
       <section class="info-item">
         <span>宿舍门牌号</span>
         <span>{{ user.stuUser.houseNumber }}</span>
       </section>
        <section class="info-item">
         <span>家庭住址</span>
         <span>{{ user.address }}</span>
       </section>
       <section class="info-item">
         <span>助理班主任</span>
         <span>{{ user.stuUser.major.assistant }}</span>
       </section>
       <section class="info-item">
         <span>助理班主任联系电话</span>
         <span>{{ user.stuUser.major.phone }}</span>
       </section>
     </section>
      <router-link to="/setting" class="my-setting" tag="section">
         个人设置
         <img src="../../public/images/xiayibu.png" alt="">
       </router-link >
       <router-link to="/home" tag="section" class="logout">
        <button @click="logout">退出</button>
       </router-link>
  </div>
</template>
<script>
export default {
  name:'Info',
  data(){
    return {
      user:null
    }
  },
  methods:{
    logout(){
      localStorage.removeItem('isLogin')
    }
  },
  mounted() {
  this.user = JSON.parse(localStorage.getItem('isLogin'))
  this.$axios.get('http://203.195.219.213:8083/stuBf/findByUserid',{
    params:{
      userId:this.user.id
    }
  }).then((result) => {
    this.user =  result.data.data
  })
  },
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
      top: .08rem;
      left: 0px;
      width: .4rem;
      height: .4rem;
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
