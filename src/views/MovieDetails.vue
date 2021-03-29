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
            <img :src="pathPosterImage" :alt="movieReference.title" />
          </div>
          <div class="infosMovie">
            <div class="mainInfoTitle">
              <div class="titleMovie">
                {{ movieReference.title }} ({{ yearMovie }})
              </div>
              <button
                v-if="!favouritedMovieDetails"
                type="button"
                class="favouriteButton"
                @click="
                  favouriteMovie(
                    movieReference.id,
                    movieReference.poster_path,
                    movieReference.title
                  );
                  forceTheRenderElement();
                "
              >
                <img
                  src="../assets/starNoFavourite.png"
                  alt="imgStarNoFavourite"
                  :key="elementToRerender"
                />
              </button>
              <button
                v-else
                type="button"
                class="favouriteButton"
                @click="
                  unfavouriteMovie(movieReference.id);
                  forceTheRenderElement();
                "
              >
                <img
                  src="../assets/starFavourite.png"
                  alt="imgStarFavourite"
                  :key="elementToRerender"
                />
              </button>
            </div>
            <div class="descMovie">{{ movieReference.overview }}</div>
            <div class="popularity">
              <span class="titPercent">Avaliação dos usuários</span>
              <div
                class="rateBar"
                :style="{
                  background: `linear-gradient(90deg, #ff0000 ${Math.floor(
                    movieReference.vote_average * 10
                  )}%, #ffffff ${
                    100 - Math.floor(movieReference.vote_average * 10)
                  }%)`,
                }"
              >
                <span>{{ movieReference.vote_average * 10 }}%</span>
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
import { ref } from "vue";
import { useRoute } from "vue-router";
import ApiKey from "@/ApiKey.js";

export default {
  data() {
    return {
      movieFavorited: {},
      elementToRerender: 0,
      moviesStorage: [],
    };
  },
  computed: {
    yearMovie: function () {
      let year = "";
      for (let i in this.movieReference.release_date) {
        if (year.length === 4) {
          break;
        } else {
          year += this.movieReference.release_date[i];
        }
      }
      return year;
    },
  },
  methods: {
    favouriteMovie(movieID, imageMovie, movieName) {
      if (localStorage.getItem("movies")) {
        let favorited = false;
        const moviesLS = JSON.parse(localStorage.getItem("movies"));
        moviesLS.forEach((movie) => {
          if (movie.movieId === movieID) {
            favorited = true;
          }
        });
        if (!favorited) {
          if (movieID != null && imageMovie != null && movieName != null) {
            const infoMovie = {
              movieId: movieID,
              imgMovie: imageMovie,
              movName: movieName,
              favoritedMovie: true,
            };
            if (JSON.parse(localStorage.getItem("movies")) != null) {
              this.moviesStorage = JSON.parse(localStorage.getItem("movies"));
            }
            this.moviesStorage.push(infoMovie);
            this.favouritedMovieDetails = true;
            this.saveMovie();
            this.forceTheRenderElement();
          }
        }
      } else {
        if (movieID != null && imageMovie != null && movieName != null) {
          const infoMovie = {
            movieId: movieID,
            imgMovie: imageMovie,
            movName: movieName,
            favoritedMovie: true,
          };
          if (JSON.parse(localStorage.getItem("movies")) != null) {
            this.moviesStorage = JSON.parse(localStorage.getItem("movies"));
          }
          this.moviesStorage.push(infoMovie);
          this.favouritedMovieDetails = true;
          this.saveMovie();
          this.forceTheRenderElement();
        }
      }
    },
    unfavouriteMovie(mvId) {
      this.moviesStorage = JSON.parse(localStorage.getItem("movies"));
      let cont = 0;
      this.moviesStorage.forEach((movie) => {
        if (movie.movieId === mvId) {
          this.moviesStorage.splice(cont, 1);
        }
        cont++;
      });
      this.favouritedMovieDetails = false;
      this.saveMovie();
      this.forceTheRenderElement();
    },
    saveMovie() {
      let movies = JSON.stringify(this.moviesStorage);
      localStorage.setItem("movies", movies);
    },
    forceTheRenderElement() {
      this.elementToRerender += 1;
    },
  },
  setup() {
    const movieReference = ref({});
    const route = useRoute();
    const pathBannerImage = ref("");
    const pathPosterImage = ref("");
    const favouritedMovieDetails = ref(false);

    fetch(
      `https://api.themoviedb.org/3/movie/${route.params.id}?api_key=${ApiKey.apikey}&language=pt-BR`
    )
      .then((response) => response.json())
      .then((data) => {
        movieReference.value = data;
        pathBannerImage.value =
          "http://image.tmdb.org/t/p/original" + data.backdrop_path;
        pathPosterImage.value =
          "http://image.tmdb.org/t/p/original" + data.poster_path;

        if (localStorage.getItem("movies")) {
          const moviesStoraged = JSON.parse(localStorage.getItem("movies"));
          moviesStoraged.forEach((movie) => {
            if (movie.movieId === movieReference.value.id) {
              favouritedMovieDetails.value = movie.favoritedMovie;
            }
          });
        }
      });

    return {
      movieReference,
      pathBannerImage,
      pathPosterImage,
      favouritedMovieDetails,
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
.favouriteButton {
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
}
.favouriteButton img {
  width: 35px;
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
@media (max-width: 730px) {
  .movie {
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
  }
  .imgMovie {
    margin: 15px 0px;
  }
  .mainInfoTitle {
    margin: 15px 0px;
  }
  .popularity {
    margin-top: 20px;
  }
  .linkHome {
    margin-bottom: 50px;
  }
}
@media (max-width: 480px) {
  .infosMovie {
    padding-left: 0px;
  }
}
@media (max-width: 375px) {
  .imgMovie img {
    width: 295px;
  }
}
</style>
