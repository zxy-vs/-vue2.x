<template>
<div class="p">
  <div class="p-f">
    
    <div class="bg ">
      <div class="allBall"></div>
    </div>
    <span class="num">0</span>
    <div class="log">
      <h2>飞机大战</h2>
      <button>简 单</button>
      <button>中 等</button>
      <button>困 难</button>
      <button>噩 梦</button>
    </div>
    <div class="end">
      <span class="p-span">您的评分是：<span class="p-num">0</span></span>
      <button class="recover">重新开始</button>
    </div>
  </div>
</div>
  
</template>

<script>
export default {
  mounted() {
    var p_f = document.querySelector(".p-f");
    var log = p_f.querySelector(".log");
    var btns = log.querySelectorAll("button");
    var num = p_f.querySelector(".num");
    var end = p_f.querySelector(".end");
    var p_num = end.querySelector(".p-num");
    var recover = end.querySelector(".recover");
    var bg = p_f.querySelector(".bg");
    var allBall = bg.querySelector(".allBall");
    var score = parseInt(num.innerHTML);
    window.requestAnimationFrame =
      window.requestAnimationFrame ||
      function(fn) {
        return setInterval(fn, 1000 / 60);
      };
    for (let i = 0; i < btns.length; i++) {
      btns[i].onclick = function(e) {
        e = window.event || e;
        log.style.display = "none";
        num.style.display = "block";
        bg.style.background = `url(require(../../public/static/Planeimage/bg_${i + 1}.jpg))`;
        core(i, {
          X: e.clientX - p_f.offsetLeft,
          Y: e.clientY - p_f.offsetTop,
        });
      };
    }

    function core(i, pos) {
      bgMove();
      var p = Plane(i, pos);
      Rival(i, p);
    }
    var i = 1;

    function bgMove() {
      i++;
      bg.style.backgroundPositionY = i + bg.offsetTop + "px";
      bg.bgMove = requestAnimationFrame(bgMove);
    }

    function Plane(i, pos) {
      var plane = new Image();
      plane.width = 70;
      plane.height = 70;
      plane.style.position = "absolute";
      plane.setAttribute("class", "plane");
      if (i > 1) {
        plane.src = require("../../public/static/Planeimage/plane_1.png");
      } else {
        plane.src = require("../../public/static/Planeimage/plane_0.png");
      }
      plane.style.left = pos.X - plane.width / 2 + "px";
      plane.style.top = pos.Y - plane.height / 2 + "px";
      bg.appendChild(plane);
      document.addEventListener("mousemove", function(e) {
        e = e || window.event;
        var left = e.clientX - p_f.offsetLeft - plane.width / 2;
        var top = e.clientY - p_f.offsetTop - plane.height / 2;
        var minLeft = bg.offsetLeft - plane.width / 2;
        var maxLeft = bg.offsetLeft + bg.offsetWidth - plane.width / 2;
        var minTop = bg.offsetTop;
        var maxTop = bg.offsetTop + bg.offsetHeight - plane.height / 2;
        left = Math.max(left, minLeft);
        left = Math.min(left, maxLeft);
        top = Math.max(top, minTop);
        top = Math.min(top, maxTop);
        plane.style.left = left + "px";
        plane.style.top = top + "px";
      });
      Ball(i, plane);
      return plane;
    }

    function Ball(i, plane) {
      allBall.time = setInterval(() => {
        if (score > 500) {
          product(1);
          product(-1);
        } else {
          product(0);
        }
      }, [150, 100, 75, 15][i]);
      var product = (d) => {
        var ball = new Image();
        ball.width = 30;
        ball.height = 30;
        ball.src = require("../../public/static/Planeimage/fire.png");
        ball.style.position = "absolute";
        ball.setAttribute("class", "ball");
        ball.style.left =
          plane.offsetLeft +
          plane.offsetWidth / 2 -
          ball.width / 2 +
          (ball.width / 2) * d +
          "px";
        var top = plane.offsetTop - ball.height - 5;
        ball.style.top = top + "px";
        allBall.appendChild(ball);

        function ballMove() {
          if (ball.parentNode) {
            top -= 20;
            if (top < -ball.height) {
              allBall.removeChild(ball);
            } else {
              ball.style.top = top + "px";
            }
            allBall.ballMove = requestAnimationFrame(ballMove);
          }
        }
        ballMove();
      };
    }

    function Rival(i, plane) {
      var I = 1;
      bg.rival = setInterval(() => {
        var rival = new Image();
        var index = I % 30 ? 1 : 0;
        rival.index = index;
        rival.width = [108, 54][index];
        rival.height = [80, 40][index];
        rival.src = require(`../../public/static/Planeimage/enemy_${
          ["big", "small"][index]
        }.png`);
        rival.style.position = "absolute";
        rival.setAttribute("class", `${["rival0", "rival1"][index]}`);
        rival.style.left =
          Math.random() * bg.offsetWidth - rival.width / 2 + "px";
        var top = -rival.height;
        rival.style.top = top + "px";
        rival.HP = [5, 1][index];
        var speed = [5, 6, 7, 8][i];
        rival.speed = speed + (Math.random() * 0.3 - 0.6) * speed;
        rival.spped = index ? 1 : 0.5;
        I++;
        bg.appendChild(rival);

        function rivalMove() {
          if (rival.parentNode) {
            top += rival.speed;
            if (top > bg.offsetHeight + bg.offsetTop) {
              bg.removeChild(rival);
              score -= rival.HP;
              num.textContent = score;
            } else {
              rival.style.top = top + "px";
              for (let i = 0; i < allBall.children.length; i++) {
                var everyBall = allBall.children[i];
                if (encounter(rival, everyBall)) {
                  allBall.removeChild(everyBall);
                  rival.HP--;
                  if (rival.HP == 0) {
                    score += [5, 1][rival.index];
                    num.textContent = score;
                    Boom(
                      rival.offsetLeft,
                      rival.offsetTop,
                      rival.offsetWidth,
                      rival.offsetHeight,
                      index
                    );
                    bg.removeChild(rival);
                  }
                }
              }
              var z = i > 1 ? 3 : 2;
              if (plane.parentNode && encounter(rival, plane)) {
                Boom(
                  rival.offsetLeft,
                  rival.offsetTop,
                  rival.offsetWidth,
                  rival.offsetHeight,
                  rival.index
                );
                Boom(
                  plane.offsetLeft,
                  plane.offsetTop,
                  plane.offsetWidth,
                  plane.offsetHeight,
                  z
                );
                bg.removeChild(plane);
                bg.removeChild(rival);
                Over();
              }
            }
            bg.rivalMove = requestAnimationFrame(rivalMove);
          }
        }
        rivalMove();
      }, [350, 150, 120, 100][i]);
    }
    function Over() {
      clearInterval(bg.rival);
      clearInterval(allBall.time);
      num.style.display = "none";
      end.style.display = "block";
      p_num.textContent = score;
      recover.addEventListener("click", function() {
        end.style.display = "none";
        log.style.display = "block";
        cancelAnimationFrame(bg.bgMove);
        score = 0;
        num.textContent = score;
      });
    }

    function encounter(obj1, obj2) {
      var v1 = obj1.offsetLeft,
        v2 = v1 + obj1.offsetWidth,
        v3 = obj2.offsetLeft,
        v4 = v3 + obj2.offsetWidth,
        h1 = obj1.offsetTop,
        h2 = h1 + obj1.offsetHeight,
        h3 = obj2.offsetTop,
        h4 = h3 + obj2.offsetHeight;
      return !(v1 > v4 || v2 < v3 || h1 > h4 || h2 < h3);
    }
    function Boom(left, top, width, height, index) {
      var boom = new Image();
      boom.width = width;
      boom.height = height;
      boom.style.position = "absolute";
      boom.style.left = left + "px";
      boom.style.top = top + "px";
      boom.setAttribute('class', "animate__animated animate__fadeOut");
      boom.src = require(`../../public/static/Planeimage/${
        ["boom_big", "boom_small", "plane_0", "plane_1"][index]
      }.png`);
      bg.appendChild(boom);
      setTimeout(() => {
        bg.removeChild(boom);
      }, [2000, 1000, 2000, 2000][index]);
    }
  },
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.p{
  width: 100%;
  height: 839px;
}
.p-f {
  width: 512px;
  height: 768px;
  margin: auto;
  padding-bottom: 100px;
  position: relative;
  z-index: 4;
}

.bg {
  z-index: 4;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: url('../../public/static/Planeimage/bg_1.jpg') ;
  background-size: contain;
  overflow: hidden;
}
.num {
    z-index: 4;
  display: none;
  position: absolute;
  top: 10px;
  left: 10px;
  color: #fff;
  font-family: "宋体";
  font-weight: bold;
  font-size: 20px;
}

.log {
    z-index: 5;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.log h2 {
  width: 100%;
  font-size: 48px;
  text-align: center;
  margin: 60px 0;
  margin-bottom: 150px;
  font-family: "宋体";
  color: #fff;
}

.log button {
  display: block;
  width: 120px;
  height: 50px;
  font-family: "宋体";
  font-size: 18px;
  text-align: center;
  line-height: 50px;
  margin: 60px auto;
  border-radius: 8px;
  border: none;
}

.end {
  display: none;
  z-index: 4;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding-top: 100px;
}
.end .p-span {
  display: block;
  width: 100%;
  height: 50px;
  text-align: center;
  margin: 100px auto;
  font-size: 18px;
  font-family: "宋体";
  color: #fff;
}
.end .recover {
  width: 120px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  margin: 60px 196px;
  font-size: 18px;
  border-radius: 8px;
  border: none;
}
.p-num,
.p-name {
  width: 30px;
  height: 30px;
  color: coral;
  font-size: 32px;
  line-height: 30px;
  text-align: center;
  display: inline-block;
  vertical-align: middle;
}

</style>
