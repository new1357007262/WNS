<template>
  <div class="course">
    <header>
      我的课程
    <img class="goBack" @click="$router.go(-1)" src="../../public/images/back.png" alt />
    </header>
    <section class="course">
      <section class="item">
        <span>物联网导论</span>
        <span>主要物联网工程专业入门学科</span>
      </section>
      <section class="item">
        <span>物联网导论</span>
        <span>主要物联网工程专业入门学科</span>
      </section>
      <section class="item">
        <span>物联网导论</span>
        <span>主要物联网工程专业入门学科</span>
      </section>
      <section class="item">
        <span>物联网导论</span>
        <span>主要物联网工程专业入门学科</span>
      </section>
      <section class="item">
        <span>物联网导论</span>
        <span>主要物联网工程专业入门学科</span>
      </section>
    </section>
  </div>
</template>
<script>
export default {
  name: "Cource"
};
</script>
<style lang="scss" scoped>
.course {
  header {
    background: #1296db;
    padding: 0.2rem;
    text-align: center;
    font-size: 16px;
    font-weight: 800;
    .goBack {
      position: absolute;
      top: 0.05rem;
      left: 0px;
      width: 0.5rem;
      height: 0.5rem;
    }
  }
  .course {
    background: #e4f4ea;
    font-size: 14px;
    height: 100vh;
    .item {
      padding: 0.2rem 0.18rem;
      margin-bottom: .06rem;
      justify-content: space-between;
      align-items: center;
      display: flex;
      background: #fff;
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      span:nth-of-type(2) {
        width: 1rem;
      }
    }
  }
}
</style>
