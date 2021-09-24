<template>
  <div id="app">
    <div class="header">博&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;客</div>
    <div id="nav">
      <router-link to="/Index">主页</router-link> 
      <router-link to="/Demo">Demo案例</router-link>
      <router-link to="/Show">登陆注册及有趣的图型案例</router-link> 
      <router-link to="/Calendar">日历</router-link> 
      <router-link to="/Contact" class="right">联系方式</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app{
  width:100%;
  background: url('../public/static/index/bgc2.png') no-repeat;
  background-size: cover;
  .header{
  width: 100%;
  height: 60px;
  line-height: 60px;
  background-color: skyblue;
  text-align: center;
  font-size: 32px;
  background: url(../public/static/index/bgc1.png) no-repeat  ;
  background-size: cover;
}
#nav{
  width: 1226px;
  height: 40px;
  margin: 0 auto;
  font-size: 18px;
  line-height: 40px;
  padding: 0 5px;
  a{
    float: left;
    padding: 0 20px;
    text-decoration: none;
    color: #fff;
  }
  a:hover{
    background-color: rgb(186, 204, 109);
    border-radius: 8px;
  }
  .right{
    float: right;
  }
}
}


</style>
