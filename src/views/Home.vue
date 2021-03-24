<template>
  <div class="home">
    <SearchArea />
    <main>
      <section>
        <div class="areaFilms">
          <div class="titleArea">Filmes Mais Populares</div>
          <div class="areaHome">
            <div class="films">
              <div class="film">
                <router-link to="/movie/0">
                  <img src="@/assets/imageFilmExample.jpg" alt="imageFilm" />
                  <div class="infosFilm">
                    <h3>Nome do Filme</h3>
                    <span>Data de lançamento</span>
                    <div class="rate">
                      <span>50%</span>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
            <div class="pages">
              <div class="page" id="0">0</div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer></footer>
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
footer {
  height: 400px;
}
.areaFilms {
  width: 100%;
  max-width: 1200px;
  margin: auto;
}
.titleArea {
  font-size: 30px;
  margin: 15px 10px;
  font-weight: bold;
}
.areaHome {
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
  border-radius: 20px;
}
.infosFilm {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.infosFilm h3 {
  margin: 10px 0px;
}
.infosFilm span {
  margin-bottom: 10px;
}
.rate {
  background: linear-gradient(90deg, red 50%, white 50%);
  width: 90%;
  text-align: center;
  border-radius: 5px;
  border: 1px solid #000;
}
.rate span {
  font-weight: bold;
}
</style>
