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
          imgSrc:"http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/03a9e7e96a09d256ca1badeec186c859.jpg?thumb=1&w=200&h=200&f=webp&q=90",
          text:"小米全面屏电视65英寸 E65X",
          stext:"全面屏设计",
          btext1:"3099",
          btext2:"3299"
        },{
          imgSrc:"http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f193daba3989eadac5e13ae102b91582.jpg?thumb=1&w=200&h=200&f=webp&q=90",
          text:"全面屏电视 55英寸E55X",
          stext:"潮流全面屏设计",
          btext1:"2599",
          btext2:"3299"
        },{
          imgSrc:"http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ecbe6a6c0d4950b78b086d7ada654e3b.jpg?thumb=1&w=200&h=200&f=webp&q=90",
          text:"小米电视4A 60英寸",
          stext:"人工智能语音系统,超高清画质",
          btext1:"2799",
          btext2:"3299"
        },{
          imgSrc:"http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7e2127506fd2209f3115828404269d45.jpg?thumb=1&w=200&h=200",
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
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
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