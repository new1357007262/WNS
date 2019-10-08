<template>
  <div class="pwdEdit">
    <header>
      密码修改
      <img class="goBack" @click="$router.go(-1)" src="../../public/images/back.png" alt />
    </header>
    <section class="pwdform">
      <!-- <section class="item">
        <label for="username">学号</label>
        <input type="text" id="username" v-model="username" placeholder="请输入您的学号" /> 
      </section>-->
      <section class="item">
        <label for="realname">真实姓名</label>
        <input type="text" id="realname" v-model="realname" placeholder="请输入您的真实姓名" />
      </section>
      <section class="item">
        <label for="password">旧密码</label>
        <input type="password" id="password" v-model="password" placeholder="请输入您的旧密码" />
      </section>
      <section class="item">
        <label for="newpwd">新密码</label>
        <input type="password" id="newpwd" v-model="newpwd" placeholder="请输入您的新密码" />
      </section>
      <Button type="default" size="large" @click="updateInfo">完成</Button>
    </section>
  </div>
</template>
<script>
import { Button, MessageBox } from "mint-ui";
import qs from "qs";

export default {
  name: "PwdEdit",
  data() {
    return {
      username: "",
      realname: "",
      password: "",
      newpwd: ""
    };
  },
  mounted() {
    this.username = JSON.parse(localStorage.getItem("isLogin")).username;
  },
  components: { Button },
  methods: {
    updateInfo() {
      let { username, password, realname, newpwd } = this;
      let parse = {
        username,
        password,
        realname
      };
      this.$axios
        .get("http://203.195.219.213:8083/stuUser/findByinfo", {
          params: { username, password, realname }
        })
        .then(res => {
          if (res.data.status === 200) {
            this.$axios
              .post(
                "http://203.195.219.213:8083/stuUser/updatePassword",
                qs.stringify({ id: res.data.data.id, password: newpwd })
              )
              .then(res => {
                MessageBox.alert("密码修改成功，请重新登录").then(action => {
                  this.logout();
                  this.$router.push("/home");
                });
              });
          } else {
            MessageBox.alert(res.data.message);
          }
        });
    },
    logout() {
      localStorage.removeItem("isLogin");
    }
  }
};
</script>
<style lang="scss" scoped>
.pwdEdit {
  height: 100vh;
  background: #e4f4ea;
  header {
    background: #1296db;
    padding: 0.2rem;
    text-align: center;
    font-size: 16px;
    font-weight: 800;
    .goBack {
      position: absolute;
      top: 0.08rem;
      width: 0.4rem;
      height: 0.4rem;
      left: 0.03rem;
      font-size: 40px;
    }
  }
  .pwdform {
    padding: 0.16rem 0.1rem;
    .mint-button--large {
      margin-top: 0.3rem;
    }
    .item {
      background-color: #fff;
      padding: 0.16rem 0.1rem;
      align-items: center;
      display: flex;
      // flex-direction: column;
      border-bottom: 1px solid #eee;
      label {
        width: 30%;
        // text-align: center;
        font-size: 14px;
        // border-right:1px solid #eee;
      }
      input {
        width: 70%;
        // background-color:  #eee;
        // border-bottom: 1px solid #eee;
      }
    }
  }
}
</style>
