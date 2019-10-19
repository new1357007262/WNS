<template>
  <div class="home">
    <img class="title-img1" src="../../public/images/bg-login-title.png" alt />
    <img class="title-img2" src="../../public/images/bg-login-title2.png" alt />
    <div class="title">智能迎新系统</div>
    <section class="frm">
      <section class="username-box">
        <label for="username" class="uname">用户名：</label>
        <input type="text" id="username" v-model="username" class="username" placeholder="请输入用户名" />
      </section>
      <section class="password-box">
        <label for="password" class="pwd">密&nbsp;&nbsp;&nbsp;&nbsp;码：</label>
        <input
          type="password"
          id="password"
          class="password"
          v-model="password"
          placeholder="请输入密码"
        />
      </section>
      <input type="button" value="登录" @click="login" class="btn-login" />
    </section>
    <section class="tips">
      <h2>温馨提示</h2>
      <ol type="1">
        <li>首次登录系统用户名为学号，密码为身份证后六位。</li>
        <li>建议用户第一次登录完后，尽快修改登录密码</li>
        <li>
          登录失败或用户不存在请及时联系学校。
          <br />
          <br />学校热线：0472-6193093
        </li>
      </ol>
    </section>
  </div>
</template>
<script>
import { MessageBox } from "mint-ui";
export default {
  name: "Index",
  data() {
    return {
      username: "",
      password: "",
      userinfo: null
    };
  },
  methods: {
    login() {
      const { username, password } = this;
      this.$axios
        .get("http://203.195.219.213:8083/stuUser/Login", {
          params: {
            username,
            password
          }
        })
        .then(res => {
          if (res.data.data !== null) {
            this.userinfo = res.data.data;

            localStorage.setItem("isLogin", JSON.stringify(this.userinfo));
            this.$router.push("/home");
          } else {
            MessageBox("提示", "用户名或者密码错误");
          }
        });
    }
  }
};
</script>
<style lang="scss" scoped>
// 背景图自适应
.home:before {
  content: " ";
  position: fixed;
  z-index: -1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: url("../../public/images/bg4.jpg") center 0 no-repeat;
  background-size: 100% ;
}
.home {
  width: 100vw;
  height: 100vh;
  position: relative;
  .title-img1 {
    margin-top: 0.25rem;
    width: 100%;
    height: 1.07rem;
  }
  .title-img2 {
    position: absolute;
    top: 1.2rem;
    right: 0.6rem;
    width: 1.07rem;
    height: 0.34rem;
  }
  .title {

    // 字体没加上去
  
    @font-face{
      font-family: mFont;
      src: url("../../public/images/loukong.ttf");
    }
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 23px;
    color: #FEA884;
    text-align: center;
    font-weight: bold;
    margin-top: 0.27rem;
  }
  .frm {
    border-radius: 0.1rem;
    text-align: center;
    padding: 0.2rem;
    margin: 0.2rem auto;
    width: 2.6rem;
    background: rgba(255, 255, 255, 0.1);
    font-size: 14px;
    .username-box {
      padding: 0.16rem 0px;
      border-bottom: 1px solid #b9b5b5;
      .uname {
        width: 40%;
        font-weight: 800;
      }
      .username {
        width: 60%;
        background: rgba(187, 187, 187, 0);
      }
    }
    .password-box {
      padding: 0.16rem 0px;
      border-bottom: 1px solid #b9b5b5;
      .pwd {
        width: 40%;
        font-weight: 800;
      }
      .password {
        width: 60%;
        background: rgba(187, 187, 187, 0);
      }
    }
    .btn-login {
      background: #39eec1;
      padding: 0.06rem 0.4rem;
      border-radius: 10px;
      margin-top: 20px;
      color: #fff;
      opacity: 0.7;
    }
  }
  .tips {
    border-radius: 0.2rem;
    width: 3rem;
    margin: 0.2rem auto;
    font-size: 14px;
    padding: 0.1rem 0.2rem;
    color: #101010;
    background: rgba(242, 241, 241, 0.2);
    h2 {
      color: #e51c23;
      font-size: 0.2rem;
      padding: 0.05rem;
    }
    ol {
      padding-left: 0.14rem;
      list-style: decimal;
      li {
        padding: 0.1rem 0;
        list-style: decimal;
        color: #101010;
        font-weight: 800;
      }
    }
  }
}
</style>
