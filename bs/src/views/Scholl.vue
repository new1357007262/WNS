<template>
  <div class="scholl">
     <header>包头师范学院校园设施</header>
    <IndexList class="index-list-box">
      <IndexSection index="A">
        <Cell title="Aaron"></Cell>
        <Cell title="Alden"></Cell>
        <Cell title="Austin"></Cell>
      </IndexSection>
      <IndexSection index="B">
        <Cell title="Baldwin"></Cell>
        <Cell title="Braden"></Cell>
      </IndexSection>
      <IndexSection index="C">
        <Cell title="Aaron"></Cell>
        <Cell title="Alden"></Cell>
        <Cell title="Austin"></Cell>
      </IndexSection>
      <IndexSection index="D">
        <Cell title="Baldwin"></Cell>
        <Cell title="Braden"></Cell>
      </IndexSection>
      <IndexSection index="Z">
        <Cell title="Zack"></Cell>
        <Cell title="Zane"></Cell>
      </IndexSection>
    </IndexList>
  </div>
</template>
<script>
import { IndexList, IndexSection, Cell } from "mint-ui";
export default {
  name: "Scholl",
  components: {
    IndexList,
    IndexSection,
    Cell
  }
};
</script>
<style lang="scss" scoped>
.scholl {
  header{
     background: #1296db;
    padding: 0.2rem;
    text-align: center;
    font-size: 16px;
    font-weight: 800;
  }
  height: 100vh;
  font-size: 16px;
  .index-list-box {
    padding-bottom: 0.7rem;
  }
}
</style>
