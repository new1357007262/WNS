<template>
  <div class="course">
    <header>
      我的课程
      <img class="goBack" @click="$router.go(-1)" src="../../public/images/back.png" alt />
    </header>
    <section class="course" v-if="courseData.length>0">
      <section class="item" v-for="(item) in courseData" :key="item.id">
        <span>{{ item.name }}</span>
        <span>{{ item.description }}</span>
      </section>
    </section>
  </div>
</template>
<script>
export default {
  name: "Cource",
  data() {
    return {
      courseData: []
    };
  },
  mounted() {
    this.$axios
      .get("http://203.195.219.213:8083/course/findAllWithMajor")
      .then(result => {
        this.courseData = result.data.data;
      });
  }
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
      top: 0.08rem;
      left: 0px;
      width: 0.4rem;
      height: 0.4rem;
    }
  }
  .course {
    background: #e4f4ea;
    font-size: 14px;
    height: 100vh;
    .item {
      padding: 0.2rem 0.18rem;
      margin-bottom: 0.06rem;
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
