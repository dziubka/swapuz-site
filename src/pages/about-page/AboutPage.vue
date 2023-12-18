<template>
  <main-layout>
    <template #content>
      <hero-about/>
      <plates-about/>
      <features-block/>
      <partner-list/>
      <technical-partners/>
      <whats-up/>
    </template>
  </main-layout>
</template>

<script>
import MainLayout from '../../layouts/MainLayout.vue'
import HeroAbout from './partials/HeroAbout.vue'
import PlatesAbout from './partials/PlatesAbout.vue'
import FeaturesBlock from '../../pages/about-page/partials/FeaturesBlock.vue'
import PartnerList from '../../pages/main-page/partials/PartnerList.vue'
import TechnicalPartners from '../../pages/main-page/partials/TechnicalPartners.vue'
import WhatsUp from '../../pages/about-page/partials/WhatsUp.vue'

export default {
  name: 'AboutPage',
  components: {
    MainLayout,
    HeroAbout,
    PlatesAbout,
    FeaturesBlock,
    PartnerList,
    TechnicalPartners,
    WhatsUp
  }
}
</script>

<style>

</style>