<template>
  <div id="app">
    <router-view/>
    <div class="tar-buttom">
      <van-button type="primary" @click="()=>{this.$router.push('/')}">aaaa</van-button>
      <van-button type="primary" @click="()=>{this.$router.push('/text')}">bbbb</van-button>
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

#app {
  text-align: center;
  height: 100%;
  width: 100%;
}
.tar-bottom{
  position: fixed;
  bottom:0;
  width: 100%;
  height: 50px;
  background-color: lawngreen;
}
</style>
