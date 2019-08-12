<template>
  <div id="app">
    <div><router-view/></div>
    <div class="tar-buttom">
      <div style="padding:10px; cursor:pointer;flex:1" @click="()=>{this.$router.push('/')}"><img src="@/assets/first.png" alt=""/><div>主页</div></div>
      <div style="padding:10px; cursor:pointer;flex:1" @click="()=>{this.$router.push('/text')}"><img src="@/assets/user.png" alt=""/><div>个人中心</div></div>
      <div style="padding:10px; cursor:pointer;flex:1" @click="()=>{this.$router.push('/text')}"><img src="@/assets/user.png" alt=""/><div>个人中心</div></div>
      <div style="padding:10px; cursor:pointer;flex:1" @click="()=>{this.$router.push('/text')}"><img src="@/assets/user.png" alt=""/><div>个人中心</div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    
  }
}
</script>

<style scoped>
html,body{
  height: 100%;
  width: 100%;
}
#app {
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}
#app>div:first-child{
  flex: 10.5;
}
.tar-buttom{
  display: flex;
  flex:1.5;
  height: 70px;
  background:linear-gradient(to top right,#34BAEA,mediumspringgreen) ;

}
</style>
