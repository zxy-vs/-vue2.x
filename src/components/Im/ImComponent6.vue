<template>
<div>
    <p>小米秒杀</p>
    <div class="times">
        <div class="t_content"><span>{{stime}}</span> 场</div>
        <div class="t_img">
            <img src="../../assets/shangou.png">
        </div>
        <span class="sur">距离结束还有</span>
        <div class="time">
            <span class="h">{{h}}</span><label>:</label>
            <span class="m">{{m}}</span><label>:</label>
            <span class="s">{{s}}</span>
        </div>
    </div>
</div>
    
</template>

<script>
    export default {
        name:"Content3",
        data() {
            return {
                stime:'20:00',
                xtime:+new Date(),
                dtime:+new Date('2021-7-13 19:00:00'),
                h:'',
                m:'',
                s:'',
                interval:'',
                timeData:'2021-7-13 19:15:00'
            }
        },
        mounted() {
            this.interval = setInterval(()=>{
                this.xtime = +new Date();
                this.dtime = +new Date(this.timeData);
                let time = this.dtime-this.xtime;
                if(time <= 0){
                    // clearInterval(this.interval);
                    this.timeData ='2021-7-13 20:00:00'
                }else{
                    let h = parseInt(time/1000/60/60%24);
                    this.h = h>=10?h:'0'+h;
                    let m = parseInt(time/1000/60%60);
                    this.m = m>=10?m:'0'+m;
                    let s = parseInt(time/1000%60);
                    this.s = s>=10?s:'0'+s;
                }
            },1000)
        },
    }
</script>

<style lang="less" scoped>
p{
    margin: 0;
    font-size: 22px;
    padding: 14px;
}
.times {
            width: 239px;
            height: 340px;
            background-color: #f1eded;
            position: relative;
        }

        .times::before {
            content: '';
            width: 100%;
            height: 1px;
            position: absolute;
            top: 0;
            left: 0;
            background-color: #e53935;
        }

        .t_content {
            padding-top: 55px;
            text-align: center;
            font-size: 20px;
            color: #e53935;
        }

        .t_img {
            height: 103px;
            text-align: center;
            padding: 25px 0;
        }

        .t_img img {
            width: 34px;
            height: 53px;
        }

        .sur {
            display: inline-block;
            width: 100%;
            height: 20px;
            text-align: center;
        }

        .time {
            margin: 28px auto 0;
            width: 169px;
            height: 0;
        }

        .time span {
            display: inline-block;
            width: 46px;
            height: 46px;
            background-color: #605751;
            line-height: 46px;
            text-align: center;
            color: #f1eded;
            font-size: 24px;
        }

        .time label {
            display: inline-block;
            vertical-align:middle;
            line-height: 35px;
            height: 46px;
            font-size: 20px;
            padding-left: 4px;
        }
</style>