<template>
  <div class="list_show">
    <div class="img">
      <img :src="list.imgSrc" alt="" />
    </div>
    <h3>{{ list.text }}</h3>
    <p class="small">{{ list.stext }}</p>
    <p class="big">
      <span>{{ list.btext1 }}</span
      >元
      <s class="s"
        ><span>{{ list.btext2 }}</span
        >元</s
      >
    </p>
  </div>
</template>
<script>
export default {
  name: "ImGlobal1",
  props: ["list"],
};
</script>
<style lang="less" scoped>
.list_show {
  width: 234px;
  height: 300px;
  padding: 20px 0px;
  transition: all 0.3s linear;
  background-color: #fff;
}
.img {
  width: 160px;
  height: 160px;
  margin: 0 auto 18px;
}
img {
  width: 160px;
  height: 160px;
}
h3 {
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  margin: 0 10px 2px;
}
.small {
  font-size: 12px;
  color: #b0b0b0;
  text-align: center;
  margin: 0 10px 10px;
  height: 18px;
  line-height: 18px;
}
.big {
  text-align: center;
  font-size: 14px;
  color: #ff6700;
}
.s {
  color: #b0b0b0;
}
.list_show:hover {
  transform: translateY(-10px);
  box-shadow: 0 30px 30px #b0b0b0;
}
</style>