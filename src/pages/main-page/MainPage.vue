<template>
  <main-layout>
    <template #content>
      <hero-block/>
      <plates-block/>
      <currency-block/>
    </template>
  </main-layout>
</template>

<script>
import MainLayout from '../../layouts/MainLayout.vue'
import HeroBlock from './partials/HeroBlock.vue'
import PlatesBlock from './partials/PlatesBlock.vue'
import CurrencyBlock from './partials/CurrencyBlock.vue'

export default {
  name: 'MainPage',
  components: {
    MainLayout,
    HeroBlock,
    PlatesBlock,
    CurrencyBlock
  }
}
</script>

<style>

</style>