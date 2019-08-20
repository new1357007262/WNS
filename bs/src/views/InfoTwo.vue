<template>
  <div class="infotwo">
    <header>
      完善信息
      <img class="goBack" @click="$router.go(-1)" src="../../public/images/back.png" alt="">
    </header>
    <section class="frm">
      <section class="username item">
        <label for="uname">姓名</label>
        <input type="text" id="uname" v-model="username" readonly />
      </section>
      <section class="item">
        <label for="unum">学号</label>
        <input type="text" id="unum" v-model="usernum" readonly />
      </section>
      <section class="gender">
        <label for="gender" class="gender-name">性别</label>
        <section class="g">
          男：
          <input type="radio" v-model="gender" value="男" />
          女：
          <input type="radio" v-model="gender" value="女" />
        </section>
      </section>
      <section class="item">
        <label for="payment">学费</label>
        <input type="text" id="payment" v-model="payment" readonly />
      </section>
      <section class="item">
        <label for="phone">手机号码</label>
        <input type="text" id="phone" v-model="userphone" placeholder="请输入手机号码" />
      </section>
      <section class="item">
        <label for="address">地址</label>
        <input type="text" id="address" v-model="useraddress" placeholder="请输入地址" />
      </section>
      <section class="item">
        <label for="majorname">专业名称</label>
        <input type="text" id="majorname" v-model="majorname" />
      </section>
      <input type="hidden" v-model="userid">
    </section>
  </div>
</template>
<script>
export default {
  name: "InfoTwo",
  data() {
    return {
      gender: "男",
      username: "刘少雄",
      usernum: "1630229",
      userphone: "",
      useraddress: "",
      payment: 12222,
      majorname: "物联网工程",
      userid:''
    };
  },
  components: {}
};
</script>
<style lang="scss" scoped>
.infotwo {
  header {
    background: #1296db;
    padding: 0.2rem;
    text-align: center;
    font-size: 16px;
    font-weight: 800;
    .goBack {
      position: absolute;
      top: .05rem;
      left: 0px;
      width: .5rem;
      height: .5rem;
    }
  }
  .frm {
    font-size: 18px;
    padding: 0.1rem 0.2rem;
    .item {
      padding: 0.16rem 0.1rem;
      align-items: center;
      display: flex;
      border-bottom: 1px solid #eee;
      label {
        width: 30%;
      }
      input {
        width: 70%;
        font-size: 18px;
      }
    }
    .gender {
      padding: 0.16rem 0.1rem;
      display: flex;
      border-bottom: 1px solid #eee;
      .gender-name {
        width: 30%;
      }
      .g {
        width: 70%;
      }
    }
  }
}
</style>
