<template>
  <main-layout>
    <template #content>
      <error-block/>
    </template>
  </main-layout>
</template>

<script>
import MainLayout from '../../layouts/MainLayout.vue'
import ErrorBlock from './partials/ErrorBlock.vue'

export default {
  name: 'ErrorPage',
  components: {
    MainLayout,
    ErrorBlock
  }
}
</script>

<style>

</style>