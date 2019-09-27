<template>
  <div id="app">
    <router-view :isActiveApp="isActiveApp"></router-view>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      isActiveApp: 1
    };
  },
  watch: {
    $route(to, from) {
      this.isActiveApp = to.meta.isActive;
    }
  }
};
</script>
<style lang="scss">
#app {
  width: 100vw;
  height: 100vh;
}

</style>
