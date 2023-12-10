<template>
  <main-layout>
    <template #content>
      <hero-block/>
      <plates-block/>
      <features-block/>
      <partner-list/>
      <technical-partners/>
      <whats-up/>
    </template>
  </main-layout>
</template>

<script>
import MainLayout from '../../layouts/MainLayout.vue'
import HeroBlock from '../../pages/about-page/partials/HeroBlock.vue'
import PlatesBlock from '../../pages/about-page/partials/PlatesBlock.vue'
import FeaturesBlock from '../../pages/about-page/partials/FeaturesBlock.vue'
import PartnerList from '../../pages/main-page/partials/PartnerList.vue'
import TechnicalPartners from '../../pages/main-page/partials/TechnicalPartners.vue'
import WhatsUp from '../../pages/about-page/partials/WhatsUp.vue'

export default {
  name: 'AboutPage',
  components: {
    MainLayout,
    HeroBlock,
    PlatesBlock,
    FeaturesBlock,
    PartnerList,
    TechnicalPartners,
    WhatsUp
  }
}
</script>

<style>

</style>