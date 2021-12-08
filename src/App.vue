<template>
  <div id="app">
    <router-view />
    <Footer />
  </div>
</template>
<script>
// @ is an alias to /src
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Footer,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
 