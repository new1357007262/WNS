<template>
  <div class="info">
    <header>
      个人信息
      <img class="goBack" @click="$router.go(-1)" src="../../public/images/back.png" alt />
    </header>
    <section class="info-box" v-if="user">
      <section class="info-item">
        <span>姓名</span>
        <span>{{ info.name }}</span>
      </section>
      <section class="info-item">
        <span>性别</span>
        <span>{{ info.gender }}</span>
      </section>
      <section class="info-item">
        <span>宿舍门牌号</span>
        <span>{{ info.houseNumber }}</span>
      </section>
      <section class="info-item">
        <span>家庭住址</span>
        <span>{{ info.address }}</span>
      </section>
      <section class="info-item">
        <span>助理班主任</span>
        <span>{{ info.assistant }}</span>
      </section>
      <section class="info-item">
        <span>助理班主任联系电话</span>
        <span>{{ info.phone }}</span>
      </section>
    </section>
    <router-link to="/setting" class="my-setting" tag="section">
      个人设置
      <img src="../../public/images/xiayibu.png" alt />
    </router-link>
    <router-link to="/home" tag="section" class="logout">
      <button @click="logout">退出</button>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "Info",
  data() {
    return {
      user: null,
      studentStatus: null,
      info: {
        name: "",
        gender: "",
        houseNumber: "",
        address: "",
        assistant: "",
        phone: ""
      }
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("isLogin");
    }
  },
  mounted() {
    this.studentStatus = JSON.parse(
      localStorage.getItem("isLogin")
    ).studentStatus;
    if (this.studentStatus == 1) {
      this.$axios
        .get("http://203.195.219.213:8083/stuBf/findByUserid", {
          params: {
            userId: JSON.parse(localStorage.getItem("isLogin")).id
          }
        })
        .then(result => {
          this.user = result.data.data;
        });
    } else {
      this.user = JSON.parse(localStorage.getItem("isLogin"));
    }
  },
  updated() {
    let { info, user, studentStatus } = this;
    if (studentStatus == 0) {
      info.name = user.realname;
      info.gender = "--";
      info.houseNumber = user.houseNumber;
      info.address = "--";
      info.assistant = user.major.assistant;
      info.phone = user.major.phone;
    } else {
      info.name = user.name;
      info.gender = user.gender;
      info.houseNumber = user.stuUser.houseNumber;
      info.address = user.address;
      info.assistant = user.stuUser.major.assistant;
      info.phone = user.stuUser.major.phone
    }
  }
};
</script>
<style lang="scss" scoped>
.info {
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
  .info-box {
    font-size: 14px;
    .info-item {
      padding: 0.17rem;
      background: #fff;
      display: flex;
      border-bottom: 1px solid #ccc;
      span {
        flex: 1;
      }
    }
  }
  .my-setting {
    margin-top: 0.2rem;
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
  .logout {
    text-align: center;
    button {
      border: none;
      outline: none;
      color: #fff;
      background: #1296db;
      padding: 0.1rem 0.3rem;
      border-radius: 0.1rem;
    }
  }
}
</style>
