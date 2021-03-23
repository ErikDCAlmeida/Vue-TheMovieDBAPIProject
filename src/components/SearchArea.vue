<template>
  <div class="areaSearch">
    <div class="containerSearch">
      <input
        id="search"
        type="text"
        name="search"
        placeholder="Digite o filme que deseja encontrar!"
      />
      <img src="@/assets/lupa.png" alt="Lupa search" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.areaSearch {
  padding-top: 15px;
}
.containerSearch {
  width: 100%;
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}
input {
  border: 0 none;
  outline: 0 none;
  padding: 5px;
  width: 300px;
  border-bottom: 2px solid black;
  background-color: transparent;
  font-size: 15px;
}
img {
  width: 25px;
}
</style>
