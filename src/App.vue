<template>
   <img src="./assets/logo.png" alt="logo"/>
   <nav>
      <el-menu :default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
         <el-menu-item index="1">
            {{ t('menu.home') }}
         </el-menu-item>
         <el-menu-item index="2">
            {{ t('menu.upload') }}
         </el-menu-item>
         <el-menu-item index="3">
            {{ t('menu.calc') }}
         </el-menu-item>
         <el-menu-item index="4">
            {{ t('menu.about') }}
         </el-menu-item>
         <el-menu-item class="language-dropdown">
            <el-dropdown @command="handleCommand">
              <span class="el-dropdown-link">
                {{ t('menu.language') }}<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
               <template #dropdown>
                  <el-dropdown-menu>
                     <el-dropdown-item command="0">{{ t('menu.zh-cn') }}</el-dropdown-item>
                     <el-dropdown-item command="1">{{ t('menu.en') }}</el-dropdown-item>
                  </el-dropdown-menu>
               </template>
            </el-dropdown>
         </el-menu-item>
      </el-menu>
   </nav>
   <main>
      <router-view/>
   </main>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useI18n } from "vue-i18n"

const { t } = useI18n()
const router = useRouter()

function handleSelect(key) {
   switch (key) {
      case ('1'):
         router.push('/')
         break
      case ('2'):
         router.push('/upload')
         break
      case ('3'):
         router.push('/calc')
         break
      case ('4'):
         router.push('/about')
         break
   }
}

const handleCommand = (command) => {
   console.log(command)
};

</script>

<style scoped>
.language-dropdown {
   float: right !important;
}
</style>

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
