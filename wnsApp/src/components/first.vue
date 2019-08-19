<template>
  <div class="first">
      <div class="top-title">
        <div>
          <img src="@/assets/user.png" alt=""/>
        </div>
        <div style="flex:8"></div>
        <div>
          <img src="@/assets/user.png" alt=""/>
        </div>
      </div>
      <div class="info">
        <van-notice-bar mode="closeable"
          text="通知内容哪个村王富贵风语咒通知内容哪个村王富贵风语咒通知内容哪个村王富贵风语咒"
          left-icon="volume-o"
        />
      </div>
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
        <div class="content-list1">
          <div><span>新</span></div>
          <div><span>生</span></div>
          <div><span>须</span></div>
          <div><span>知</span></div>
        </div>
        <div class="content-list2">
          <div><span>奖</span></div>
          <div><span>贷</span></div>
          <div><span>助</span></div>
          <div></div>
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
.first{
  display: flex;
  flex-direction: column;
}
.top-title{
  height: 50px;
  background:linear-gradient(to bottom right, #87C7D9,#87D9C2);
  display: flex;
  justify-content: center;
  flex-direction: row;
}
.top-title>div:nth-child(2n+1){
  flex:2;
  margin: 9px 0;
}
.van-swipe{
  height: 200px;
  background: linear-gradient(to bottom right,#456786,#1FA452);
}
.content{
  /* flex: 1; */
  /* background-color: lawngreen; */
  display: flex;
  flex-direction: column;
}
.content-hender{
  display: flex;
}
.content-hender>div{
  flex: 6;
  line-height: 60px;
  border:0.1px #87D9C2 solid; 
  font-size: 18px;
}
.content-list1,.content-list2{
  height: 105px;
  display:flex;
}
.content-list1>div,.content-list2>div{
  flex:4;
  background-color: #fff;
  color:#fff;
  font-size: 30px;
}
.content-list1>div>span,.content-list2>div>span{
  display: inline-block;
  margin: 25% auto;
  border-radius: 50%;
  background-color:#19d8e6;
  padding :10px;
}

</style>
