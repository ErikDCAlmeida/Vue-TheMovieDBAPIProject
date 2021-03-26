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
    <div class="areaMovies">
      <div class="movie">
        <router-link to="/movie/0">
          <div class="imgMovie">
            <img src="@/assets/noImageAvailable.jpg" alt="" />
          </div>
          <div class="titleMovie">
            Título do Filme Bem Grande Para Pegar o Máximo
          </div>
        </router-link>
        <div class="rate">
          <div
            class="rateBarPercent"
            :style="{
              backgroundColor: '#ff0000',
              width: '100%',
              height: '16px',
              borderRadius: '15px',
              display: 'flex',
              justifyContent: 'flex-start',
              paddingLeft: '5px',
            }"
          >
            <strong> 50% </strong>
          </div>
        </div>
      </div>
    </div>
    <div class="btnSeeMore">
      <button type="button">Ver Mais</button>
    </div>
  </div>
</template>

<script>
export default {};
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
.btnBackToHome button:hover {
  color: #ff0000;
}
.arrow {
  border-right: 10px solid;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  margin-right: 10px;
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
  height: 250px;
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
  text-align: center;
}
.btnSeeMore {
  margin: 25px 0px;
  display: flex;
  justify-content: center;
}
.btnSeeMore button {
  border: none;
  outline: none;
  padding: 15px 100px;
  border: 2px solid #ff0000;
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  color: #ff0000;
  cursor: pointer;
}
.btnSeeMore button:hover {
  background-color: #ff0000;
  color: #ffffff;
}
</style>
