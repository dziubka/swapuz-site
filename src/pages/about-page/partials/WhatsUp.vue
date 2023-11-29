<template>
  <div class="container">
    <div v-if="isBlockOpen" class="whats-up">
      <div class="whats-up-text">
        <div class="whats-up-text_title">
          What's Up?
        </div>
        <div class="whats-up-text_desc">
          Is everything complicated and you need help?
        </div>
      </div>
      <div class="whats-up-button">
        <img src="../../../assets/img/support_agent_white.svg" alt="">
        <div class="whats-up-button_text">
          Get support
        </div>
      </div>
      <div class="whats-up-img">
        <img src="../../../assets/img/hipsterAvatar.png" alt="">
      </div>
      <div @click="closeBlock" class="whats-up-close">
        <img @click="closeBlock" src="../../../assets/img/close_white.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WhatsUp',
  data () {
    return {
      isBlockOpen: true,
    }
  },
  methods: {
    closeBlock() {
      this.isBlockOpen = false;
    },
  }
}
</script>

<style lang="scss">
@import "../../../assets/styles/pages/about-page/whats-up";
</style>