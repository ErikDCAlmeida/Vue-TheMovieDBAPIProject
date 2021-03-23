<template>
  <div class="app">
    <Header />
    <SearchArea />
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import SearchArea from "@/components/SearchArea.vue";

export default {
  name: "Home",
  components: {
    Header,
    SearchArea,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*background-color: #000000;*/
}
</style>
