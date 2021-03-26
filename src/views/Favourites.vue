<template>
  <div class="favourites">
    <h1>Seus filmes favoritos</h1>
    <div class="areaFavouritesMovies">
      <div class="movie">
        <router-link to="/movie/0">
          <div class="imgMovie">
            <img src="@/assets/noImageAvailable.jpg" alt="" />
          </div>
          <div class="titleMovie">
            Título do Filme Bem Grande Para Pegar o Máximo
          </div>
        </router-link>
        <div class="btnRemoveFavourite">Remover Favorito</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.favourites {
  max-width: 1200px;
  width: 100%;
  margin: auto;
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
  height: 250px;
  border-radius: 10px;
  box-shadow: 0px 0px 2px 2px #000;
}
a {
  text-decoration: none;
}
a .titleMovie {
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  margin: 10px 0px;
  color: #000;
}
.btnRemoveFavourite {
  background: transparent;
  padding: 8px 15px;
  border-radius: 5px;
  border: 2px solid #ff0000;
  font-weight: bold;
  font-size: 14px;
  color: #ff0000;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
}
.btnRemoveFavourite:hover {
  background: #ff0000;
  color: #ffffff;
}
</style>
