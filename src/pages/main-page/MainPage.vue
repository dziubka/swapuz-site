<template>
  <main-layout>
    <template #content>
      <hero-block/>
      <plates-block/>
    </template>
  </main-layout>
</template>

<script>
import MainLayout from '../../layouts/MainLayout.vue'
import HeroBlock from './partials/HeroBlock.vue'
import PlatesBlock from './partials/PlatesBlock.vue'

export default {
  name: 'MainPage',
  components: {
    MainLayout,
    HeroBlock,
    PlatesBlock
  }
}
</script>

<style>

</style>