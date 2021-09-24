<template>
        <div>
      <ul>
        <li v-for = 'item,index of list' :key="index"><ImGlobal1 :list="item"/></li>
    </ul>
    </div>
</template>
<script> 
export default {
    data() {
      return {
        list:[{
          imgSrc:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e7c6e79433c883e1a022ec21402c1679.jpg?thumb=1&w=200&h=200&f=webp&q=90",
          text:"小米全面屏电视65英寸 E65X",
          stext:"全面屏设计",
          btext1:"3099",
          btext2:"3299"
        },{
          imgSrc:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3accd497afc0047cfbd40f442e3b17df.jpg?thumb=1&w=200&h=200&f=webp&q=90",
          text:"全面屏电视 55英寸E55X",
          stext:"潮流全面屏设计",
          btext1:"2599",
          btext2:"3299"
        },{
          imgSrc:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/550177d2e54387521bce9e78cb2949dd.jpg?thumb=1&w=200&h=200&f=webp&q=90",
          text:"小米电视4A 60英寸",
          stext:"人工智能语音系统,超高清画质",
          btext1:"2799",
          btext2:"3299"
        },{
          imgSrc:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ec0ec7692ba005710d1887262559609c.jpg?thumb=1&w=200&h=200&f=webp&q=90",
          text:"小米电视4S 75英寸",
          stext:"4K HDR，人工智能语音",
          btext1:"5999",
          btext2:"6299"
        }],
        }
    }
}
</script>
<style lang="less" scoped>
     div{
    ul{
      width: 992px;
      height: 614px;
      li{
        list-style: none;
        float:left;
        margin:0 0 14px 14px;
        background-color: #fff; 
      }
    }
  }
</style>