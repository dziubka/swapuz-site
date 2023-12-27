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
          title: 'Fastest 2-10 min exchanges',
          desc: 'Swapuz has established itself as one of the fastest providers, so your swaps will be instant.',
          icon: require('@/assets/img/timer-icon.svg')
        },
        {
          title: 'High exchange limits',
          desc: "The Swapuz platform has secured the opportunity for extremely large swaps, finding our limits is hard.",
          icon: require('@/assets/img/auto_graph-icon.svg')
        },
        {
          title: 'Online support 24/7',
          desc: 'Our users have the ability to contact our experts for support through any convenient means.',
          icon: require('@/assets/img/support_agent-icon.svg')
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import "../../../assets/styles/pages/main-page/plates-block";
</style>