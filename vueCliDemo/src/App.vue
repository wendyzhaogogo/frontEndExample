<template>
  <div id="app">
    <img src="./assets/logo.png">
    
    <router-view/>
  </div>
</template>

<script>
import test from "./test";
console.log('app beforeexport')
console.log(test.a())

export default {
  name: 'App',
  mounted(){
    console.log(test.a())
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
