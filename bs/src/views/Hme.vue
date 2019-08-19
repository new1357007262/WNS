<template>
  <div class="hme">
    <header>迎新首页</header>
    <Swipe :show-indicators="true" class="swiper-box">
      <SwipeItem class="swiper-item">
        <img
          src="https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/61414/28/1226/201567/5cf7b27cE43c69283/5912143df6a57957.jpg!cr_1125x549_0_72!q70.jpg.dpg"
          alt
        />
      </SwipeItem>
      <SwipeItem class="swiper-item">
        <img
          src="https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/54733/18/7779/84696/5d553c08E95d63d13/4b2ad59bfcfdaa0e.jpg!cr_1125x549_0_72!q70.jpg.dpg"
          alt
        />
      </SwipeItem>
    </Swipe>
    <nav class="nav-top">
      <router-link to="/info" tag="section" class="item" >
        <section class="img-box">
          <img src="../assets/images/info.png" alt />
        </section>
        <p>完善信息</p>
      </router-link>
      <router-link to="/price" tag="section" class="item">
        <section class="img-box">
          <img src="../assets/images/price.png" alt />
        </section>
        <p>贷款通知</p>
      </router-link>
      <router-link to="/course" tag="section" class="item">
        <section class="img-box">
          <img src="../assets/images/course.png" alt />
        </section>
        <p>我的课程</p>
      </router-link>
      <router-link to="/more" tag="section" class="item">
        <section class="img-box">
          <img src="../assets/images/more.png" alt />
        </section>
        <p>更多</p>
      </router-link>
    </nav>
    <section class="info" v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10">
      <section class="item">
        <section class="title">
          <span>入学须知</span>
          <span>查看</span>
          <img src="../assets/images/new-card.png" alt />
        </section>
        <section
          class="content"
        >2020新生入学须知新生入学须知新生入学须知新生入学须知新生入学须知2020新生入学须知新生入学须知新生入学须知新生入学须知新生入学须知</section>
        <section class="time">
          <img src="../assets/images/time.png" alt />
          <span>2019-9-9 09:09:09</span>
        </section>
      </section>
      <section class="item">
        <section class="title">
          <span>入学须知</span>
          <span>查看</span>
          <img src="../assets/images/new-card.png" alt />
        </section>
        <section
          class="content"
        >2020新生入学须知新生入学须知新生入学须知新生入学须知新生入学须知2020新生入学须知新生入学须知新生入学须知新生入学须知新生入学须知</section>
        <section class="time">
          <img src="../assets/images/time.png" alt />
          <span>2019-9-9 09:09:09</span>
        </section>
      </section>
      <section class="item">
        <section class="title">
          <span>入学须知</span>
          <span>查看</span>
          <img src="../assets/images/new-card.png" alt />
        </section>
        <section
          class="content"
        >2020新生入学须知新生入学须知新生入学须知新生入学须知新生入学须知2020新生入学须知新生入学须知新生入学须知新生入学须知新生入学须知</section>
        <section class="time">
          <img src="../assets/images/time.png" alt />
          <span>2019-9-9 09:09:09</span>
        </section>
      </section>
      <section class="item">
        <section class="title">
          <span>入学须知</span>
          <span>查看</span>
          <img src="../assets/images/new-card.png" alt />
        </section>
        <section
          class="content"
        >2020新生入学须知新生入学须知新生入学须知新生入学须知新生入学须知2020新生入学须知新生入学须知新生入学须知新生入学须知新生入学须知</section>
        <section class="time">
          <img src="../assets/images/time.png" alt />
          <span>2019-9-9 09:09:09</span>
        </section>
      </section>
    </section>
  </div>
</template>
<script>
import { Swipe, SwipeItem } from "mint-ui";
export default {
  name:'Hme',
  data() {
    return {
      loading: false
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
    }
  }
}
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
    padding-bottom: .2rem;
    left: 0;
    right: 0;
    top: 3.3rem;
    bottom: .7rem;
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
