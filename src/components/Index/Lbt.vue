<template>
  <div>
    <div class="block">
      <el-carousel height="400px">
        <el-carousel-item v-for="item,index in image"  :key="index">
          <h3 class="small"><img :src="require(`../../../public/static/index/lbt${index+1}.jpg`)" alt="" width="1226" height="400"></h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "Lbt",
  data() {
      return {
          image:['1','2','3','4']
      }
  },
};
</script>
<style lang="less" scoped>
.block {
    width: 1226px;
    margin: 50px auto;

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
}
</style>
