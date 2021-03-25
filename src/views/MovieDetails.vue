<template>
  <div
    class="movieDetails"
    :style="{
      backgroundImage: 'url(' + pathBannerImage + ')',
    }"
  >
    <div class="bgMovie">
      <div class="containerMovieDetails">
        <div class="movie">
          <div class="imgMovie">
            <img :src="pathPosterImage" :alt="movie.title" />
          </div>
          <div class="infosMovie">
            <div class="mainInfoTitle">
              <div class="titleMovie">{{ movie.title }} ({{ yearMovie }})</div>
              <div class="favorite">FV</div>
            </div>
            <div class="descMovie">{{ movie.overview }}</div>
            <div class="popularity">
              <span class="titPercent">Avaliação dos usuários</span>
              <div
                class="rateBar"
                :style="{
                  background: `linear-gradient(90deg, #ff0000 ${Math.floor(
                    movie.vote_average * 10
                  )}%, #ffffff ${100 - Math.floor(movie.vote_average * 10)}%)`,
                }"
              >
                <span>{{ movie.vote_average * 10 }}%</span>
              </div>
            </div>
          </div>
        </div>
        <div class="linkHome">
          <router-link to="/">
            <div class="arrow"></div>
            Voltar ao início!
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import ApiKey from "@/ApiKey.js";

export default {
  computed: {
    yearMovie: function () {
      let year = "";
      for (let i in this.movie.release_date) {
        if (year.length === 4) {
          break;
        } else {
          year += this.movie.release_date[i];
        }
      }
      return year;
    },
  },
  setup() {
    const movie = ref({});
    const route = useRoute();
    const pathBannerImage = ref("");
    const pathPosterImage = ref("");

    onBeforeMount(
      fetch(
        `https://api.themoviedb.org/3/movie/${route.params.id}?api_key=${ApiKey.apikey}&language=pt-BR`
      )
        .then((response) => response.json())
        .then((data) => {
          movie.value = data;
          pathBannerImage.value =
            "http://image.tmdb.org/t/p/original" + data.backdrop_path;
          pathPosterImage.value =
            "http://image.tmdb.org/t/p/original" + data.poster_path;
        })
    );

    return {
      movie,
      pathBannerImage,
      pathPosterImage,
    };
  },
};
</script>

<style scoped>
.movieDetails {
  background-size: cover;
  background-position: center;
}
.bgMovie {
  background: rgba(0, 0, 0, 0.7);
  padding: 10px 0px;
}
.containerMovieDetails {
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 0px 10px;
}
.movie {
  display: flex;
  color: #fff;
}
.imgMovie img {
  width: 350px;
  border-radius: 10px;
  box-shadow: 0px 0px 2px 2px #fff;
}
.infosMovie {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 40px;
}
.mainInfoTitle {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.favorite {
  background: green;
}
.titleMovie {
  font-weight: bold;
  font-size: 40px;
}
.descMovie {
  font-size: 20px;
  text-align: justify;
}
.titPercent {
  font-size: 15px;
  font-weight: bold;
}
.popularity {
  display: flex;
  flex-direction: column;
  height: 50px;
  justify-content: space-between;
}
.rateBar {
  border-radius: 10px;
  text-align: center;
  color: #000;
  font-weight: bold;
  width: 200px;
}
.linkHome {
  height: 70px;
  display: flex;
  align-items: center;
  padding-left: 5px;
}
a {
  padding: 12px 30px;
  background: transparent;
  box-shadow: 0px 0px 1px 1px #fff;
  border-radius: 5px;
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
}
a:hover {
  background: #ff0000;
}
.arrow {
  border-right: 10px solid;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  margin-right: 10px;
}
</style>
