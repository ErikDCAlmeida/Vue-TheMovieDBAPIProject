<template>
  <div class="home">
    <SearchArea />
    <div class="areaHome">
      <h1>Página inicial!</h1>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchArea from "@/components/SearchArea.vue";

export default {
  name: "Home",
  components: {
    SearchArea,
  },
};
</script>

<style scoped>
.areaHome {
  width: 100%;
  max-width: 1200px;
  margin: auto;
}
</style>