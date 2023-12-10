<template>
  <div class="partner-list">
    <h2 class="partner-list-title">
      Join our<br class="show"> partner list
    </h2>
    <div class="partner-list-carousel">
      carousel
    </div>
  </div>
</template>

<script>
export default {
  name: 'PartnerList',
  data() {
    return {
      slides: [
        { logo: require('@/assets/img/SwapzoneLogo.svg') },
        { logo: require('@/assets/img/SwapSpaceLogo.svg') },
        { logo: require('@/assets/img/TrocadorLogo.svg') },
        { logo: require('@/assets/img/MonerojLogo.svg') },
        { logo: require('@/assets/img/EdgeLogo.svg') },
        { logo: require('@/assets/img/OmegaLogo.svg') },
        { logo: require('@/assets/img/ArkLogo.svg') },
        { logo: require('@/assets/img/PivxLogo.svg') },
        { logo: require('@/assets/img/BestChangeLogo.svg') },
        { logo: require('@/assets/img/OnezIoLogo.svg') }
      ]
    }
  }
}
</script>

<style lang="scss">
@import "../../../assets/styles/pages/main-page/partner-list";
</style>