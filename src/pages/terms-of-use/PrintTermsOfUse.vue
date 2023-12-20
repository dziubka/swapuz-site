<template>
  <div class="print-terms-of-use">
    <div class="container">
      <div class="header">
        <img src="../../assets/img/printLogo.svg" alt="">
      </div>
      <text-terms-of-use/>
      <div class="footer">
        <img src="../../assets/img/printLogo.svg" alt="">
      </div>
      <div class="copyright">
          Copyright © 2020 - 2023 Swapuz!
      </div>
      <div class="button">
        Print
        <img src="../../assets/img/arrow_right_white.svg" alt="">
      </div>
      <div class="button_mob">
        <img src="../../assets/img/print_white_icon.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import TextTermsOfUse from './partials/TextTermsOfUse.vue'

export default {
  name: 'PrintTermsOfUse',
  components: {
    TextTermsOfUse
  }
}
</script>

<style lang="scss">
@import "../../assets/styles/pages/terms-of-use/print-terms-of-use";
</style>