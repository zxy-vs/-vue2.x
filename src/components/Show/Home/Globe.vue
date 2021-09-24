<template>
    <div class="globe" ref="Globe">

    </div>
</template>

<script>
import { option } from '../../../EChartsData/GlobeData.js'
    export default {
        mounted() {
            let eCharts = this.echarts.init(this.$refs.Globe)
            eCharts.setOption(option)
        },
    }
</script>

<style lang="less" scoped>
.globe{
    width: 100%;
    height: 100%;
}
</style>