<template>
  <div class="about-us container">
    <div class="about-us-content">
      <h2 class="title">Press about us</h2>
      <splide :options="options" class="slider">
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
        rewind: true,
        type: 'loop',
        perPage: 3,
        gap: 16,
        start: 0,
        easing: 'ease'
      }
    }
  }
}
</script>

<style lang="scss">
@import "../../../assets/styles/pages/main-page/about-us";
</style>