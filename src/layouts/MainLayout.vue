<template>
  <site-header/>
  <slot name="content"/>
  <site-footer/>
</template>

<script>
import SiteHeader from '../components/SiteHeader.vue';
import SiteFooter from '../components/SiteFooter.vue';

export default {
  name: 'MainLayout',
  components: { SiteHeader, SiteFooter}
}
</script>

<style>

</style>