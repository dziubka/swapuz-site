<template>
  <main-layout>
    <template #content>
      <hero-how-to-use/>
      <features-how-to-use/>
      <video-block/>
    </template>
  </main-layout>
</template>

<script>
import MainLayout from '../../layouts/MainLayout.vue'
import HeroHowToUse from './partials/HeroHowToUse.vue'
import FeaturesHowToUse from './partials/FeaturesHowToUse.vue'
import VideoBlock from '../../pages/main-page/partials/VideoBlock.vue'

export default {
  name: 'HowToUse',
  components: {
    MainLayout,
    HeroHowToUse,
    FeaturesHowToUse,
    VideoBlock
  }
}
</script>

<style>

</style>