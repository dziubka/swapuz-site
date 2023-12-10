<template>
  <div class="hero-how-to-use container">
    <h1 class="title">
      How to use
    </h1>
    <div class="features">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="features-item"
      >
        <div class="text">
          <div class="text-title">{{ item.title }}</div>
          <div class="text-desc">{{ item.desc }}</div>
        </div>
        <img :src="item.icon" alt=""/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroHowToUse',
  data () {
    return {
      items: [
        {
          title: 'How to swap coins',
          desc: 'Detailed description of the exchange process.',
          icon: require('@/assets/img/AutoRenewBlack.svg')
        },
        {
          title: 'Swap the networks of',
          desc: 'Simple swap in single network and swap between network',
          icon: require('@/assets/img/RotateRightBlack.svg')
        },
        {
          title: 'Errors and fuckups',
          desc: 'Some cases that may occur as a last resort.',
          icon: require('@/assets/img/DangerousBlack.svg')
        },
        {
          title: 'Support',
          desc: 'Simple swap in single network and swap between network and tarampam pam',
          icon: require('@/assets/img/SupportAgentBlack.svg')
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import "../../../assets/styles/pages/how-to-use/hero-how-to-use";
</style>