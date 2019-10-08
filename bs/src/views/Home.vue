<template>
  <div class="home">
    <router-view @showNav="showNav"></router-view>
    <transition name="slide">
      <section class="nav-f" v-if="ee">
        <router-link to="/home/hme" class="item" @click.native="toggleActiveHandle(1)">
          <img v-if="isActive==1" src="../../public/images/route1.png" alt />
          <img v-else src="../../public/images/route1-o.png" alt />
          <p>首页</p>
        </router-link>
        <router-link to="/home/scholl" class="item" @click.native="toggleActiveHandle(2)">
          <img v-if="isActive==2" src="../../public/images/route2.png" alt />
          <img v-else src="../../public/images/route2-o.png" alt />
          <p>校园导航</p>
        </router-link>
        <router-link to="/home/profile" class="item" @click.native="toggleActiveHandle(3)">
          <img v-if="isActive==3" src="../../public/images/route3.png" alt />
          <img v-else src="../../public/images/route3-o.png" alt />
          <p>我的</p>
        </router-link>
      </section>
    </transition>
  </div>
</template>
<script>
import { Swipe, SwipeItem } from "mint-ui";
export default {
  name: "Home",
  props: ["isActiveApp"],
  data() {
    return {
      loading: false,
      isActive: 1,
      ee: true
    };
  },
  created() {
    this.isActive = this.isActiveApp;
  },
  components: {
    Swipe,
    SwipeItem
  },
  methods: {
    showNav(e) {
      this.ee = e;
    },
    toggleActiveHandle(msg) {
      this.isActive = msg;
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
.slide-enter-active,
.slide-leave-active {
  transition: all 1s;
  transform: translateY(0px);
}
.slide-enter, .slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateY(70px);
}
.home {
  width: 100vw;
  height: 100vh;
  background: #e4f4ea;
  .nav-f {
    height: 7vh;
    display: flex;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    font-size: 14px;
    padding: 0.05rem 0;
    border-top: 1px solid #ccc;
    background: #f5f5f5;
    .item {
      flex: 1;
      text-align: center;
      img {
        width: 0.2rem;
        height: 0.2rem;
      }
    }
    .router-link-active {
      color: #1296db;
    }
  }
}
</style>
