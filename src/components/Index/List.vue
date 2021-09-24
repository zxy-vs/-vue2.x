<template>
  <div class="list">
    <p>常用工具文档</p>
    <el-tabs v-model="activeName">
      <el-tab-pane
        v-for="(item, index) of ListContent"
        :key="index"
        :label="item.title"
        :name="item.name"
      >
        <a :href="item.href" target="new_blank"
          >{{ item.content }}{{ item.im }}</a
        ></el-tab-pane
      >
    </el-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "second",
      ListContent: [
        {
          title: "W3C",
          name: "1",
          content: "W3 school",
          im: "",
          href: "https://www.w3school.com.cn/index.html",
        },
        {
          title: "Vue",
          name: "2",
          content: "Vue中文网",
          im: "--vue create 项目名  或 vue ui",
          href: "https://cn.vuejs.org/",
        },
        {
          title: "github",
          name: "3",
          content: "github网",
          im: "",
          href: "https://github.com/",
        },
        {
          title: "npm",
          name: "4",
          content: "npm网",
          im: "",
          href: "https://www.npmjs.com/",
        },
        {
          title: "baidu地图开发平台",
          name: "5",
          content: "baidu地图开发平台",
          im: "",
          href: "https://lbsyun.baidu.com/",
        },
        {
          title: "axios",
          name: "6",
          content: "axios中文网",
          im: "--vue add axios ",
          href: "http://www.axios-js.com/",
        },
        {
          title: "element-ui",
          name: "7",
          content: "element-ui组件中文网",
          im: "--yarn add element-ui",
          href: "https://element.faas.ele.me/#/zh-CN",
        },
        {
          title: "Antd",
          name: "8",
          content: "Antd组件中文网",
          im: "--yarn add ant-design-vue",
          href: "https://www.antdv.com/docs/vue/introduce-cn/",
        },
        {
          title: "Vant",
          name: "9",
          content: "Vant组件中文网",
          im: '--yarn add vant  import "amfe-flexible"',
          href: "https://youzan.github.io/vant/#/zh-CN/",
        },
        {
          title: "gitee",
          name: "10",
          content: "gitee库网",
          href: "https://gitee.com/",
        },
        {
          title: "echarts",
          name: "11",
          content: "echarts库网",
          im: `--yarn add echarts   import * as echarts from 'echarts';
          import 'echarts-gl'  Vue.prototype.echarts = echarts;`,
          href: "https://echarts.apache.org/zh/index.html",
        },
        {
          title: "CDSN",
          name: "12",
          content: "CDSN网",
          href: "https://www.csdn.net/",
        },
        {
          title: "animate.css",
          name: "13",
          content: "animate.css网",
          im: '--yarn add animate.css  transition router-view import ? from "animate.css"',
          href: "https://animate.style/",
        },
        {
          title: "js-cookie",
          name: "14",
          content: "js-cookie网",
          im: '--yarn add js-cookie import Cookies from "js-cookie" Vue ',
          href: "https://animate.style/",
        },
        {
          title: "mavon-editor",
          name: "15",
          content: "mavon-editor.npm网",
          im: `--yarn add mavon-editor   import mavonEditor from 'mavon-editor'
          import 'mavon-editor/dist/css/index.css'
          Vue.use(mavonEditor)`,
          href: "https://www.npmjs.com/package/mavon-editor",
        },
        {
          title: "SVGA",
          name: "16",
          content: "SVGA.npm网",
          im: '--yarn add svgaplayerweb import SVGA from "svgaplayerweb"',
          href: "https://www.npmjs.com/package/svgaplayerweb",
        },
        {
          title: " vuex-永久保存local",
          name: "17",
          content: "vuex-persistedstate.npm网",
          im: '--yarn add vuex-persistedstate import createPersistedState from "vuex-persistedstate"',
          href: "https://www.npmjs.com/package/vuex-persistedstate",
        },{
          title: "vue3-lazyload",
          name: "18",
          content: "vue3-lazyload.npm网",
          im: '--yarn add vuex-persistedstate import createPersistedState from "vuex-persistedstate"',
          href: "https://www.npmjs.com/package/vue3-lazyload",
        },{
          title: " Antd vue 3",
          name: "19",
          content: "Antd vue 3网",
          im: '--详情官网"',
          href: "https://2x.antdv.com/docs/vue/getting-started-cn",
        },{
          title: "element-plus",
          name: "20",
          content: "element-plus网",
          im: '--详情官网"',
          href: "https://element-plus.gitee.io/#/zh-CN",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.list {
  margin: 20px auto;
  p {
    font-size: 20px;
    line-height: 30px;
  }
  a {
    text-decoration: none;
    color: #fff;
    font-size: 20px;
    text-align: center;
    line-height: 50px;
  }
}
</style>
