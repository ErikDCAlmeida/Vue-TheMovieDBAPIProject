<template>
  <div class="areaPopularMovies">
    <div class="btnBackToHome">
      <router-link to="/">
        <button>
          <div class="arrow"></div>
          Voltar ao início!
        </button>
      </router-link>
    </div>
    <h2 class="titleArea">Filmes Populares</h2>
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
      <div class="areaMovies" :key="elementToRerender">
        <div
          class="movie"
          v-for="movie in popularMovies"
          :key="'movie-' + movie.title"
        >
          <router-link :to="'/movie/' + movie.id">
            <div class="imgMovie">
              <img
                :src="path + movie.poster_path"
                :alt="'imageMovie' + movie.title"
              />
            </div>
            <div class="titleMovie">
              {{ movie.title }}
            </div>
          </router-link>
          <div class="rate">
            <div
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
          </div>
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
import ApiKey from "@/apiKey.js";

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
    const popularMovies = ref({});
    const pageNow = ref(1);

    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey.apikey}&language=pt-BR&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        popularMovies.value = data.results;
      });

    const seeMoreOnePage = () => {
      pageNow.value += 1;
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey.apikey}&language=pt-BR&page=${pageNow.value}`
      )
        .then((response) => response.json())
        .then((data) => {
          popularMovies.value = data.results;
        });
    };

    const seeLessOnePage = () => {
      if (pageNow.value > 1) {
        pageNow.value -= 1;
        fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey.apikey}&language=pt-BR&page=${pageNow.value}`
        )
          .then((response) => response.json())
          .then((data) => {
            popularMovies.value = data.results;
          });
      }
    };

    return {
      popularMovies,
      seeMoreOnePage,
      seeLessOnePage,
      pageNow,
    };
  },
};
</script>

<style scoped>
.areaPopularMovies {
  width: 1200px;
  max-width: 100%;
  padding: 0px 5px;
  margin: auto;
}
.btnBackToHome {
  padding: 10px 0px;
}
.btnBackToHome a {
  text-decoration: none;
  display: inline-flex;
}
.btnBackToHome button {
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  font-weight: bold;
  border: 1px solid #000;
  border-radius: 3px;
  padding: 5px 10px;
  background: #000;
  color: #ffffff;
  cursor: pointer;
}
.arrow {
  border-right: 10px solid;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  margin-right: 10px;
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
.mainArea {
  display: flex;
}
.titleArea {
  font-size: 30px;
}
.areaMovies {
  padding: 20px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.areaFavouritesMovies {
  padding: 15px 5px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
}
.movie {
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  margin-right: 20px;
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
</style>
