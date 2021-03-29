<template>
  <div class="about">
    <h1>Sobre</h1>
    <h3>
      Esse projeto foi criado como forma de aprendizado para utilização de API
      (Application Programming Interface), consumindo a API do
      <a href="https://www.themoviedb.org" target="_blank">The Movie Database</a
      >.
    </h3>
    <h2>Criador do Projeto:</h2>
    <div class="socials">
      <a href="https://www.linkedin.com/in/erikdcalmeida/" target="_blank"
        ><img src="@/assets/linkedin.png" alt="Linkedin link" /><span
          >LinkedIn</span
        ></a
      >
      <a href="https://github.com/ErikDCAlmeida" target="_blank"
        ><img src="@/assets/github.png" alt="Github link" /><span
          >GitHub</span
        ></a
      >
    </div>
  </div>
</template>

<style scoped>
.about {
  max-width: 1200px;
  width: 100%;
  padding: 0px 5px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
h3 {
  text-align: start;
}
a {
  text-decoration: none;
  color: #0000ff;
  font-weight: 600;
}
.socials {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.socials a {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
img {
  width: 30px;
  margin-right: 20px;
}
</style>
