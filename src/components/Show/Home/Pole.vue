<template>
    <div class="pole" ref="Pole">
    </div>
</template>

<script>
import {option} from '../../../EChartsData/PoleData.js'
    export default {
        mounted () {
            let eCharts = this.echarts.init(this.$refs.Pole);
            eCharts.setOption(option);
        },
    }
</script>

<style lang="less" scoped>
.pole{
    width: 100%;
    height: 100%;
}
</style>