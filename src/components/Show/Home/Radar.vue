<template>
    <div class="radar" ref="radar">

    </div>
</template>

<script>
import { option } from '../../../EChartsData/RadarData';
    export default {
        mounted() {
            let eCharts = this.echarts.init(this.$refs.radar);


            eCharts.setOption(option)
        },
    }
</script>

<style lang="less" scoped>
.radar{
    width: 100%;
    height: 100%;
}
</style>