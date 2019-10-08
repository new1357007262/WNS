<template>
  <div class="price">
    <header>
      奖贷公告
      <img class="goBack" @click="$router.go(-1)" src="../../public/images/back.png" alt />
    </header>
    <section class="box" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
      <section class="item" v-for="(item,index) in list" :key="index">
        <section class="title">{{item.title}}</section>
        <section class="decs">{{item.decs}}</section>
        <section class="time">
          <img src="../../public/images/time.png" alt />
          <span>{{item.time}}</span>
        </section>
      </section>
    </section>
  </div>
</template>
<script>
import qs from "qs";

export default {
  name: "Price",
  loading: false,
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this.$axios
      .get("http://203.195.219.213:8083/info/FindAll?title=" + "贷")
      .then(result => {
        this.list = result.data.data;
      });
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.price {
  width: 100vw;
  height: 100vh;
  background: #e4f4ea;
  overflow: hidden;
  header {
    background: #1296db;
    padding: 0.2rem;
    text-align: center;
    font-size: 16px;
    font-weight: 800;
    .goBack {
      position: absolute;
      top: 0.08rem;
      left: 0px;
      width: 0.4rem;
      height: 0.4rem;
    }
  }
  .box {
    padding: 10px;
    font-size: 16px;
    height: calc(100vh - 70px);
    overflow-y: auto;
    .item {
      border-bottom: 1px solid #d1cece;
      padding-bottom: 10px;
      padding-top: 10px;
      .title {
        font-size: 18px;
        color: #000;
        font-weight: 800;
        // text-align: center;
      }
      .decs {
        padding: 7px 0;
        color: #524f4f;
        text-indent: 2em;
      }
      .time {
        position: relative;
        img {
          position: absolute;
          top: 5px;
          width: 20px;
          height: 20px;
        }
        span {
          // text-align: left;
          color: #8d8888;
          padding-left: 23px;
          line-height: 30px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
