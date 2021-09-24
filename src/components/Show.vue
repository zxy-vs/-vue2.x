<template>
  <div class="show">
    <div class="showNav">
      <button  @click="Esc">退 出</button>
      <router-link to="/Show/Login">登 录</router-link>
      <router-link to="/Show/Signer">注 册</router-link>
      <router-link to="/Show/Home" @click="$router.go()">主 页</router-link>
    </div>
    
    <div class="user">{{name}}</div>
  
    <router-view></router-view>
    
    
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
data() {
  return {
    name:Cookies.get('name')
  }
},
methods: {
  Esc(){
    if(Cookies.get('name')){
      if(confirm('是否退出登录')){
        this.$router.push('/Show/Home/pole')
        Cookies.remove('name')
        Cookies.remove('data')
      }
    }else{
      alert('您未登录')
      this.$router.push('/Show/Login');
    }
    this.$router.go();
  }
},
};
</script>

<style lang="less" scoped>
.show {
    margin: 20px 0 0 0;
  width: 100%;
  position: relative;
  .showNav {
    width: 1226px;
    height: 40px;
    margin: 0 auto;
    a,button {
      float: right;
      text-decoration: none;
      border: 1px solid #eee;
      padding: 0 10px;
      margin: 5px 10px;
      font-size: 20px;
      color: #fff;
      background-color: transparent;
    }
    a:hover,button:hover {
      background-color: rgb(186, 204, 109);
    }
  }
  .user{
    position: absolute;
    line-height: 40px;
    padding: 0 10px;
    margin-left:30px ;
    // border: 3px dotted #fff;
    top: -6px;
    left: 0;
  }
}
</style>