<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link to="/text">b</router-link>
    <van-button type="primary" size="small" @click="()=>{this.$router.push('/')}">aaaa</van-button>
    <van-button type="primary" size="small" @click="()=>{this.$router.push('/text')}">bbbb</van-button>
    <router-link to="/">a</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
