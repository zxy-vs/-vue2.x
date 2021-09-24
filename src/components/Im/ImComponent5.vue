<template>
  <div class="c_content">
    <div class="c_logo">
      <ul class="c_logo_ul">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <div class="c_advertise"></div>
    <div class="c_advertise"></div>
    <div class="c_advertise"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.c_content {
  width: 1226px;
  height: 170px;
  margin: 14px auto 0;
}
.c_logo {
  float: left;
  width: 234px;
  height: 170px;
  background-color: rgba(204, 204, 204, 0.185);
  padding: 3px;
}
.c_logo_ul {
  width: 234px;
  height: 170px;
}
.c_logo_ul li {
  list-style: none;
  float: left;
  width: 76px;
  height: 82px;
  padding: 2px;
  position: relative;
}
.c_logo_ul li::before {
  content: "";
  width: 64px;
  height: 1px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: #ccc;
}
.c_logo_ul li::after {
  content: "";
  width: 1px;
  height: 70px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  background-color: #ccc;
}
.c_advertise {
  float: left;
  width: 316px;
  height: 170px;
  margin-left: 14px;
  border: 1px solid #ccc;
  background-color: transparent;
}
</style>