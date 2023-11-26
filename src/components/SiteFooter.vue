<template>
  <div class="site-footer">
    <div class="container">
      <div class="site-footer-main">
        <div class="hero">
          <router-link to="/">
            <img src="../assets/img/site-logo.svg" class="hidden" alt="">
            <img src="../assets/img/site-logo-mob.svg" class="show" alt="">
          </router-link>
          <div class="hero-desc">
            Do you want to make operations with Swapuz as handy as possible? Add it to bookmarks in one click!
          </div>
        </div>
        <div class="nav">
          <div class="nav-links">
            <div class="nav-links-column">
              <h3>Company</h3>
              <router-link :to="{name: 'About'}">
                About
              </router-link>
              <router-link :to="{name: 'Contacts'}">
                Contacts
              </router-link>
            </div>
            <div class="nav-links-column">
              <h3>Support</h3>
              <router-link :to="{name: 'How to use'}">
                How to use
              </router-link>
              <a href="#">FAQ</a>
            </div>
          </div>
          <div class="nav-socials">
            <h3>Follow Us</h3>
            <div class="nav-socials-icons">
              <a href="#">
                <img src="../assets/img/facebook-icon.svg" alt="">
              </a>
              <a href="#">
                <img src="../assets/img/twitter-icon.svg" alt="">
              </a>
              <a href="#">
                <img src="../assets/img/telegram-icon.svg" alt="">
              </a>
              <a href="#">
                <img src="../assets/img/youtube-icon.svg" alt="">
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="site-footer-copyright">
        <div class="text">
          Copyright © 2020 - 2023 Swapuz!
        </div>
        <div class="links">
          <a href="">Term of Use</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SiteFooter'
}
</script>

<style lang="scss">
@import "../assets/styles/components/site-footer";
</style>