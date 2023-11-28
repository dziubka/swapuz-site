<template>
  <main-layout>
    <template #content>
      <hero-block/>
      <plates-block/>
      <features-block/>
    </template>
  </main-layout>
</template>

<script>
import MainLayout from '../../layouts/MainLayout.vue'
import HeroBlock from '../../pages/about-page/partials/HeroBlock.vue'
import PlatesBlock from '../../pages/about-page/partials/PlatesBlock.vue'
import FeaturesBlock from '../../pages/about-page/partials/FeaturesBlock.vue'

export default {
  name: 'AboutPage',
  components: {
    MainLayout,
    HeroBlock,
    PlatesBlock,
    FeaturesBlock
  }
}
</script>

<style>

</style>