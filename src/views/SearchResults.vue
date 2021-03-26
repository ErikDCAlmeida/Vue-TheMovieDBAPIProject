<template>
  <h1>Seus resultados para: "{{ route }}"</h1>
</template>

<script>
import { useRoute } from "vue-router";

export default {
  name: "SearchResults",
  data() {
    return {
      moviesResults: {},
    };
  },
  created() {
    this.moviesResults = this.$route.params.result;
    console.log(this.$route.params.result);
  },
  setup() {
    const route = useRoute().params.id;

    return {
      route,
    };
  },
};
</script>

<style></style>
