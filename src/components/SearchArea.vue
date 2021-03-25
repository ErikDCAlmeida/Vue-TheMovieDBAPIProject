<template>
  <div class="areaSearch">
    <div class="containerSearch">
      <div class="bgSearch">
        <div>
          <h1>Bem vindo(a)!</h1>
          <h2>
            Informações sobre seus filmes e séries favoritos você encontra aqui!
          </h2>
        </div>
        <form @submit.prevent="searchMovies()">
          <input
            id="search"
            type="text"
            name="search"
            placeholder="Digite o filme que deseja encontrar!"
            v-model="search"
            autocomplete="off"
          />
          <button type="submit">Pesquisar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import ApiKey from "@/ApiKey.js";

export default {
  setup() {
    const search = ref("");

    const searchMovies = () => {
      if (search.value != "") {
        fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey.apikey}&language=pt-BR&page=1`
        )
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
          });
      }
    };

    return {
      search,
      searchMovies,
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
  background-image: url(../assets/imgfilmwow.jpg);
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
h1 {
  color: #fff;
  font-size: 70px;
  margin-bottom: 0px;
}
h2 {
  color: #fff;
}
form {
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
button {
  height: 100%;
  width: 110px;
  outline: 0 none;
  border: 0 none;
  border-radius: 0px 20px 20px 0px;
  background-color: #ff0000;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
}
</style>
