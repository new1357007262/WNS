<template >
  <div class="setting">
    <header>
      个人设置
      <img class="goBack" @click="$router.go(-1)" src="../../public/images/back.png" alt />
    </header>
    <section @click="funs" class="my-setting">
      个人信息修改
      <img src="../../public/images/xiayibu.png" alt />
    </section>
    <section @click="()=>{this.$router.push('/pwdedit')}" class="my-setting">
      密码修改
      <img src="../../public/images/xiayibu.png" alt />
    </section>
  </div>
</template>
<script>
import { MessageBox } from "mint-ui";
export default {
  name: "Setting",
  mounted() {},
  methods: {
    funs() {
      if (JSON.parse(localStorage.getItem("isLogin")).studentStatus == 0) {
        MessageBox.alert("您未报到，请先完善个人信息");
      } else {
        this.$router.push("/useredit");
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.setting {
  font-size: 14px;
  height: 100vh;
  background: #e4f4ea;
  header {
    background: #1296db;
    padding: 0.2rem;
    text-align: center;
    font-size: 16px;
    font-weight: 800;
    position: relative;
    .goBack {
      position: absolute;
      top: 0.08rem;
      left: 0px;
      width: 0.4rem;
      height: 0.4rem;
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
