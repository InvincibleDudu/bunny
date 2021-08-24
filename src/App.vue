<template>
   <!--   <img src="./assets/logo.png" alt="logo"/>-->
   <NavBar/>
   <main>
      <router-view/>
   </main>
</template>

<script setup>
import NavBar from '@/components/NavBar'</script>

<style scoped>

</style>

<style>
#app {
   font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #2c3e50;
}

main {
   margin-top: 2rem;
}
</style>
