<template>
  <div class="Time" ref="Time"></div>
</template>

<script>
import {option} from '../../../EChartsData/TimeData.js'
export default {
  mounted() {
    let eCharts = this.echarts.init(this.$refs.Time);

    let timeUpdatedStatus = {
      second: false,
      minute: false,
      hour: false,
    };

    function updateSeries(time, series, type) {
      var isCritical =
        Math.floor(time) === 0 || (type === "second" && time === 1);
      if (isCritical && timeUpdatedStatus[type] === true) {
        timeUpdatedStatus[type] = false;
        series.data[0].value = 0;
        series.clockwise = true;
        option.animationDurationUpdate = 0;
        eCharts.setOption(option, true);
      }
      series.data[0].value = time;
      series.clockwise = true;
      if (time === 0) {
        timeUpdatedStatus[type] = true;
        series.clockwise = false;
      }
    }

    setInterval(function () {
      var date = new Date();
      var second = date.getSeconds();
      var minute = date.getMinutes() + second / 60;
      var hour = (date.getHours() % 12) + minute / 60;

      updateSeries(second, option.series[2], "second");
      updateSeries(minute, option.series[1], "minute");
      updateSeries(hour, option.series[0], "hour");

      option.animationDurationUpdate = 300;
      eCharts.setOption(option, true);
      date = null;
    }, 1000);

    eCharts.setOption(option);
  },
};
</script>

<style lang="less" scoped>
.Time{
    width: 100%;
    height: 100%;
}
</style>