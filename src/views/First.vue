<template>
  <div>
    <p class="el-icon-video-play" @click="im"></p>
  </div>
</template>

<script>
export default {
    methods: {
        im(){
            return this.$router.replace('/Index')
        }
    },
};
</script>

<style lang="less" scoped>
div {
  height: 868px;
  .el-icon-video-play {
    position: absolute;
    left: 50%;
    transform: translateX(-31px);
    bottom: 400px;
    font-size: 62px;
    color: #fff;
  }
  .el-icon-video-play:hover {
    color: skyblue;
  }
}
</style>
