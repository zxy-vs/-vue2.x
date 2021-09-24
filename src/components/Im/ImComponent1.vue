<template>
  <div>
    <div class="head">
      <div class="head_list">
        <div class="h_l" v-for="(item, index) of head.headListL" :key="index">
          <span class="h_color" :class="index == 10 ? 'app' : ''">
            {{ item.name }}
            <span
              :class="index == 10 ? 'app_img' : ''"
              v-html="index == 10 ? head.headListText : ''"
            ></span>
          </span>
          <span class="sep">{{ item.split }}</span>
        </div>
        <div class="h_shop">购物车</div>
        <div
          class="h_r"
          v-for="(item, index) of head.headListR"
          :key="index + 'second'"
        >
          <span class="h_color">{{ item.name }}</span>
          <span class="sep">{{ item.split }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      head: {
        headListL: [
          { name: "小米商城", split: "|" },
          { name: "MIUI", split: "|" },
          { name: "loT", split: "|" },
          { name: "云服务", split: "|" },
          { name: "天星数科", split: "|" },
          { name: "有品", split: "|" },
          { name: "小爱开放平台", split: "|" },
          { name: "企业团购", split: "|" },
          { name: "资质证照", split: "|" },
          { name: "协议规则", split: "|" },
          { name: "下载app", split: "|" },
          { name: "智能生活", split: "|" },
          { name: "Select location" },
        ],
        headListText: ` <img src="https://i1.mifile.cn/f/i/17/appdownload/download.png?1" alt="" width="90"
                                height="90">
                            <p>小米商城app</p>`,
        headListR: [
          { name: "登录", split: "|" },
          { name: "注册", split: "|" },
          { name: "消息通知" },
        ],
      },
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
.head {
  width: 100%;
  height: 40px;
  background-color: #333;
  color: #b0b0b0;
  font-size: 12px;
  line-height: 40px;
}

.head_list {
  width: 1226px;
  margin: 0 auto;
}

.sep {
  color: #424244;
  margin: 0 3px;
}

.h_l {
  float: left;
}

.h_r {
  float: right;
}

.h_shop {
  float: right;
  width: 100px;
  text-align: left;
  background-color: #424242;
  margin-left: 15px;
  position: relative;
}

.h_shop::after {
  content: "";
  background-color: #fff;
  box-shadow: 0 5px 15px 0 #ccc;
  width: 300px;
  height: 0px;
  position: absolute;
  top: 40px;
  right: 0;
  transition: height 0.6s linear;
}

.h_shop:hover::after {
  height: 80px;
}

.h_shop:hover {
  background-color: #fff;
  color: #ff6700;
}

.h_color:hover {
  color: #fff;
  cursor: pointer;
}

.app {
  position: relative;
}

.app::before {
  display: none;
  content: "";
  border-right: 8px solid transparent;
  border-left: 8px solid transparent;
  border-bottom: 8px solid #fff;
  position: absolute;
  bottom: -12px;
  left: 50%;
  margin: 0 auto;
  transform: translateX(-50%);
}

.app:hover::before {
  display: block;
}

.app_img {
  display: inline-block;
  overflow: hidden;
  box-shadow: 0 5px 15px 0 #ccc;
  width: 124px;
  height: 0;
  background-color: #fff;
  text-align: center;
  padding: 0 10px;
  position: absolute;
  top: 28px;
  left: 50%;
  transform: translateX(-50%);
  transition: all 0.6s linear;
  z-index: 1;
  img {
    width: 90px;
    height: 90px;
    margin: 15px auto;
  }
}
.app:hover .app_img {
  color: #424242;
  height: 160px;
}
</style>