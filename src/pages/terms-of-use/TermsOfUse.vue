<template>
  <main-layout>
    <template #content>
      <div class="terms-of-use container">
        <div class="terms-of-use-bg">
          <text-terms-of-use/>
          <router-link to="terms-of-use-print" target="_blank" class="button-print">
            <img src="../../assets/img/print_white_icon.svg" alt="">
          </router-link>
          <router-link to="/" class="button-back">
            Back to main
            <img src="../../assets/img/arrow_right_white.svg" alt="">
          </router-link>
        </div>
      </div>
    </template>
  </main-layout>
</template>

<script>
import MainLayout from '../../layouts/MainLayout.vue'
import TextTermsOfUse from './partials/TextTermsOfUse.vue'

export default {
  name: 'TermsOfUse',
  components: {
    MainLayout,
    TextTermsOfUse
  }
}
</script>

<style lang="scss">
@import "../../assets/styles/pages/terms-of-use/terms-of-use";
</style>