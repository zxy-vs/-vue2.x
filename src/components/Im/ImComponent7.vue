<template>
    <div v-ul class="lbt">
        <button class="l_l">《</button>
        <button class="l_r">》</button>
        <ul>
            <li v-for='item,index of list' :key="index"><a href="#"><ImGlobal2 :list = 'item'/></a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                list:[{
                    imgSrc:'http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d755e945b0855e8f817374497aed88c1.png?thumb=1&w=200&h=200&f=webp&q=90',
                    text:'米家水离子吹风机 白色',
                    stext:'快速吹干，深度补水',
                    btext1:'189',
                    btext2:'199',
                },{
                    imgSrc:'http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d755e945b0855e8f817374497aed88c1.png?thumb=1&w=200&h=200&f=webp&q=90',
                    text:'米家水离子吹风机 白色',
                    stext:'快速吹干，深度补水',
                    btext1:'189',
                    btext2:'199',
                },{
                    imgSrc:'http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d755e945b0855e8f817374497aed88c1.png?thumb=1&w=200&h=200&f=webp&q=90',
                    text:'米家水离子吹风机 白色',
                    stext:'快速吹干，深度补水',
                    btext1:'189',
                    btext2:'199',
                },{
                    imgSrc:'http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d755e945b0855e8f817374497aed88c1.png?thumb=1&w=200&h=200&f=webp&q=90',
                    text:'米家水离子吹风机 白色',
                    stext:'快速吹干，深度补水',
                    btext1:'189',
                    btext2:'199',
                },{
                    imgSrc:'http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d755e945b0855e8f817374497aed88c1.png?thumb=1&w=200&h=200&f=webp&q=90',
                    text:'米家水离子吹风机 白色',
                    stext:'快速吹干，深度补水',
                    btext1:'189',
                    btext2:'199',
                },{
                    imgSrc:'http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d755e945b0855e8f817374497aed88c1.png?thumb=1&w=200&h=200&f=webp&q=90',
                    text:'米家水离子吹风机 白色',
                    stext:'快速吹干，深度补水',
                    btext1:'189',
                    btext2:'199',
                },{
                    imgSrc:'http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d755e945b0855e8f817374497aed88c1.png?thumb=1&w=200&h=200&f=webp&q=90',
                    text:'米家水离子吹风机 白色',
                    stext:'快速吹干，深度补水',
                    btext1:'189',
                    btext2:'199',
                },{
                    imgSrc:'http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d755e945b0855e8f817374497aed88c1.png?thumb=1&w=200&h=200&f=webp&q=90',
                    text:'米家水离子吹风机 白色',
                    stext:'快速吹干，深度补水',
                    btext1:'189',
                    btext2:'199',
                },{
                    imgSrc:'http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d755e945b0855e8f817374497aed88c1.png?thumb=1&w=200&h=200&f=webp&q=90',
                    text:'米家水离子吹风机 白色',
                    stext:'快速吹干，深度补水',
                    btext1:'189',
                    btext2:'199',
                },{
                    imgSrc:'http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d755e945b0855e8f817374497aed88c1.png?thumb=1&w=200&h=200&f=webp&q=90',
                    text:'米家水离子吹风机 白色',
                    stext:'快速吹干，深度补水',
                    btext1:'189',
                    btext2:'199',
                },{
                    imgSrc:'http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d755e945b0855e8f817374497aed88c1.png?thumb=1&w=200&h=200&f=webp&q=90',
                    text:'米家水离子吹风机 白色',
                    stext:'快速吹干，深度补水',
                    btext1:'189',
                    btext2:'199',
                }]
            }
        },directives: {
            ul:{
                inserted(el){
                    let l = el.children[0];
                    let r = el.children[1];
                    let ul = el.children[2];
                    let li = ul.children[0];
                    for(let i =0;i<ul.children.length;i++){
                        ul.children[i].style.borderTop = `1px solid rgb(${Math.ceil(Math.random()*255)},${Math.ceil(Math.random()*255)},${Math.ceil(Math.random()*255)})`
                    }
                    l.disabled = true;
                    let i =0;
                    r.addEventListener('click',function(){
                        if(i<=0){
                           l.disabled =false;
                        } 
                        if(i>=1){
                            this.disabled =true; 
                        }
                            i++;
                            let o = el.offsetWidth*-i
                            o = Math.max(o,(-ul.offsetWidth+el.offsetWidth+li.offsetWidth));
                            animation(ul,o)
                        
                    })
                    l.addEventListener('click',function(){
                        if(i>1){
                            r.disabled =false
                        }
                        if(i<=1){
                           this.disabled =true;
                        } 
                            i--;
                            animation(ul,el.offsetWidth*-i)
                    })
                function animation(obj,end){
                    clearInterval(obj.time);
                    obj.time = setInterval(() => {
                        let speed = (end-obj.offsetLeft)/10;
                        speed = speed>0?Math.ceil(speed):Math.floor(speed);
                        if(obj.offsetLeft ==end){
                            clearInterval(obj.time);
                        }else{
                            obj.style.left = speed+obj.offsetLeft+'px';
                        }
                    }, 1000/60);
                }
            }
        }
    }
}
</script>

<style lang="less" scoped>
*{
    margin: 0;
    padding: 0;
}
.lbt{
    margin: 0;
    position: relative;
    width: 978px;
    height: 398px;
    overflow:hidden ;
    .l_l,.l_r{
        border: 1px solid #eee;
        height: 20px;
        line-height: 20px;
        padding: 0 5px 0 10px;
        border: none;
        position: absolute;
        top: 20px;
        right: 0;
    }
    .l_l{
        right: 50px;
        padding: 0 10px 0 5px;

    }
    ul{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 300%;
        height: 340px;
        white-space: nowrap;
           li{
            margin:0 0 0 11px;
            float: left;
            list-style: none;
            width: 234px;
            height: 339px;
               a{
                    text-decoration: none;
                    color: black;
            } 
        }
        
    }
}
</style>