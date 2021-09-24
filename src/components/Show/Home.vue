<template>
  <div class="home">
    <ul class="homeNav">
      <router-link
        :to="item.path"
        tag="li"
        v-for="(item, index) of homeNav"
        :key="index"
        >{{ item.name }}</router-link
      >
    </ul>
    <div class="homeRight">
      <transition
      enter-active-class="animate__animated animate__slideInLeft"
      leave-active-class="animate__animated animate__slideOutRight"
      mode="out-in"
    >
    <router-view></router-view>
    </transition>
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      homeNav: [
        {
          name: "柱状图",
          path: "/Show/Home/pole",
        },
        {
          name: "旭日图",
          path: "/Show/Home/sunburst",
        },
        {
          name: "雷达",
          path: "/Show/Home/radar",
        },
        {
          name: "3D地图",
          path: "/Show/Home/maps",
        },
        {
          name: "时钟",
          path: "/Show/Home/time",
        },
        {
          name: "3D地球",
          path: "/Show/Home/globe",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.home {
  width: 1226px;
  height: 779px;
  margin: 30px auto 0;
  position: relative;
  display: flex;
  .homeNav {
    width: 234px;
    height: calc(90vh - 160px);
    li {
      list-style: none;
      margin: 20px 0;
      width: 100%;
      height: 50px;
      line-height: 50px;
      font-size: 24px;
      text-align: center;
      background-color: #73c9e5;
      a {
        width: 100%;
        height: 50px;
        text-decoration: none;
        color: #fff;
      }
    }
  }
  .homeRight {
    width: 992px;
    border: 1px solid #eee;
    height: calc(90vh - 160px);
    overflow: hidden;
  }
  
}
</style>