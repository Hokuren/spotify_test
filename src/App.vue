<template>
  <div id="app">
<!--     <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
/* import './style.scss'; */

export default {
  name: 'App'
}
</script>

<style>
* { padding: 0; margin: 0; }
body {
  background-color: #151618;  
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
  /* margin-top: 60px; */
}
</style>
