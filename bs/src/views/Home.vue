<template>
  <div class="home">
    <router-view></router-view>
    <section class="nav-f">
      <router-link
        to="/home/hme"
        class="item"
        @click.native="toggleActiveHandle($event,'isActive')"
      >
        <img v-if="isActive" src="../assets/images/route1-o.png" alt />
        <img v-else src="../assets/images/route1.png" alt />
        <p>首页</p>
      </router-link>
      <router-link
        to="/home/scholl"
        class="item"
        @click.native="toggleActiveHandle($event,'isActive2')"
      >
        <img v-if="isActive2" src="../assets/images/route2-o.png" alt />
        <img v-else src="../assets/images/route2.png" alt />
        <p>校园导航</p>
      </router-link>
      <router-link
        to="/home/profile"
        class="item"
        @click.native="toggleActiveHandle($event,'isActive3')"
      >
        <img v-if="isActive3" src="../assets/images/route3-o.png" alt />
        <img v-else src="../assets/images/route3.png" alt />
        <p>我的</p>
      </router-link>
    </section>
  </div>
</template>
<script>
import { Swipe, SwipeItem } from "mint-ui";
export default {
  name: "Home",
  data() {
    return {
      loading: false,
      isActive: false,
      isActive2: true,
      isActive3: true
    };
  },
  components: {
    Swipe,
    SwipeItem
  },
  methods: {
    toggleActiveHandle(e, msg) {
      if ('isActive' === msg) {
        this.isActive = false;
        this.isActive2 = true;
        this.isActive3 = true;
      } else if ('isActive2' === msg) {
        this.isActive = true;
        this.isActive2 = false;
        this.isActive3 = true;
      } else if ('isActive3' === msg) {
        this.isActive = true;
        this.isActive2 = true;
        this.isActive3 = false;
      }
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
      img {
      }
      p {
      }
    }
    .router-link-active {
      color: #1296db;
    }
  }
}
</style>
