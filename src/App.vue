<template>
  <div id="app">
   <TheHeader></TheHeader>
   <TheContent></TheContent>
   <TheFooter></TheFooter>
  </div>
</template>

<script>
//#region
import TheHeader from './components/layout/TheHeader.vue';
import TheContent from './components/layout/TheContent.vue';
import TheFooter from './components/layout/TheFooter.vue';
export default {
  name: 'App',
  components: {
    TheHeader,
    TheContent,
    TheFooter,
  }
}
</script>

<style>
</style>
