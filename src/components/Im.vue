<template>
  <div>
    <div class="head">
      <ImComponent1 />
    </div>
    <div class="nav">
      <ImComponent2 />
    </div>
    <div class="list">
      <div class="lbt">
        <ImComponent3 />
      </div>
      <div class="secondList">
        <ImComponent4 />
      </div>
    </div>
    <div class="smallList">
      <ImComponent5 />
    </div>
    <div class="nowTime">
      <div class="ll">
        <ImComponent6 />
      </div>
      <div class="lr">
        <ImComponent7 />
      </div>
    </div>
    <div class="showList">
      <p>家电
        <ul v-istran>
        <li class="color" @mouseover="trans">电视影像</li>
        <li @mouseover="isTrans">热门</li>
        </ul>
        </p>
        <div class="trans">
          <compontent :is="tran"></compontent>
        </div>
    </div>
  </div>
</template>

<script>
import ImComponent1 from "./Im/ImComponent1.vue";
import ImComponent2 from "./Im/ImComponent2.vue";
import ImComponent3 from "./Im/ImComponent3.vue";
import ImComponent4 from "./Im/ImComponent4.vue";
import ImComponent5 from "./Im/ImComponent5.vue";
import ImComponent6 from "./Im/ImComponent6.vue";
import ImComponent7 from "./Im/ImComponent7.vue";
import ImComponent8 from "./Im/ImComponent8.vue";
import ImComponent9 from "./Im/ImComponent9.vue";
export default {
  components: {
    ImComponent1,
    ImComponent2,
    ImComponent3,
    ImComponent4,
    ImComponent5,
    ImComponent6,
    ImComponent7,
    ImComponent8,
    ImComponent9,
  },
  data() {
    return {
      tran: "ImComponent8",
      isTran: false,
      color: "#FF6700",
    };
  },
  methods: {
    trans() {
      this.tran = "ImComponent9";
      this.isTran = true;
    },
    isTrans() {
      this.tran = "ImComponent8";
      this.isTran = false;
    },
  },
  directives: {
    istran: {
      inserted(el) {
        for (let i = 0; i < el.children.length; i++) {
          el.children[i].onmouseover = function () {
            for (let j = 0; j < el.children.length; j++) {
              el.children[j].className = "";
            }
            this.className = "color";
          };
        }
      },
    },
  },
};
</script>

<style lang="less" scoped>
.head {
  width: 100%;
  height: 40px;
}
.list {
  width: 1226px;
  height: 460px;
  margin: 0 auto;
  position: relative;
  .lbt {
    position: absolute;
    top: 0;
    left: 0;
    width: 1226px;
    height: 460px;
  }
  .secondList {
    width: 234px;
    height: 460px;
    position: absolute;
    top: 0;
    left: 0;
  }
}
.smallList {
  width: 100%;
}
.nowTime {
  width: 1226px;
  height: 378px;
  margin: 20px auto;
  .ll {
    width: 234px;
    float: left;
    margin-right: 5px;
  }
  .lr {
    width: 978px;
    float: left;
    margin-right: 5px;
  }
}
.showList {
  width: 1226px;
  height: 672px;
  position: relative;
  margin: 0 auto;
  p {
    width: 100%;
    font-size: 22px;
    height: 20px;
    line-height: 20px;
    padding: 40px 0;
    ul {
      position: absolute;
      width: 180px;
      height: 30px;
      top: 28px;
      right: 0;
      li {
        list-style: none;
        float: right;
        font-size: 16px;
        margin-left: 30px;
      }
      .color {
        border-bottom: 2px solid #ff6700;
        color: #ff6700;
      }
      .trans{
        width: 1226px;
        height: 614px;
      }
    }
  }
}

</style>