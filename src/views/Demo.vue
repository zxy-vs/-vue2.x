<template>
  <div>
      <div class="secondNav">
        <router-link to="/Demo/Im">小米官网模拟</router-link>
        <router-link to="/Demo/plane">飞机大战</router-link>
      </div>
      <div>
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="less" scoped>
.secondNav{
  width: 1226px;
  height: 30px;
  margin: 0 auto;
  a{
    margin: 0 10px;
    text-decoration: none;
    padding: 0 20px;
    line-height: 30px;
    border: 1px solid black;
  }
}
</style>