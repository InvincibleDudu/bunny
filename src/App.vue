<template>
   <img src="./assets/logo.png" alt="logo"/>
   <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/upload">Upload</router-link>
      |
      <router-link to="/calc">Calc</router-link>
      |
      <router-link to="/about">About</router-link>
   </div>
   <router-view/>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue"

export default {
   name: "App",
   components: {
      HelloWorld,
   },
}
</script>

<style>
#app {
   font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #2c3e50;
   margin-top: 60px;
}
</style>
