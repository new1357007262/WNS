<template>
  <div class="userEdit">
    <header>
      信息修改
      <img class="goBack" @click="$router.go(-1)" src="../../public/images/back.png" alt />
    </header>
    <section class="infoEdit">
      <section class="item">
        <label for="studentNumber">学号</label>
        <input type="text" id="studentNumber" v-model="studentNumber" readonly />
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
        <label for="telephone">电话</label>
        <input type="text" id="telephone" v-model="telephone" placeholder="请输入您的电话" />
      </section>
      <section class="item">
        <label for="address">地址</label>
        <input type="text" id="address" v-model="address" placeholder="请输入您的地址" />
      </section>
      <Button type="default" size="large" @click="updateInfo">完成</Button>
    </section>
  </div>
</template>
<script>
import { Button, MessageBox } from "mint-ui";
import qs from "qs";
export default {
  name: "UserEdit",
  data() {
    return {
      user: null,
      gender: "",
      studentNumber: "",
      address: "",
      telephone: "",
      id: ""
    };
  },
  components: { Button },
  mounted() {
    let { gender, studentNumber, address, telephone, user } = this;
    this.$axios
      .get("http://203.195.219.213:8083/stuBf/findByUserid", {
        params: {
          userId: JSON.parse(localStorage.getItem("isLogin")).id
        }
      })
      .then(result => {
        user = result.data.data;
        this.gender = user.gender;
        this.studentNumber = user.studentNumber;
        this.address = user.address;
        this.telephone = user.telephone;
        this.id = user.id;
      });
  },
  methods: {
    updateInfo() {
      let { gender, studentNumber, address, telephone, id, user } = this;
      let params = {
        gender: gender,
        address: address,
        telephone: telephone,
        id: id
      };
      if (gender != "" && address != "" && telephone != "" && id != "") {
        this.$axios
          .post(
            "http://203.195.219.213:8083/stuBf/updateInfo",
            qs.stringify(params)
          )
          .then(res => {
            MessageBox.alert("操作成功");
            this.$router.push("/home");
          });
      } else {
        MessageBox.alert("数据存在空值，请重新输入");
        this.$router.push("/Setting");
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.userEdit {
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
  .infoEdit {
    font-size: 14px;
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
    .gender {
      background-color: #fff;
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
