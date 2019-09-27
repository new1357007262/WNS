<template>
  <div class="hme">
    <Swipe :show-indicators="true" class="swiper-box">
      <SwipeItem class="swiper-item" >
        <img src="http://www.bttc.edu.cn/img/banner_0.jpg" alt >
      </SwipeItem>
      <SwipeItem class="swiper-item">
        <img src="http://www.bttc.edu.cn/img/banner_1.jpg" alt >
      </SwipeItem>
      <SwipeItem class="swiper-item">
        <img src="http://www.bttc.edu.cn/img/banner_2.jpg" alt >
      </SwipeItem>
      <SwipeItem class="swiper-item">
        <img src="http://www.bttc.edu.cn/img/banner_3.jpg" alt >
      </SwipeItem>
    </Swipe>
    <nav class="nav-top">
      <!-- <router-link to="/infotwo" tag="section" class="item" >
        <section class="img-box">
          <img src="../../public/images/info.png" alt />
        </section>
        <p>完善信息</p>
      </router-link>-->
      <section @click="goInfo" class="item">
        <section class="img-box">
          <img src="../../public/images/info.png" alt />
        </section>
        <p>完善信息</p>
      </section>
      <router-link to="/price" tag="section" class="item">
        <section class="img-box">
          <img src="../../public/images/price.png" alt />
        </section>
        <p>贷款通知</p>
      </router-link>
      <router-link to="/course" tag="section" class="item">
        <section class="img-box">
          <img src="../../public/images/course.png" alt />
        </section>
        <p>我的课程</p>
      </router-link>
      <router-link to="/more" tag="section" class="item">
        <section class="img-box">
          <img src="../../public/images/more.png" alt />
        </section>
        <p>更多</p>
      </router-link>
    </nav>
    <section
      class="info"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10"
    >
      <section class="item">
        <section class="title">
          <span>入学须知</span>
          <span>查看</span>
          <img src="../../public/images/new-card.png" alt />
        </section>
        <section
          class="content"
        >2020新生入学须知新生入学须知新生入学须知新生入学须知新生入学须知2020新生入学须知新生入学须知新生入学须知新生入学须知新生入学须知</section>
        <section class="time">
          <img src="../../public/images/time.png" alt />
          <span>2019-9-9 09:09:09</span>
        </section>
      </section>
      <section class="item">
        <section class="title">
          <span>入学须知</span>
          <span>查看</span>
          <img src="../../public/images/new-card.png" alt />
        </section>
        <section
          class="content"
        >2020新生入学须知新生入学须知新生入学须知新生入学须知新生入学须知2020新生入学须知新生入学须知新生入学须知新生入学须知新生入学须知</section>
        <section class="time">
          <img src="../../public/images/time.png" alt />
          <span>2019-9-9 09:09:09</span>
        </section>
      </section>
      <section class="item">
        <section class="title">
          <span>入学须知</span>
          <span>查看</span>
          <img src="../../public/images/new-card.png" alt />
        </section>
        <section
          class="content"
        >2020新生入学须知新生入学须知新生入学须知新生入学须知新生入学须知2020新生入学须知新生入学须知新生入学须知新生入学须知新生入学须知</section>
        <section class="time">
          <img src="../../public/images/time.png" alt />
          <span>2019-9-9 09:09:09</span>
        </section>
      </section>
      <section class="item">
        <section class="title">
          <span>入学须知</span>
          <span>查看</span>
          <img src="../../public/images/new-card.png" alt />
        </section>
        <section
          class="content"
        >2020新生入学须知新生入学须知新生入学须知新生入学须知新生入学须知2020新生入学须知新生入学须知新生入学须知新生入学须知新生入学须知</section>
        <section class="time">
          <img src="../../public/images/time.png" alt />
          <span>2019-9-9 09:09:09</span>
        </section>
      </section>
    </section>
  </div>
</template>
<script>
import { Swipe, SwipeItem,MessageBox,Indicator } from "mint-ui";
export default {
  name: "Hme",
  data() {
    return {
      loading: false,
      position: [116.419356, 39.941567]
    };
  },
  components: {
    Swipe,
    SwipeItem
  },
  methods: {
    loadMore() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 2500);
    },
    goInfo() {
      this.getLocation()
    },
    getLocation() {
      Indicator.open({
        text: '玩命加载中...',
        pinnerType: 'fading-circle'
      });
      // console.log('222')
      AMap.plugin("AMap.Geolocation", () => {
        var geolocation = new AMap.Geolocation({
          enableHighAccuracy: true,
          timeout: 10000

        });
        geolocation.getCurrentPosition();
        AMap.event.addListener(geolocation, "complete", this.onComplete);
        AMap.event.addListener(geolocation, "error", this.onError);
      });
    },
    onComplete(data) {
      Indicator.close();
      //  console.log('33333333')
      // data是具体的定位信息
      // console.log(data);
      var path = [
        [116.169465, 39.93267],
        [116.16026, 39.924492],
        [116.186138, 39.879817],
        [116.150625, 39.710019],
        [116.183198, 39.70992],
        [116.22695, 39.777616],
        [116.421078, 39.810771],
        [116.442621, 39.799892],
        [116.463478, 39.790066],
        [116.588276, 39.809551],
        [116.536091, 39.808859],
        [116.573856, 39.839643],
        [116.70638, 39.91674],
        [116.657285, 39.934545],
        [116.600293, 39.93777],
        [116.540039, 39.937968],
        [116.514805, 39.982375],
        [116.499935, 40.01371],
        [116.54652, 40.030443],
        [116.687668, 40.129961],
        [116.539697, 40.080659],
        [116.50339, 40.058474],
        [116.4688, 40.052578]
      ];
      // console.log(this.position);
      let newStr = this.position.join(",");
      // console.log(newStr);
      let newArr = (newStr = newStr.split(","));
      let strLocation = newArr.join(' ')
      let user = JSON.parse(localStorage.getItem('isLogin'))
      user.studentLocation = strLocation
      localStorage.setItem('isLogin',JSON.stringify(user))

      // this.position = [data.position.lat,data.position.lng];
      // console.log(this.position);
      var isPointInRing = AMap.GeometryUtil.isPointInRing(this.position, path);
       if(isPointInRing){
        this.$router.push('/infotwo')
      }else{
          MessageBox('提示', '请到学校')
      }
    },
    onError(data) {
      this.getLngLatLocation();
    },

    // IP定位获取当前城市信息
    getLngLatLocation() {
      AMap.plugin("AMap.CitySearch", () => {
        var citySearch = new AMap.CitySearch();
        citySearch.getLocalCity(function(status, result) {
          if (status === "complete" && result.info === "OK") {
             Indicator.close();
               this.$router.push('/infotwo')
            // 查询成功，result即为当前所在城市信息
            console.log(result);
          }
        });
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.hme {
  width: 100vw;
  height: 100vh;
  background: #e4f4ea;
  header {
    background: #1296db;
    padding: 0.2rem;
    text-align: center;
    font-size: 16px;
    font-weight: 800;
  }
  .swiper-box {
    height: 1.9rem;
    .swiper-item {
      height: 1.9rem;
      img {
        width: 100%;
        height: 95%;
      }
    }
  }
  .nav-top {
    display: flex;
    font-size: 14px;
    padding: 0.1rem 0;
    border: 1px solid #ccc;
    background: #fff;
    .item {
      flex: 1;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: column;
      p {
        padding-top: 0.08rem;
        color: #101010;
      }
      &:nth-of-type(1) {
        .img-box {
          padding-top: 0.04rem;
          text-align: center;
          border-radius: 0.1rem;
          width: 0.4rem;
          height: 0.4rem;
          line-height: 0.4rem;
          background: #4bb4dd;
        }
      }
      &:nth-of-type(2) {
        .img-box {
          padding-top: 0.04rem;
          text-align: center;
          border-radius: 0.1rem;
          width: 0.4rem;
          height: 0.4rem;
          line-height: 0.4rem;
          background: #9e46e3;
        }
      }
      &:nth-of-type(3) {
        .img-box {
          padding-top: 0.04rem;
          text-align: center;
          border-radius: 0.1rem;
          width: 0.4rem;
          height: 0.4rem;
          line-height: 0.4rem;
          background: #eaad54;
        }
      }
      &:nth-of-type(4) {
        .img-box {
          padding-top: 0.04rem;
          text-align: center;
          border-radius: 0.1rem;
          width: 0.4rem;
          height: 0.4rem;
          line-height: 0.4rem;
          background: #99d980;
        }
      }
    }
  }
  .info {
    font-size: 16px;
    position: absolute;
    padding-bottom: 0.2rem;
    left: 0;
    right: 0;
    top: 2.7rem;
    bottom: 0.7rem;
    overflow: auto;
    .item {
      font-size: 16px;
      margin-top: 0.1rem;
      border: 1px solid #ccc;
      background: #fff;
      .title {
        padding: 0.1rem 0.25rem;
        position: relative;
        color: #101010;
        overflow: hidden;
        &::after {
          content: "";
          position: absolute;
          width: 1px;
          height: 20px;
          background: #bbb;
          top: 0.08rem;
          left: 0.15rem;
        }
        span:nth-of-type(1) {
          float: left;
        }
        span:nth-of-type(2) {
          float: right;
        }
        img {
          position: absolute;
          top: 0;
          right: 0;
        }
      }
      .content {
        padding: 0 0.1rem;
        font-size: 14px;
        text-indent: 2em;
      }
      .time {
        padding: 0.06rem 0.36rem;
        position: relative;
        font-size: 14px;
        img {
          position: absolute;
          top: 0.05rem;
          left: 0.13rem;
          width: 0.17rem;
          height: 0.17rem;
        }
      }
    }
  }
}
</style>
