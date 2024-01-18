<template>
  <div class="partner-list">
    <h2 class="partner-list_title">
      Join our<br class="show"> partner list
      <div class="button hidden">
        Join now
      </div>
    </h2>
    <div class="partner-list_carousel">
      <div class="slider">
        <splide ref="splide1" :options="options1" :extensions="extensions">
          <splide-slide v-for="slide, index in slides" :key="index" class="slider--item">
            <a href="#" target="_blank">
              <img :src="slide.logo" alt=""/>
            </a>
          </splide-slide>
        </splide>
      </div>
      <div class="slider">
        <splide ref="splide2" :options="options2" :extensions="extensions">
          <splide-slide v-for="slide, index in slides" :key="index" class="slider--item">
            <a href="#" target="_blank">
              <img :src="slide.logo" alt=""/>
            </a>
          </splide-slide>
        </splide>
      </div>
      <div class="gradient before"/>
      <div class="gradient after"/>
    </div>
    <div class="container show">
      <div class="button">
       Join now
      </div>
    </div>
  </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

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
      ]
    }
  },
  setup() {
    const options1 = {
      pagination: false,
      arrows: false,
      rewind: true,
      type: 'loop',
      drag: false,
      focus: 'center',
      perPage: 2,
      gap: 16,
      start: 0,
      easing: 'ease',
      autoScroll: {
        speed: 1,
        pauseOnHover: false
      },
      breakpoints: {
        1080: {
          autoScroll: {
            speed: 0.5,
          }
        }
      }
    };
    const options2 = {
      pagination: false,
      arrows: false,
      rewind: true,
      type: 'loop',
      drag: false,
      focus: 'center',
      gap: 16,
      start: 1.5,
      easing: 'ease',
      autoScroll: {
        speed: 1,
        pauseOnHover: false,
      },
      breakpoints: {
        1080: {
          autoScroll: {
            speed: 0.5,
          }
        }
      }
    };
    return {
      options1: options1,
      options2: options2,
      extensions: {
        AutoScroll
      }
    };
  }
}
</script>

<style lang="scss">
@import "../../../assets/styles/pages/main-page/partner-list";
</style>