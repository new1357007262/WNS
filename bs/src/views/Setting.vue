<template >
  <div class="setting">
    <header>
      完善信息
      <span class="goBack" @click="$router.go(-1)"><</span>
    </header>
    <router-link to="/setting" class="my-setting" tag="section">
      个人信息修改
      <img src="../assets/images/xiayibu.png" alt />
    </router-link>
      <router-link to="/setting" class="my-setting" tag="section">
      密码修改
      <img src="../assets/images/xiayibu.png" alt />
    </router-link>
  </div>
</template>
<script>
export default {
  name: "Setting"
};
</script>
<style lang="scss" scoped>
.setting {
  font-size: 14px;
  height: 100vh;
  background: #E4F4EA;
  header {
    background: #1296db;
    padding: 0.2rem;
    text-align: center;
    font-size: 16px;
    font-weight: 800;
    position: relative;
    .goBack {
      position: absolute;
      top: 0.05rem;
      left: 0.13rem;
      font-size: 40px;
    }
  }
  .my-setting {
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    font-size: 16px;
    text-align: left;
    padding: 0.16rem 0.2rem;
    position: relative;
    background: #fff;
    img {
      position: absolute;
      top: 0.1rem;
      right: 0.1rem;
    }
  }
}
</style>
