<template>
  <div class="site-header container">
    <div class="site-header-burger mobile">
      <div @click="toggleBurger" class="button">
        <img src="../assets/img/menu-icon.svg" alt="">
      </div>
      <div v-if="isBurgerOpen" class="menu">
        <div @click="toggleList" class="menu-lang">
          <img :src="selectedLang.flag" alt=""/>
          <h3>{{ selectedLang.lang }}</h3>
          <img src="../assets/img/green-arrow-down.svg">
        </div>
        <div class="menu-close" @click="closeBurger">
          <img src="../assets/img/close-icon.svg" alt="">
        </div>
        <div class="menu-nav">
          <router-link to="/">
            Main
          </router-link>
          <a href="">
            About
          </a>
          <a href="">
            Contacts
          </a>
          <div class="menu-nav-submenu">
            <div @click="toggleMenu" class="menu-nav-submenu-button">
              <h3 >
                Partners
              </h3>
              <img 
                :style="{ transform: isMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform .3s ease-in-out' }"
                src="../assets/img/green-arrow-down.svg"
              >
            </div>
            <div v-if="isMenuOpen" @click="closeMenu" class="submenu">
              <a href="#">Affiliate program</a>
              <a href="#">API documentation<span>New</span></a>
            </div>
          </div>
          <a href="">
            How to use
          </a>
        </div>
      </div>
    </div>
    <div class="site-header-logo">
      <router-link to="/">
        <img src="../assets/img/site-logo.svg" alt="">
      </router-link>
    </div>
    <div class="site-header-nav">
      <a href="">How to use</a>
      <a href="">About</a>
      <a href="">Contact</a>
      <div class="menu">
        <div @click="toggleMenu" class="menu-button">
          <h3 :class="{ 'active': isMenuOpen }">Partners</h3>
          <img 
            :style="{ transform: isMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform .3s ease-in-out' }"
            src="../assets/img/green-arrow-down.svg"
          >
        </div>
        <div v-if="isMenuOpen" @click="closeMenu" class="menu-dropdown">
          <a href="#">Affiliate program</a>
          <a href="#">API documentation <span>New</span></a>
        </div>
      </div>
    </div>
    <div class="site-header-lang">
      <div @click="toggleList" class="button">
        <img :src="selectedLang.flag" alt=""/>
        <div :class="{ 'active': isListOpen }" class="button-title">
          <div class="desktop">{{ selectedLang.lang }}</div>
          <div class="mobile">{{ selectedLang.mob }}</div>
        </div>
        <img
          :style="{ transform: isListOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform .3s ease-in-out' }"
          src="../assets/img/green-arrow-down.svg"
          class="img desktop"
        >
      </div>
      <div v-if="isListOpen" class="list">
        <div class="list-button mobile" @click="closeList">
          <img src="../assets/img/close-icon.svg" alt="">
        </div>
        <div v-for="object in filteredObjects" :key="object.id" @click="selectLang(object)" class="list-item">
          <img :src="object.flag" alt=""/>
          {{ object.lang }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SiteHeader',
  data() {
    return {
      isMenuOpen: false,
      isListOpen: false,
      isBurgerOpen: false,
      selectedLang: {},
      langs: [
        {
          id: 1,
          lang: 'English',
          flag: require('@/assets/img/flags/en-flag.svg'),
          mob: 'EN'
        },
        {
          id: 2,
          lang: 'Русский',
          flag: require('@/assets/img/flags/ru-flag.svg'),
          mob: 'РУ'
        },
        {
          id: 3,
          lang: 'Deutsch',
          flag: require('@/assets/img/flags/de-flag.svg'),
          mob: 'DE'
        },
        {
          id: 4,
          lang: 'Español',
          flag: require('@/assets/img/flags/es-flag.svg'),
          mob: 'ES'
        },
        {
          id: 5,
          lang: 'Français',
          flag: require('@/assets/img/flags/fr-flag.svg'),
          mob: 'FR'
        },
        {
          id: 6,
          lang: 'Poland',
          flag: require('@/assets/img/flags/po-flag.svg'),
          mob: 'PO'
        },
        {
          id: 7,
          lang: 'Українська',
          flag: require('@/assets/img/flags/uk-flag.svg'),
          mob: 'УК'
        }
      ]
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
    toggleList() {
      this.isListOpen = !this.isListOpen;
    },
    selectLang(object) {
      this.selectedLang = object;
      this.isListOpen = false;
    },
    closeList() {
      this.isListOpen = false;
    },
    toggleBurger() {
      this.isBurgerOpen = !this.isBurgerOpen;
    },
    closeBurger() {
      this.isBurgerOpen = false;
    }
  },
  mounted() {
    if (this.langs.length > 0) {
      this.selectedLang = this.langs[0];
    }
  },
  computed: {
    filteredObjects() {
      return this.langs.filter(obj => obj.id !== this.selectedLang.id);
    },
  }
}
</script>

<style lang="scss">
@import "../assets/styles/components/site-header";
</style>