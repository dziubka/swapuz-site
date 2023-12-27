<template>
  <div class="hero-block">
    <div class="hero-block_content container">
      <div class="hero-block_content-head">
        <h2>
          Simple<br>
          exchange <span>1495+</span><br>
          cryptocurrencies
        </h2>
        <div class="desc">
          Fast crypto swaps with Web3 connection
        </div>
        <div class="reviews">
          See our 31 reviews on
          <img src="../../../assets/img/trustpilot.svg" alt="">
        </div>
        <div class="buttons">
          <div class="buttons-link">
            <img src="../../../assets/img/GooglePlay.svg" alt="">
          </div>
          <div class="buttons-link">
            <img src="../../../assets/img/AppStore.svg" alt="">
          </div>
        </div>
      </div>
      <div class="hero-block_content-exchange">
        <div class="head">
          <div class="head-title">
            Exchange
          </div>
          <div class="head-rate">
            <div class="head-rate_switch" @click="changeRate">
              <img :src="currentRate.icon" alt=""/>
              {{ currentRate.name }}
            </div>
            <div class="head-rate_support">
              <svg class="icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_662_752)">
                  <path d="M9.16406 5.83334H10.8307V7.5H9.16406V5.83334ZM9.16406 9.16667H10.8307V14.1667H9.16406V9.16667ZM9.9974 1.66667C5.3974 1.66667 1.66406 5.40001 1.66406 10C1.66406 14.6 5.3974 18.3333 9.9974 18.3333C14.5974 18.3333 18.3307 14.6 18.3307 10C18.3307 5.40001 14.5974 1.66667 9.9974 1.66667ZM9.9974 16.6667C6.3224 16.6667 3.33073 13.675 3.33073 10C3.33073 6.32501 6.3224 3.33334 9.9974 3.33334C13.6724 3.33334 16.6641 6.32501 16.6641 10C16.6641 13.675 13.6724 16.6667 9.9974 16.6667Z" fill="white" fill-opacity="0.38"/>
                </g>
                <defs>
                  <clipPath id="clip0_662_752">
                    <rect width="20" height="20" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
              <div class="info">
                The receipt amount will be adjusted until your deposit is confirmed
              </div>
            </div>
          </div>
        </div>
        <div class="inputs">
          <input type="text">
        </div>
        <div class="button">
          Exchange now
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroBlock',
  data() {
    return {
      currentIndex: 0,
      rates: [
        {
          id: 1,
          name: 'Floating rate',
          icon: require('@/assets/img/unlock_green.svg')
        },
        { 
          id: 2, 
          name: 'Fixed rate', 
          icon: require('@/assets/img/lock_green.svg')
        }
      ]
    }
  },
  methods: {
    changeRate() {
      this.currentIndex = (this.currentIndex + 1) % this.rates.length;
    }
  },
  computed: {
    currentRate() {
      return this.rates[this.currentIndex];
    }
  }
}
</script>

<style lang="scss">
@import "../../../assets/styles/pages/main-page/hero-block";
</style>