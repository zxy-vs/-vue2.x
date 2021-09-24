<template>
  <div class="lbt">
    <ul class="lbtContent">
      <li v-for="(item, index) of nav_lbt" :key="index">
        <img :src="item.src" :width="item.width" :height="item.height" />
      </li>
    </ul>
    <ol class="lbtPoint">
        <li></li>
        <li></li>
        <li></li>
    </ol>
    <el-button icon="el-icon-arrow-right" class="lbtR"></el-button>
    <el-button icon="el-icon-arrow-left" class="lbtL"></el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav_lbt: [
        {
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1c3e97686468231f3f78048d7f2b7fdc.jpg?thumb=1&w=1226&h=460&f=webp&q=90",
          width: "1226px",
          height: "460px",
        },
        {
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7f2e0acc18c3d9b6a9c1ab9e8281fbd6.jpg?thumb=1&w=1226&h=460&f=webp&q=90",
          width: "1226px",
          height: "460px",
        },
        {
          src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/268aadece1368da98fcf5553b657cdb3.jpg?w=2452&h=920",
          width: "1226px",
          height: "460px",
        },
      ],
    };
  },
  mounted() {
    var lbt = document.querySelector(".lbt");
    var lbtWidth = lbt.offsetWidth;
    var lR = lbt.querySelector(".lbtR");
    var lL= lbt.querySelector(".lbtL");
    var lbtUl = lbt.querySelector(".lbtContent");
    var lbtOl = lbt.querySelector(".lbtPoint");
    //侧边栏显示隐藏
    lbt.addEventListener("mouseenter", function () {
      lR.style.display = "block";
      lL.style.display = "block";
      clearInterval(lbtTime);
    });
    lbt.addEventListener("mouseleave", function () {
      lR.style.display = "none";
      lL.style.display = "none";
      lbtTime = setInterval(() => {
        lR.click();
      }, 2000);
    });
    //小圆点点击切换
    var index;
    var next = 0;
    var next1 = 0;
    for (let i = 0; i < lbtUl.children.length; i++) {

      lbtOl.children[i].setAttribute("index", i);
      lbtOl.children[i].addEventListener("click", function () {
        index = this.getAttribute("index");
        if (lbtUl.offsetLeft < -(lbtUl.children.length - 2) * lbtWidth) {
          lbtUl.style.left = 0;
        }
        animation(lbtUl, -index * lbtWidth);
        next = 0;
        next1 = 0;
        for (let i = 0; i < lbtOl.children.length; i++) {
          lbtOl.children[i].className = "";
        }
        this.className = "lbtColor";
      });
    }
    lbtOl.children[0].className = "lbtColor";
    var li = lbtUl.children[0].cloneNode(true);
    lbtUl.appendChild(li);
    // 右侧边栏切换
    lR.addEventListener("click", function () {
      if (isNaN(parseInt(index))) {
        if (next === lbtUl.children.length - 1) {
          next = 0;
          lbtUl.style.left = 0;
        }
        next++;
        animation(lbtUl, -next * lbtWidth);
        next1++;
        if (next1 === lbtOl.children.length) {
          next1 = 0;
        }
        Change();
      } else {
        if (next + parseInt(index) === lbtUl.children.length - 1) {
          next = -parseInt(index);
          lbtUl.style.left = 0;
        }
        next++;
        animation(lbtUl, -(next + parseInt(index)) * lbtWidth);
        next1++;
        if (next1 + parseInt(index) === lbtOl.children.length) {
          next1 = -parseInt(index);
        }
        Change1();
      }
    });
    // 左侧边栏切换
    lL.addEventListener("click", function () {
      if (isNaN(parseInt(index))) {
        if (next === 0) {
          next = lbtUl.children.length - 1;
          lbtUl.style.left = -next * lbtWidth + "px";
        }
        next--;
        animation(lbtUl, -next * lbtWidth);
        if (next1 === 0) {
          next1 = lbtOl.children.length;
        }
        next1--;
        Change();
      } else {
        if (next + parseInt(index) === 0) {
          next = lbtUl.children.length - 1 - parseInt(index);
          lbtUl.style.left = -(next + parseInt(index)) * lbtWidth + "px";
        }
        next--;
        animation(lbtUl, -(next + parseInt(index)) * lbtWidth);
        if (next1 + parseInt(index) === 0) {
          next1 = lbtOl.children.length - parseInt(index);
        }
        next1--;
        Change1();
      }
    });
    var lbtTime = setInterval(() => {
      lR.click();
    }, 2000);
    // 小圆圈函数
    function Change() {
      for (let i = 0; i < lbtOl.children.length; i++) {
        lbtOl.children[i].className = "";
      }
      lbtOl.children[next1].className = "lbtColor";
    }
    function Change1() {
      for (let i = 0; i < lbtOl.children.length; i++) {
        lbtOl.children[i].className = "";
      }
      lbtOl.children[next1 + parseInt(index)].className = "lbtColor";
    }
    //动画函数
    function animation(obj, end) {
      clearInterval(obj.time);
      obj.time = setInterval(() => {
        var step = (end - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (end == obj.offsetLeft) {
          clearInterval(obj.time);
        }
        obj.style.left = step + obj.offsetLeft + "px";
      }, 20);
    }
  },
};
</script>

<style lang="less" scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.lbt {
  width: 1226px;
  height: 460px;
  position: relative;
  overflow: hidden;
  top: 0;
  left: 0;
  .lbtContent {
    width: 400%;
    position: relative;
    li {
      width: 1226px;
      height: 460px;
      float: left;
      list-style: none;
    }
  }
  .lbtPoint {
    width: 170px;
    height: 10px;
    position: absolute;
    bottom: 30px;
    right: 50px;
    li {
      list-style: none;
      margin-left: 20px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.308);
      float: left;
    }
    .lbtColor {
      background-color: #fff;
    }
  }
  .lbtR,
  .lbtL {
    // display: none;
    display: block;
    width: 41px;
    height: 69px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(255, 255, 255, 0.151);
    color: rgb(255, 255, 255);
    margin: 0;
    padding: auto;
   border: none;
  }
  .lbtR {
    right: 0;
  }
  .lbtL {
    left: 234px;
  }
}
</style>