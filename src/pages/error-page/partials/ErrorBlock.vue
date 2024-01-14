<template>
  <div class="error-block">
    <img src="../../../assets/img/ghostImg.svg" alt="">
    <h1>404</h1>
    <div class="error-block_desc">
      Page not found<br>
      The page you are looking for no longer exists
    </div>
    <router-link to="/" class="error-block_button">
      Back to main
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'ErrorBlock'
}
</script>

<style lang="scss">
@import "../../../assets/styles/pages/error-page/error-block";
</style>