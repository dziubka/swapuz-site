<template>
  <div class="plates-block container">
    <div class="plates-block-items">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="item"
      >
        <div class="item-text">
          <h3 class="item-text_title">
            {{ item.title }}
          </h3>
          <div class="item-text_desc">
            {{ item.desc }}
          </div>
        </div>
        <div>
          <img :src="item.icon" alt=""/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlatesBlock',
  data () {
    return {
      items: [
        {
          title: '1000000+ transactions',
          desc: 'Swapuz provides the best exchange rate and transparent fee structure with no hidden fee.',
          icon: require('@/assets/img/move_up-icon.svg')
        },
        {
          title: '11387 users trust us',
          desc: "Users stay with us as Swapuz strives to meet and support everyone's unique needs",
          icon: require('@/assets/img/switch_account-icon.svg')
        },
        {
          title: '48 patrners growth with us',
          desc: 'Swapuz offers comprehensive solutions and set of tools to meet the needs of partners',
          icon: require('@/assets/img/business_center-icon.svg')
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import "../../../assets/styles/pages/about-page/plates-block";
</style>