<template>
  <div class="movieDetails">
    <div class="bgMovie">
      <div class="containerMovieDetails">
        <div class="movie">
          <div class="imgMovie">
            <img src="@/assets/imageFilmExample.jpg" alt="bigImgMovie" />
          </div>
          <div class="infosMovie">
            <div class="titleMovie">Titulo do Filme (ano)</div>
            <div class="descMovie">Descrição do Filme</div>
            <div class="porcentMovie">
              <div class="rate">
                <span class="titPercent">Avaliação</span>
                <div class="rateBar">
                  <span>50%</span>
                </div>
              </div>
              <div class="popularity">
                <span class="titPercent">Avaliação usuários</span>
                <div class="rateBar">
                  <span>50%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="linkHome">
          <router-link to="/">&larr; Voltar ao início!</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.movieDetails {
  background-image: url(../assets/imageFilmExample.jpg);
  background-size: cover;
  background-position: center;
  background-position-y: -700px;
}
.bgMovie {
  background: rgba(0, 0, 0, 0.6);
  padding: 10px 0px;
}
.containerMovieDetails {
  width: 100%;
  max-width: 1200px;
  margin: auto;
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
  padding: 10px;
}
.titleMovie {
  font-weight: bold;
  font-size: 40px;
}
.descMovie {
  font-size: 20px;
}
.porcentMovie {
  display: flex;
}
.rate {
  flex: 1;
  margin-right: 10px;
}
.popularity {
  flex: 1;
}
.rateBar {
  border-radius: 10px;
  text-align: center;
  color: #000;
  font-weight: bold;
  background: linear-gradient(90deg, #ff0000 50%, #fff 50%);
}
.linkHome {
  height: 70px;
  display: flex;
  align-items: center;
  padding-left: 5px;
}
.titPercent {
  margin: 0px 0px 0px 10px;
  font-size: 16px;
  font-weight: 600;
}
a {
  padding: 12px 30px;
  background: transparent;
  box-shadow: 0px 0px 1px 1px #fff;
  border-radius: 5px;
  color: #fff;
  text-decoration: none;
}
a:hover {
  background: #ff0000;
}
</style>
