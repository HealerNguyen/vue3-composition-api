<template>
  <div>
    <img class="logo-vue" alt="Vue logo" src="./assets/logo.png" />
  </div>
  <router-link to='/'>Trang chủ</router-link> |
  <router-link to='/simple'>Ref</router-link> |
  <router-link to='/reactive'>Reactive</router-link>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.logo-vue {
  width: 100px;
}
.composition {
  padding: 16px;
}
</style>