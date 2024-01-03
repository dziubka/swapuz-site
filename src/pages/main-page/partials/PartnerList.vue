<template>
  <div class="partner-list">
    <h2 class="partner-list-title">
      Join our<br class="show"> partner list
      <div class="button hidden">
        Join now
      </div>
    </h2>
    <div class="partner-list-carousel">
      <splide :options="options1" class="slider">
        <splide-slide v-for="slide, index in slides" :key="index" class="slider-slide">
          <img :src="slide.logo" alt=""/>
        </splide-slide>
      </splide>
      <splide :options="options2">
        <splide-slide v-for="slide, index in slides" :key="index" class="slider-slide">
          <img :src="slide.logo" alt=""/>
        </splide-slide>
      </splide>
      <div class="shadow before"/>
      <div class="shadow after"/>
    </div>
    <div class="button_container show">
      <div class="button">
       Join now
      </div>
    </div>
  </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

export default {
  name: 'PartnerList',
  components: {
    Splide,
    SplideSlide
  },
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
      ],
      options1: {
        pagination: false,
        arrows: false,
        rewind: true,
        type: 'loop',
        drag: false,
        focus: 'center',
        perPage: 2,
        gap: 16,
        start: 0,
        easing: 'ease'
      },
      options2: {
        pagination: false,
        arrows: false,
        rewind: true,
        type: 'loop',
        drag: false,
        focus: 'center',
        gap: 16,
        start: 1.5,
        easing: 'ease'
      }
    }
  }
}
</script>

<style lang="scss">
@import "../../../assets/styles/pages/main-page/partner-list";
</style>