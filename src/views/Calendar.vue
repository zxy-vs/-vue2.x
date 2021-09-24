<template>
  <div>
    <div>
      <el-calendar v-model="value"> </el-calendar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: new Date(),
    };
  },
};
</script>

<style lang="less" scoped>
div {
  width: 1226px;
  height: calc(100vh - 200px);
  margin: 100px auto 0;
}
</style>