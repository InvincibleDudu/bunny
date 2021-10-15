<template>
   <!--   <img src="./assets/logo.png" alt="logo"/>-->
   <el-config-provider :locale="locale === 'zh-CN' ? zhCn : null">
      <NavBar v-if="store.state.nav"/>
      <main>
         <router-view/>
      </main>
   </el-config-provider>
</template>

<script setup>
import NavBar from '@/components/NavBar'
import { useStore } from "vuex";
import { ref } from 'vue'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import { useI18n } from 'vue-i18n'

const store = useStore()
const { locale } = useI18n()

</script>

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
