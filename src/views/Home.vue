<template>
  <div class="home">
    <SearchArea />
    <main>
      <section>
        <div class="areaMovies">
          <div class="titleArea">Filmes Mais Populares</div>
          <div class="areaHome">
            <div class="movies">
              <div class="movie" v-for="movie in movies" :key="movie.id">
                <router-link :to="'/movie/' + movie.id">
                  <img
                    v-if="movie.poster_path != null"
                    :src="path + movie.poster_path"
                    :alt="'imageMovie' + movie.title"
                  />
                  <img
                    v-else
                    src="../assets/noImageAvailable.jpg"
                    :alt="'imageMovie-noImageMovie'"
                  />
                  <div class="infosMovie">
                    <span class="titleMovie">{{ movie.title }}</span>
                    <span class="date">{{
                      changeMonth(movie.release_date)
                    }}</span>
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
                        <strong>
                          {{ Math.floor(movie.vote_average * 10) }}%
                        </strong>
                      </div>
                    </div>
                  </div>
                </router-link>
                <div class="areaBtnFavourite">
                  <button
                    type="button"
                    @click="
                      favouriteMovie(movie.id, movie.poster_path, movie.title)
                    "
                  >
                    Favoritar
                  </button>
                  <button type="button" @click="unfavouriteMovie(movie.id)">
                    Desfavoritar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <router-link to="/movies/popular" class="allPopularLink"
              >Ver todos os filmes populares!
              <div class="arrow"></div>
            </router-link>
          </div>
        </div>
      </section>
    </main>
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
      moviesStorage: [],
    };
  },
  methods: {
    changeMonth: function (date) {
      date = date.split("-").reverse().join("/");
      let month = "";
      let monthNumber = "";
      for (let i = 3; i < date.length; i++) {
        if (i === 5) {
          break;
        } else {
          monthNumber += date[i];
        }
      }

      switch (monthNumber) {
        case "01":
          month = this.dateCompleted("Janeiro", date);
          break;
        case "02":
          month = this.dateCompleted("Fevereiro", date);
          break;
        case "03":
          month = this.dateCompleted("Março", date);
          break;
        case "04":
          month = this.dateCompleted("Abril", date);
          break;
        case "05":
          month = this.dateCompleted("Maio", date);
          break;
        case "06":
          month = this.dateCompleted("Junho", date);
          break;
        case "07":
          month = this.dateCompleted("Julho", date);
          break;
        case "08":
          month = this.dateCompleted("Agosto", date);
          break;
        case "09":
          month = this.dateCompleted("Setembro", date);
          break;
        case "10":
          month = this.dateCompleted("Outubro", date);
          break;
        case "11":
          month = this.dateCompleted("Novembro", date);
          break;
        case "12":
          month = this.dateCompleted("Dezembro", date);
          break;
        default:
          break;
      }
      return month;
    },
    dateCompleted(month, date) {
      let leftSide = "";
      let rightSide = "";
      for (let i = 0; i < date.length; i++) {
        if (i >= 5) {
          rightSide += date[i];
        } else if (i >= 0 && i < 3) {
          leftSide += date[i];
        }
      }

      return leftSide + month + rightSide;
    },
    favouriteMovie(movieID, imageMovie, movieName) {
      let favorited = false;
      const moviesLS = JSON.parse(localStorage.getItem("movies"));
      moviesLS.forEach((movie) => {
        if (movie.movieId === movieID) {
          favorited = true;
        }
      });
      if (!favorited) {
        if (movieID != null && imageMovie != null && movieName != null) {
          this.infosMovie = {
            movieId: movieID,
            imgMovie: imageMovie,
            movName: movieName,
            favoritedMovie: true,
          };
          if (JSON.parse(localStorage.getItem("movies")) != null) {
            this.moviesStorage = JSON.parse(localStorage.getItem("movies"));
          }
          this.moviesStorage.push(this.infosMovie);
          this.saveMovie();
        }
      }
    },
    unfavouriteMovie(mvId) {
      let cont = 0;
      const moviesLS = JSON.parse(localStorage.getItem("movies"));
      moviesLS.forEach((movie) => {
        if (movie.movieId === mvId) {
          this.moviesStorage = moviesLS;
          this.moviesStorage.splice(cont, 1);
        }
        cont++;
      });
      this.saveMovie();
    },
    saveMovie() {
      let movies = JSON.stringify(this.moviesStorage);
      localStorage.setItem("movies", movies);
    },
  },
  setup() {
    const movies = ref([]);

    const randomPage = Math.floor(Math.random() * (500 - 2) + 2);
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey.apikey}&language=pt-BR&page=${randomPage}`
    )
      .then((response) => response.json())
      .then((data) => {
        movies.value = data.results;
      });

    return {
      movies,
    };
  },
};
</script>

<style scoped>
.home {
  margin-bottom: 40px;
}
.areaMovies {
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
.movies {
  display: flex;
  overflow-x: scroll;
  padding: 15px;
}
.movie {
  width: 200px;
  margin-right: 40px;
}
.movie:last-child {
  margin-right: 0px;
}
.movie a {
  width: inherit;
  text-decoration: none;
  color: #000;
}
.movie img {
  width: inherit;
  height: 300px;
  border-radius: 20px;
}
.areaBtnFavourite {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
}
.areaBtnFavourite button {
  padding: 5px 0px;
  width: 90%;
  border: 2px solid #000;
  background: transparent;
  border-radius: 5px;
  color: #000;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
  margin-bottom: 5px;
}
.areaBtnFavourite button:last-child {
  margin-bottom: 0px;
}
.areaBtnFavourite button:hover {
  background: #000;
  color: #ff0000;
}
.areaBtnFavourite button:last-child:hover {
  border-color: #ff0000;
  background: #ff0000;
  color: #ffffff;
}
.infosMovie {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.infosMovie .titleMovie {
  margin: 10px 0px;
  font-size: 17px;
  font-weight: 600;
  height: 60px;
  text-align: center;
}
.infosMovie span {
  margin-bottom: 10px;
  font-weight: 600;
}
.date {
  height: 20px;
}
.rate {
  width: 180px;
  border-radius: 15px;
  border: 2px solid #000;
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
  align-items: center;
}
.allPopularLink:hover {
  background: #ff0000;
  color: #ffffff;
}
.arrow {
  border-left: 10px solid;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  margin-left: 10px;
}
</style>
