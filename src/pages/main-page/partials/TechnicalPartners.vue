<template>
  <div class="technical-partners container">
    <h3 class="technical-partners-title">
      TECHNICAL PARTNERS
    </h3>
    <div class="technical-partners-block">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="item"
      >
        <img :src="item.logo" alt=""/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TechnicalPartners',
  data () {
    return {
      items: [
        { logo: require('@/assets/img/HuobiLogo.svg') },
        { logo: require('@/assets/img/KucoinLogo.svg') },
        { logo: require('@/assets/img/WhiteBitLogo.svg') },
        { logo: require('@/assets/img/GateIoLogo.svg') },
        { logo: require('@/assets/img/OkxLogo.svg') },
        { logo: require('@/assets/img/GetBlockLogo.svg') }
      ]
    }
  }
}
</script>

<style lang="scss">
@import "../../../assets/styles/pages/main-page/technical-partners";
</style>