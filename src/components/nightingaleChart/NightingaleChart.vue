<script setup>
import * as echarts from 'echarts';
import { shallowRef, watch } from 'vue';

const chartRef = shallowRef(null);

const renderChart = () => {
  const chart = echarts.init(chartRef.value);

  const option = {
    // fill in your chart options here
    legend: {
      top: 'bottom',
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    series: [
      {
        name: 'Nightingale Chart',
        type: 'pie',
        radius: [50, 250],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8,
        },
        data: [
          { value: 40, name: 'rose 1' },
          { value: 38, name: 'rose 2' },
          { value: 32, name: 'rose 3' },
          { value: 30, name: 'rose 4' },
          { value: 28, name: 'rose 5' },
          { value: 26, name: 'rose 6' },
          { value: 22, name: 'rose 7' },
          { value: 18, name: 'rose 8' },
        ],
      },
    ],
  };

  chart.setOption(option);
};

watch(chartRef, (newVal, oldVal) => {
  if (newVal && newVal.clientHeight > 0) {
    setTimeout(() => {
      renderChart();
    }, 0);
  }
});
</script>

<template>
  <div
    class="chart-container"
    ref="chartRef"
    v-stagger="{
      group: 'chart2',
      options: {
        x: '400%',
        stagger: {
          grid: [4, 3],
          from: 'random',
          amount: 1,
          ease: 'ease.inOut',
        },
      },
    }"
  ></div>
</template>

<style scoped>
.chart-container {
  width: 100%;
  height: 100%;
}
</style>
