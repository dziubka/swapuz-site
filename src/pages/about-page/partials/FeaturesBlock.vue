<template>
  <div class="features-block container">
    <div class="features-block-items">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="item"
      >
        <div class="item-text">
          <h2 v-html="item.title"></h2>
          <h4>
            {{ item.desc }}
          </h4>
        </div>
        <div class="item-img">
          <img :src="item.img" class="hidden" alt=""/>
          <img :src="item.mob" class="show" alt=""/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeaturesBlock',
  data () {
    return {
      items: [
        {
          title: 'We are <span>technologies</span>',
          desc: 'Our team was the first on the market to develop and implement unique multi-channel exchange capabilities between CEX and DEX with calculation of all possible details. Our users do not need to manually conduct numerous exchanges to buy, sell, trade and invest tokens that have not yet listed on major CEX or are going to stay exclusively on DEX platforms, as proven Swapuz algorithms have come to the rescue to save your precious time and simplify this process.',
          img: require('@/assets/img/about-technologies.png'),
          mob: require('@/assets/img/about-technologies-mob.png')
        },
        {
          title: 'We are <span>safety</span>',
          desc: 'Swapuz is half a DeFi project and half a custodial solution, so we strive to comply with all morally correct regulations in order to provide protection and security to users, which is one of the main priorities of our team, and to continue to develop the blockchain industry primarily in terms of technology and capabilities, which is why we have implemented advanced tools to keep all the above aspects and privacy of our customers',
          img: require('@/assets/img/about-safety.png'),
          mob: require('@/assets/img/about-safety-mob.png')
        },
        {
          title: 'We are <span>stability</span>',
          desc: 'Swapuz has ensured that all algorithms and systems are fully tested so that users do not have errors and misunderstandings while using the products. We also provide 24/7 customer support in the most convenient way and we remain partial to any question, you can be sure you are contacting a live expert who is competent in Swapuz services and blockchain technologies. Your every message and action is the most important experience for us.',
          img: require('@/assets/img/about-stability.png'),
          mob: require('@/assets/img/about-stability-mob.png')
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import "../../../assets/styles/pages/about-page/features-block";
</style>