<template>
  <div class="home">
    <img class="title-img1" src="../assets/images/bg-login-title.png" alt />
    <img class="title-img2" src="../assets/images/bg-login-title2.png" alt />
    <h1 class="title">智能迎新系统</h1>
    <section class="frm">
      <section class="username-box">
        <label for="username" class="uname">用户名：</label>
        <input type="text" id="username" class="username" placeholder="请输入用户名"/>
      </section>
      <section class="password-box">
        <label for="password" class="pwd">密&nbsp;码：</label>
        <input type="password" id="password" class="password" placeholder="请输入密码" />
      </section>
      <input type="button" value="登录" class="btn-login" @click="()=>{this.$router.push('/home')}" />
    </section>
    <section class="tips">
      <h2>温馨提示</h2>
      <ol type="1">
        <li>
          首次登录系统用户名为学号，
          密码为身份证后六位。
        </li>
        <li>
          建议用户第一次登录完后，尽
          快修改登录密码
        </li>
        <li>
          登录失败或用户不存在请及时
          联系学校。<br><br>
          学校热线：0472-6193093
        </li>
      </ol>
    </section>
  </div>
</template>
<script>
export default {
  name: 'Index'
}
</script>
<style lang="scss" scoped>
.home {
   width: 100vw;
  height: 100vh;
  background: url('../assets/images/bg-login.jpg') no-repeat;
  background-size: contain;
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
    font-size: 23px;
    color: #3fbfdb;
    text-align: center;
    margin-top: 0.27rem;
  }
  .frm {
    border-radius:.1rem;
    text-align: center;
    padding: .2rem;
    margin: .2rem auto;
    width: 2.6rem;
    background: rgba(255, 255, 255, 0.1);
    font-size: 14px;
    .username-box {
      padding: .16rem 0px;
      border-bottom: 1px solid #b9b5b5;
      .uname {
        font-weight: 800;
      }
      .username {
        background: rgba(187, 187, 187, 0);
      }
    }
    .password-box {
      padding: .16rem 0px;
      border-bottom: 1px solid #b9b5b5;
      .pwd {
        font-weight: 800;
      }
      .password {
        background: rgba(187, 187, 187, 0);
      }
    }
    .btn-login{
      background: #39EEC1;
      padding: .06rem .4rem;
      border-radius: 10px;
      margin-top: 20px;
      color: #fff;
      opacity: .7;
    }
  }
  .tips {
    border-radius: .2rem;
    width: 3rem;
    margin:.2rem auto;
    font-size: 14px;
    padding: .1rem .2rem;
    color: #101010;
    background: rgba(242,241,241,.2);
    h2{
      color: #E51C23;
      font-size: .2rem;
      padding: .05rem;
    }
    ol{
      padding-left: .14rem;
      list-style: decimal;
      li{
        padding: .1rem 0;
        list-style: decimal;
        color: #101010;
        font-weight: 800;
      }
    }
  }
}
</style>
