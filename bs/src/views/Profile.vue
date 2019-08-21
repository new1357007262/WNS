<template>
  <div class="profile">
    <section class="card" v-if="user">
      <section class="name">
        <img src="../../public/images/avatar.png" alt="">
      </section>
      <section class="desc" >
        <section class="my-name">
          <span>{{ user.realname }}</span>
          <span>{{ user.username }}</span>
        </section>
        <p>{{ user.major.collage.name }}</p>
        <p>{{ user.major.name }}</p>
      </section>
    </section>
    <section class="others">
      <ul>
        <router-link to="/info" tag="li">
          <span>个人信息</span>
          <span>></span>
        </router-link>
        <router-link to="/course" tag="li">
          <span>当前专业所开发的课程</span>
          <span>></span>
        </router-link>
      </ul>
    </section>
  </div>
</template>
<script>
export default {
  name: "Profile",
  data(){
    return {
      user:null
    }
  },
  mounted(){
    this.user = JSON.parse(localStorage.getItem('isLogin'))
  }
};
</script>
<style lang="scss" scoped>
.profile {
  header {
    background: #1296db;
    padding: 0.2rem;
    text-align: center;
    font-size: 16px;
    font-weight: 800;
  }
  .card {
    font-size: 16px;
    display: flex;
    padding: 0.2rem;
    background: url('../../public/images/card-bg.jpg') no-repeat;
    background-size:cover;
    color: #fff;
    .name {
      width: 0.85rem;
      height: 0.85rem;
      line-height: 0.85rem;
      text-align: center;
      border-radius: 50%;
      background: #7fd90c;
      img{
        width:100%;
        height: 100%;
      }
    }
    .desc {
      padding-left: 0.1rem;

      .my-name {
        padding-bottom: 0.1rem;
        color: #fff;
        span:nth-of-type(1) {
          font-size: 28px;
          font-weight: 800;
          padding-right: 0.1rem;
        }
        span:nth-of-type(2) {
          font-size: 14px;
        }
      }
      p {
        padding: 0.07rem;
      }
    }
  }
  .others {
    ul {
      margin-top: .2rem;
      font-size: 16px;
      li {
        overflow: hidden;
        background: #fff;
        padding: 0.2rem 0.16rem;
        border-top: 1px solid #ccc;
        &:last-of-type{
          border-bottom: 1px solid #ccc;
        }
        span:nth-of-type(1) {
          float: left;
        }
        span:nth-of-type(2) {
          float: right;
        }

      }
    }
  }
}
</style>
