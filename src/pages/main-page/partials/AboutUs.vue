<template>
  <div class="about-us container">
    <div class="about-us-content">
      <h2>Press about us</h2>
      <splide :options="options" ref="splide" class="slider">
        <splide-slide class="slider--slide">
          <img src="../../../assets/img/crypto_wisser-logo.svg" alt="">
          <div class="title">
            Swapuz: Use No-KYC Anonymous Crypto Exchange to Your Advantage
          </div>
          <div class="desc">
            "Using Swapuz to swap crypto to crypto without KYC is simple and without any hassles."
          </div>
        </splide-slide>
        <splide-slide class="slider--slide">
          <img src="../../../assets/img/yahoo_finance-logo.svg" alt="">
          <div class="title">
            Swapuz: Prioritizing Users to Shape a Brighter Crypto Future
          </div>
          <div class="desc">
            "Swapuz's team emphasizes their commitment to meeting users' needs as the driving force behind their operations, rather than simply pursuing their own success."
          </div>
        </splide-slide>
        <splide-slide class="slider--slide">
          <img src="../../../assets/img/benzinga-logo.svg" alt="">
          <div class="title">
            Swapuz crosses $150 million in total volume for its anonymous and no-sign-up swap platform
          </div>
          <div class="desc">
            "Swapuz is a crypto swap platform that was designed to preserve the complete anonymity of its users."
          </div>
        </splide-slide>
        <splide-slide class="slider--slide">
          <img src="../../../assets/img/crypto_is_coming-logo.svg" alt="">
          <div class="title">
            Crypto Is Coming
          </div>
          <div class="desc">
            "Swapuz's example is proof that crypto platforms can be transparent, convenient and, above all, trustworthy."
          </div>
        </splide-slide>
      </splide>
      <div class="slider-arrows">
        <div class="slider-arrows_arrow" @click="prevSlide">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_3310_245)"><path d="M12 20L13.41 18.59L7.83 13L20 13V11L7.83 11L13.41 5.41L12 4L4 12L12 20Z" fill="#1B1A1C"></path></g><defs><clipPath id="clip0_3310_245"><rect width="24" height="24" fill="white" transform="matrix(-1 0 0 -1 24 24)"></rect></clipPath></defs></svg>
        </div>
        <div class="slider-arrows_arrow" @click="nextSlide">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_3310_241)"><path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="#1B1A1C"></path></g><defs><clipPath id="clip0_3310_241"><rect width="24" height="24" fill="white"></rect></clipPath></defs></svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

export default {
  name: 'AboutUs',
  components: {
    Splide,
    SplideSlide
  },
  data() {
    return {
      options: {
        pagination: false,
        arrows: false,
        isNavigation: true,
        perPage: 3,
        gap: 16,
        type: 'loop',
        focus: 'center',
      }
    }
  },
  methods: {
    prevSlide() {
      if (this.$refs.splide) {
        this.$refs.splide.go('-1');
      }
    },
    nextSlide() {
      if (this.$refs.splide) {
        this.$refs.splide.go('+1');
      }
    }
  }
}
</script>

<style lang="scss">
@import "../../../assets/styles/pages/main-page/about-us";
</style>