<template>
  <div class="areaSearch">
    <div
      v-if="pathMovieImage != urlError"
      class="containerSearch"
      :style="{
        backgroundImage: 'url(' + pathMovieImage + ')',
      }"
    >
      <div class="bgSearch">
        <div class="textSearch">
          <h1>Bem vindo(a)!</h1>
          <h2>
            Informações sobre seus filmes e séries favoritos você encontra aqui!
          </h2>
        </div>
        <div class="areaSearchMovie">
          <input
            id="search"
            type="text"
            name="search"
            placeholder="Digite o filme que deseja encontrar!"
            v-model="search"
            autocomplete="off"
          />
          <router-link @click="searchMovies()" :to="'/searchresults/' + search">
            Pesquisar</router-link
          >
        </div>
      </div>
    </div>
    <div
      v-else
      class="containerSearch"
      :style="{
        backgroundImage: 'url(../assets/imageDefaultBanner.jpg)',
      }"
    >
      <div class="bgSearch">
        <div class="textSearch">
          <h1>Bem vindo(a)!</h1>
          <h2>
            Informações sobre seus filmes e séries favoritos você encontra aqui!
          </h2>
        </div>
        <div class="areaSearchMovie">
          <input
            id="search"
            type="text"
            name="search"
            placeholder="Digite o filme que deseja encontrar!"
            v-model="search"
            autocomplete="off"
          />
          <router-link @click="searchMovies()" :to="'/searchresults/' + search">
            Pesquisar</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onBeforeMount } from "vue";
import ApiKey from "@/ApiKey.js";

export default {
  data() {
    return {
      urlError: "http://image.tmdb.org/t/p/originalnull",
    };
  },
  setup() {
    const search = ref("");
    const pathMovieImage = ref("");

    const searchMovies = () => {
      if (search.value != "") {
        this.$router.push({
          path: "/searchresults/" + search.value,
        });
      }
    };

    const randomPage = Math.floor(Math.random() * (500 - 2) + 2);
    onBeforeMount(
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey.apikey}&language=pt-BR&page=${randomPage}`
      )
        .then((response) => response.json())
        .then((data) => {
          pathMovieImage.value =
            "http://image.tmdb.org/t/p/original" +
            data.results.shift().backdrop_path;
        })
    );

    return {
      search,
      searchMovies,
      pathMovieImage,
    };
  },
};
</script>

<style scoped>
.areaSearch {
  height: 500px;
}
.containerSearch {
  height: inherit;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  display: flex;
  background-size: cover;
  background-position: center;
}
.bgSearch {
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  padding: 0px 30px;
}
.textSearch {
  width: 100%;
}
h1 {
  color: #fff;
  font-size: 70px;
  margin-bottom: 0px;
}
h2 {
  color: #fff;
}
.areaSearchMovie {
  width: 100%;
  display: flex;
  align-items: center;
}
input {
  border: 0 none;
  outline: 0 none;
  padding: 15px;
  flex: 1;
  font-size: 15px;
  background-color: #fff;
  border-radius: 20px 0px 0px 20px;
}
a {
  height: 100%;
  width: 110px;
  border-radius: 0px 20px 20px 0px;
  background-color: #ff0000;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
</style>
