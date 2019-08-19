<template>
  <div class="profile">
    <header>我的信息</header>
    <section class="card">
      <section class="name">刘</section>
      <section class="desc">
        <section class="my-name">
          <span>刘少雄</span>
          <span>1614103009</span>
        </section>
        <p>信息科学与技术学院</p>
        <p>物联网工程</p>
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
  name: "Profile"
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
    background: #fff;
    .name {
      width: 0.85rem;
      height: 0.85rem;
      line-height: 0.85rem;
      text-align: center;
      border-radius: 50%;
      background: #7fd90c;
    }
    .desc {
      padding-left: 0.1rem;
      .my-name {
        padding-bottom: 0.1rem;
        span:nth-of-type(1) {
          font-size: 28px;
          color: #101010;
          font-weight: 800;
          padding-right: 0.1rem;
        }
        span:nth-of-type(2) {
          font-size: 14px;
          color: #101010;
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
