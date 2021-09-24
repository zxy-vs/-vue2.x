<template>
  <div>
      <Lbt/>
      <div class="zNav">
        <List/>
      </div>
      <p>欢&nbsp;&nbsp;&nbsp;&nbsp;迎&nbsp;&nbsp;&nbsp;&nbsp;查&nbsp;&nbsp;&nbsp;&nbsp;看</p>
      <p></p>
  </div>
</template>

<script>
  import Lbt from '../components/Index/Lbt'
  import List from '../components/Index/List'
  export default {
    components:{
      Lbt,
      List
    }
  }
</script>

<style lang="less" scoped>
.zNav{
  width: 1226px;
  height: 200px;
  margin: 0 auto;
  border: 1px solid #eee;
  padding: 20px;
}
p{
  margin-top: 20px;
  height: 64px;
  text-align: center;
  color: #fff;
  line-height: 100px;
  font-size: 32px;
}
</style>
