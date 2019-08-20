<template>
  <div class="home">
    <router-view></router-view>
    <section class="nav-f">
      <router-link
        to="/home/hme"
        class="item"
        @click.native="toggleActiveHandle(1)"
      >
        <img v-if="isActive==1" src="../../public/images/route1.png" alt />
        <img v-else   src="../../public/images/route1-o.png" alt />
        <p>首页</p>
      </router-link>
      <router-link
        to="/home/scholl"
        class="item"
        @click.native="toggleActiveHandle(2)"
      >
        <img v-if="isActive==2" src="../../public/images/route2.png" alt />
        <img v-else  src="../../public/images/route2-o.png" alt />
        <p>校园导航</p>
      </router-link>
      <router-link
        to="/home/profile"
        class="item"
        @click.native="toggleActiveHandle(3)"
      >
        <img v-if="isActive==3"  src="../../public/images/route3.png" alt />
        <img v-else  src="../../public/images/route3-o.png" alt />
        <p>我的</p>
      </router-link>
    </section>
  </div>
</template>
<script>
import { Swipe, SwipeItem } from "mint-ui";
export default {
  name: "Home",
  props:['isActiveApp'],
  data() {
    return {
      loading: false,
      isActive: 1,
    };
  },
  created(){
    this.isActive = this.isActiveApp
  },
  // watch:{
  //    '$route'(to, from) {
  //      this.isActive = to.meta.isActive
  //      console.log(to.meta)
  //      console.log(from.meta)
  //   }
  // },
  components: {
    Swipe,
    SwipeItem
  },
  methods: {
    toggleActiveHandle(msg) {
      this.isActive = msg
    },
    loadMore() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 2500);
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  width: 100vw;
  height: 100vh;
  background: #e4f4ea;
  .nav-f {
    display: flex;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    font-size: 14px;
    padding: 0.1rem 0;
    border-top: 1px solid #ccc;
    background: #f5f5f5;
    .item {
      flex: 1;
      text-align: center;
    }
    .router-link-active {
      color: #1296db;
    }
  }
}
</style>
