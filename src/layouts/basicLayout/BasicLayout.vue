<script setup>
import Layer from '@/components/layer/Layer.vue';
import Nav from './components/nav/Nav.vue';
</script>

<template>
  <Layer :index="1000" :fullscreen="false">
    <!-- nav layer -->
    <Nav />
    <!-- router-view is placeholder for nested route -->
    <router-view></router-view>
  </Layer>
  <Layer :index="1">
    <!-- background layer -->
    <div class="background"></div>
  </Layer>
  <Layer :index="10000">
    <div id="configurator" class="configurator"></div>
  </Layer>
</template>

<style scoped>
.background {
  width: 100%;
  height: 100%;
  background: #efefef url('@/assets/bg-3.png');
}
.configurator {
  width: 100%;
  height: 100%;
  visibility: hidden;
}
.configurator * {
  visibility: visible;
}
</style>
