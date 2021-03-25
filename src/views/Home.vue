<template>
  <div class="home">
    <SearchArea />
    <main>
      <section>
        <div class="areaFilms">
          <div class="titleArea">Filmes Mais Populares</div>
          <div class="areaHome">
            <div class="films">
              <div class="film" v-for="movie in apiData" :key="movie.id">
                <router-link :to="'/movie/' + movie.title">
                  <img
                    :src="path + movie.poster_path"
                    alt="imageFilm{{ movie.title }}"
                  />
                  <div class="infosFilm">
                    <span class="titleMovie">{{ movie.title }}</span>
                    <span>{{
                      movie.release_date.split("-").reverse().join("/")
                    }}</span>
                    <div
                      class="rate"
                      :style="{
                        background: `linear-gradient(90deg, red ${Math.floor(
                          movie.vote_average * 10
                        )}%, white ${Math.floor(
                          100 - movie.vote_average * 10
                        )}%)`,
                      }"
                    >
                      <span>{{ Math.floor(movie.vote_average * 10) }}%</span>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
          <div>
            <router-link to="/movies/popular" class="allPopularLink"
              >Ver todos os filmes populares! &rarr;</router-link
            >
          </div>
        </div>
      </section>
    </main>
    <footer></footer>
  </div>
</template>

<script>
// @ is an alias to /src
import ApiKey from "@/ApiKey.js";
import { ref } from "vue";
import SearchArea from "@/components/SearchArea.vue";

export default {
  name: "Home",
  components: {
    SearchArea,
  },
  data() {
    return {
      path: "http://image.tmdb.org/t/p/original",
    };
  },
  setup() {
    const apiData = ref([]);

    const randomPage = Math.floor(Math.random() * 500);
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey.apikey}&language=pt-BR&page=${randomPage}`
    )
      .then((response) => response.json())
      .then((data) => {
        apiData.value = data.results;
      });

    return {
      apiData,
    };
  },
};
</script>

<style scoped>
footer {
  height: 400px;
}
.areaFilms {
  width: 100%;
  max-width: 1200px;
  margin: auto;
  display: flex;
  flex-direction: column;
}
.titleArea {
  font-size: 30px;
  margin: 15px 10px;
  font-weight: bold;
}
.films {
  display: flex;
  overflow-x: scroll;
  padding: 15px;
}
.film {
  width: 200px;
  margin-right: 40px;
}
.film:last-child {
  margin-right: 0px;
}
.film a {
  width: inherit;
  text-decoration: none;
  color: #000;
}
.film img {
  width: inherit;
  height: 300px;
  border-radius: 20px;
}
.infosFilm {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.infosFilm .titleMovie {
  margin: 10px 0px;
  font-size: 17px;
  font-weight: 600;
  height: 40px;
}
.infosFilm span {
  margin-bottom: 10px;
  font-weight: 600;
}
.rate {
  width: 90%;
  text-align: center;
  border-radius: 5px;
  border: 2px solid #000;
}
.rate span {
  font-weight: bold;
}
.allPopularLink {
  margin-top: 10px;
  margin-left: 10px;
  display: inline-flex;
  padding: 10px 20px;
  background: transparent;
  border: 2px solid #ff0000;
  border-radius: 5px;
  text-decoration: none;
  font-size: 15px;
  font-weight: 600;
  color: #ff0000;
}
.allPopularLink:hover {
  background: #ff0000;
  color: #ffffff;
}
</style>
