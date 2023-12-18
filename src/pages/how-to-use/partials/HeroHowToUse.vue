<template>
  <div class="hero-how-to-use container">
    <h1 class="title">
      How to use
    </h1>
    <div class="features">
      <div class="features-item" @click="scrollToObj1">
        <div class="text">
          <div class="text-title">How to swap coins</div>
          <div class="text-desc">Detailed description of the exchange process.</div>
        </div>
        <img src="../../../assets/img/AutoRenewBlack.svg" alt="">
      </div>
      <div class="features-item">
        <div class="text">
          <div class="text-title">Swap the networks of</div>
          <div class="text-desc">Simple swap in single network and swap between network</div>
        </div>
        <img src="../../../assets/img/RotateRightBlack.svg" alt="">
      </div>
      <div class="features-item" @click="scrollToObj2">
        <div class="text">
          <div class="text-title">Errors and fuckups</div>
          <div class="text-desc">Some cases that may occur as a last resort.</div>
        </div>
        <img src="../../../assets/img/DangerousBlack.svg" alt="">
      </div>
      <div class="features-item">
        <div class="text">
          <div class="text-title">Support</div>
          <div class="text-desc">Simple swap in single network and swap between network and tarampam pam</div>
        </div>
        <img src="../../../assets/img/SupportAgentBlack.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap/all';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export default {
  name: 'HeroHowToUse',
  methods: {
    scrollToObj1() {
      gsap.to(window, { duration: 1, scrollTo: '#object1', ease: 'power2.inOut' });
    },
    scrollToObj2() {
      gsap.to(window, { duration: 1, scrollTo: '#object2', ease: 'power2.inOut' });
    }
  }
}
</script>

<style lang="scss">
@import "../../../assets/styles/pages/how-to-use/hero-how-to-use";
</style>