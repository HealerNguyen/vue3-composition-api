<template>
  <div>
    <img class="logo-vue" alt="Vue logo" src="./assets/logo.png" />
  </div>
  <router-link to='/'><b>Trang chủ</b></router-link> |
  <router-link to='/simple'><b>Ref</b></router-link> |
  <router-link to='/reactive'><b>Reactive</b></router-link> |
  <router-link to='/modular'><b>Modular</b></router-link> |
  <router-link to='/lifecycle'><b>LifeCycle</b></router-link> |
    <router-link to='/example'><b>Example</b></router-link>


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
b {
  color: #1967d2;
}
</style>