<template>
  <main-layout>
    <template #content>
      <hero-block/>
      <plates-block/>
      <currency-block/>
      <video-block/>
      <about-us/>
      <partner-list/>
      <technical-partners/>
      <whats-up/>
    </template>
  </main-layout>
</template>

<script>
import MainLayout from '../../layouts/MainLayout.vue'
import HeroBlock from './partials/HeroBlock.vue'
import PlatesBlock from './partials/PlatesBlock.vue'
import CurrencyBlock from './partials/CurrencyBlock.vue'
import VideoBlock from '../../pages/main-page/partials/VideoBlock.vue'
import AboutUs from '../../pages/main-page/partials/AboutUs.vue'
import PartnerList from '../../pages/main-page/partials/PartnerList.vue'
import TechnicalPartners from '../../pages/main-page/partials/TechnicalPartners.vue'
import WhatsUp from '../../pages/about-page/partials/WhatsUp.vue'

export default {
  name: 'MainPage',
  components: {
    MainLayout,
    HeroBlock,
    PlatesBlock,
    CurrencyBlock,
    VideoBlock,
    AboutUs,
    PartnerList,
    TechnicalPartners,
    WhatsUp
  }
}
</script>

<style>

</style>