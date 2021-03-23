<template>
  <header>
    <div class="containerHeader">
      <router-link to="/" class="logo">APITheMovieDB</router-link>
      <div class="menu">
        <nav>
          <ul>
            <li>
              <router-link to="/">Início</router-link>
            </li>
            <li>
              <router-link to="/favourites">Favoritos</router-link>
            </li>
            <li>
              <router-link to="/about">Sobre</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
header {
  height: 60px;
  display: flex;
  justify-content: center;
  background: #000;
}

.containerHeader {
  max-width: 1200px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.menu {
  flex: 1;
}

.menu ul,
.menu li {
  list-style: none;
}

.menu ul {
  display: flex;
  justify-content: flex-end;
}

.menu li {
  margin-right: 5px;
}

.menu li:last-child {
  margin-right: 0px;
}

.menu a,
.logo {
  text-decoration: none;
  font-size: 15px;
  padding: 19px 20px;
  border-bottom: 3px solid transparent;
  font-weight: 600;
  color: #ffffff;
}

.logo {
  font-size: 2rem;
  padding: 0px 0px;
}

.menu a:hover,
.menu .router-link-exact-active {
  border-bottom: 3px solid #ff0000;
  color: #ff0000;
}
</style>
