<template>
    <div class="sun" ref="SunBurst">

    </div>
</template>

<script>
import { option } from '../../../EChartsData/SunBurstData.js';
    export default {
        mounted() {
            let eCharts = this.echarts.init(this.$refs.SunBurst);

            eCharts.setOption(option)
        },
    }
</script>

<style lang="less" scoped>
.sun{
    width: 100%;
    height: 100%;
}
</style>