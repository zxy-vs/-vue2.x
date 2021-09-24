<template>
  <div class="map3d" ref="Map3D"></div>
</template>

<script>
import Map3d from '../../../EChartsData/3DeChartsData/Map3d.json'
export default {
  mounted() {
    let eCharts = this.echarts.init(this.$refs.Map3D);
    this.echarts.registerMap("buildings", Map3d);

    var regions = Map3d.features.map(function (feature) {
      return {
        name: feature.properties.name,
        value: Math.max(Math.sqrt(feature.properties.height), 0.1),
        height: Math.max(Math.sqrt(feature.properties.height), 0.1),
      };
    });

    eCharts.setOption({
      series: [
        {
          type: "map3D",
          map: "buildings",
          shading: "realistic",
          realisticMaterial: {
            roughness: 0.6,
            textureTiling: 20,
            detailTexture: require('../../../../public/static/3Decharts/Map3d1.jpg'),
          },
          postEffect: {
            enable: true,
            bloom: {
              enable: false,
            },
            SSAO: {
              enable: true,
              quality: "medium",
              radius: 10,
              intensity: 1.2,
            },
            depthOfField: {
              enable: false,
              focalRange: 5,
              fstop: 1,
              blurRadius: 6,
            },
          },
          groundPlane: {
            show: true,
            color: "#333",
          },
          light: {
            main: {
              intensity: 6,
              shadow: true,
              shadowQuality: "high",
              alpha: 30,
            },
            ambient: {
              intensity: 0,
            },
            ambientCubemap: {
              texture: '../../../EChartsData/3DeChartsData/Map3d.hdr',
              exposure: 2,
              diffuseIntensity: 1,
              specularIntensity: 1,
            },
          },
          viewControl: {
            minBeta: -360,
            maxBeta: 360,
          },

          itemStyle: {
            areaColor: "#666",
          },

          label: {
            color: "white",
          },

          silent: true,

          instancing: true,

          boxWidth: 200,
          boxHeight: 1,

          data: regions,
        },
      ],
    });
  },
};
</script>

<style lang="less" scoped>
.map3d{
    width: 100%;
    height: 100%;
}
</style>