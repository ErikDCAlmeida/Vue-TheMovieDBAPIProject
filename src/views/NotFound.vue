<template>
  <div class="areaBotFound">
    <h1>Oops!</h1>
    <h2>404 - PAGE NOT FOUND</h2>
    <span
      >Desculpe, essa página não foi encontrada!<br />
      É possível que o endereço desejado tenha sido digitado errado!
    </span>
    <div class="linkToHome">
      <router-link to="/">Voltar ao início!</router-link>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 100px;
}
span {
  font-size: 18px;
}
.linkToHome {
  max-width: 1200px;
  width: 100%;
  margin: auto;
  margin-top: 40px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
a {
  text-decoration: none;
  padding: 15px 30px;
  background: #2c3e50;
  color: #fff;
  border-radius: 5px;
  font-size: 17px;
}
</style>
