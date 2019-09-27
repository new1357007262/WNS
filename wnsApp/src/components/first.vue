<template>
  <div class="first">
      <div class="swipt">
        <van-swipe :autoplay="3000" indicator-color="white">
          <van-swipe-item>1</van-swipe-item>
          <van-swipe-item>2</van-swipe-item>
          <van-swipe-item>3</van-swipe-item>
          <van-swipe-item>4</van-swipe-item>
        </van-swipe>
      </div>
      <div class="content">
        <div class="content-hender">
          <div>报到点这</div>
          <div>找不见点这</div>
        </div>
        
      </div>
  </div>
</template>

<script>
export default {
  name: 'first',
  data () {
    return {
      
    }
  }
}
</script>

<style>


</style>
