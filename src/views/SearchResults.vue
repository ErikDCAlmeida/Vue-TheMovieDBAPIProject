<template>
  <div class="containerSearch">
    <h1>Seus resultados para: "{{ searchResult }}"</h1>
    <div class="mainArea">
      <div class="btnSeeLess">
        <button
          type="button"
          @click="
            seeLessOnePage();
            forceTheRenderElement();
          "
        >
          <div class="arrowLess"></div>
        </button>
      </div>
      <div class="areaResult" :key="elementToRerender">
        <div
          class="movie"
          v-for="movie in moviesResultSearch"
          :key="'movie-' + movie.title"
        >
          <router-link :to="'/movie/' + movie.id">
            <div class="imgMovie">
              <img
                v-if="movie.poster_path != null"
                :src="path + movie.poster_path"
                :alt="'imageMovie-' + movie.title"
              />
              <img
                v-else
                src="../assets/noImageAvailable.jpg"
                alt="imageMovie-noImageMovie"
              />
            </div>
            <div class="titleMovie">{{ movie.title }}</div>
            <div class="rate">
              <div
                v-if="Math.floor(movie.vote_average * 10) != 0"
                class="rateBarPercent"
                :style="{
                  backgroundColor: '#ff0000',
                  width: Math.floor(movie.vote_average * 10) + '%',
                  height: '16px',
                  borderRadius: '15px',
                  display: 'flex',
                  justifyContent: 'flex-start',
                  paddingLeft: '5px',
                }"
              >
                <strong> {{ Math.floor(movie.vote_average * 10) }}% </strong>
              </div>
              <div
                v-else
                class="rateBarPercent"
                :style="{
                  width: Math.floor(movie.vote_average * 10) + '%',
                  height: '16px',
                  borderRadius: '15px',
                  display: 'flex',
                  justifyContent: 'flex-start',
                  paddingLeft: '5px',
                }"
              >
                <strong> {{ Math.floor(movie.vote_average * 10) }}% </strong>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="btnSeeMore">
        <button
          type="button"
          @click="
            seeMoreOnePage();
            forceTheRenderElement();
          "
        >
          <div class="arrowMore"></div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRoute } from "vue-router";
import ApiKey from "@/ApiKey.js";

export default {
  data() {
    return {
      path: "http://image.tmdb.org/t/p/original",
      elementToRerender: 0,
    };
  },
  methods: {
    forceTheRenderElement() {
      this.elementToRerender += 1;
    },
  },
  setup() {
    const searchResult = useRoute().params.id;
    const moviesResultSearch = ref({});
    const pageNow = ref(1);
    const totalPages = ref(0);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${ApiKey.apikey}&language=pt-BR&query=${searchResult}&page=1&include_adult=false`
    )
      .then((response) => response.json())
      .then((data) => {
        moviesResultSearch.value = data.results;
        totalPages.value = data.pages;
      });

    const seeMoreOnePage = () => {
      pageNow.value += 1;
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${ApiKey.apikey}&language=pt-BR&query=${searchResult}&page=${pageNow.value}&include_adult=false`
      )
        .then((response) => response.json())
        .then((data) => {
          moviesResultSearch.value = data.results;
        });
    };

    const seeLessOnePage = () => {
      if (pageNow.value > 1) {
        pageNow.value -= 1;
        fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${ApiKey.apikey}&language=pt-BR&query=${searchResult}&page=${pageNow.value}&include_adult=false`
        )
          .then((response) => response.json())
          .then((data) => {
            moviesResultSearch.value = data.results;
          });
      }
    };

    return {
      searchResult,
      moviesResultSearch,
      seeMoreOnePage,
      seeLessOnePage,
    };
  },
};
</script>

<style scoped>
.containerSearch {
  width: 100%;
  max-width: 1200px;
  margin: auto;
}
.mainArea {
  display: flex;
}
.areaResult {
  padding: 20px 10px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
}
.movie {
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
}
.imgMovie img {
  width: 200px;
  height: 300px;
  border-radius: 10px;
  box-shadow: 0px 0px 2px 2px #000;
}
.movie a {
  text-decoration: none;
  color: #000;
}
.titleMovie {
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: bold;
}
.rate {
  width: 90%;
  border: 2px solid #000;
  border-radius: 15px;
}
.btnSeeMore,
.btnSeeLess {
  display: flex;
  justify-content: center;
}
.btnSeeMore button,
.btnSeeLess button {
  border: none;
  outline: none;
  width: 50px;
  background: transparent;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 16px 0px;
  cursor: pointer;
}
.btnSeeMore button:hover,
.btnSeeLess button:hover {
  background-color: rgba(0, 0, 0, 0.2);
}
.arrowLess {
  border-right: 10px solid;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
}
.arrowMore {
  border-left: 10px solid;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
}
@media (max-width: 340px) {
  .btnSeeMore button,
  .btnSeeLess button {
    width: 40px;
  }
}
</style>
