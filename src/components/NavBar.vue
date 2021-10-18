<template>
   <nav>
      <el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" @select="handleSelect">
         <el-menu-item index="/">{{ t('Home') }}</el-menu-item>
         <el-menu-item index="/blog">{{ t('Blog') }}</el-menu-item>
         <el-menu-item index="/upload">{{ t('Upload') }}</el-menu-item>
         <el-menu-item index="/calc">{{ t('Calc') }}</el-menu-item>
         <el-menu-item index="/about">{{ t('About') }}</el-menu-item>
         <el-menu-item index="/profile" class="avatar-item float-right">
            <div class="avatar">
               <Avatar/>
            </div>
         </el-menu-item>
         <el-menu-item index="/InvincibleDudu" class="language-dropdown">
            <el-dropdown @command="handleCommand">
              <span class="el-dropdown-link">
                {{ t(locale) }}<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
               <template #dropdown>
                  <el-dropdown-menu>
                     <el-dropdown-item
                        class="language-dropdown-item"
                        v-for="avaLocale in availableLocales"
                        :class="avaLocale === locale ? 'dropdown-selected' : ''"
                        :value="avaLocale"
                        :command="avaLocale"
                     >
                        {{ t(avaLocale) }}
                     </el-dropdown-item>
                  </el-dropdown-menu>
               </template>
            </el-dropdown>
         </el-menu-item>
<!--         <el-sub-menu index="2">-->
<!--            <template #title>{{ t(locale) }}</template>-->
<!--            <el-menu-item-->
<!--                v-for="avaLocale in availableLocales"-->
<!--                :index="'locale' + avaLocale"-->
<!--            >-->
<!--               {{ t(avaLocale) }}-->
<!--            </el-menu-item>-->
<!--         </el-sub-menu>-->
      </el-menu>
   </nav>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useI18n } from "vue-i18n"
import { Avatar } from '@element-plus/icons'

/**
 * Created by InvincibleDudu on 2021/8/24 at 17:28
 */

const { t, locale, availableLocales } = useI18n()
const router = useRouter()

function handleSelect(key) {
   console.log('key? ', key)
   if (key.includes('locale'))
      handleCommand(key.substring(6))
   else
      router.push(key)
}

const handleCommand = (command) => {
   locale.value = command
   localStorage.setItem('locale', locale.value)
}

</script>


<style scoped>
.language-dropdown {
   text-align: right;
}

.float-right {
   /*float: right !important;*/
   margin-left: auto !important;
}

.avatar-item {
   padding: 0;
}

.language-dropdown-item {
   text-align: center;
}

.dropdown-selected {
   background-color: dodgerblue;
   cursor: not-allowed;
   color: white;
}

.el-menu-item {
   font-size: 17px;
   font-weight: bold;
}

.avatar {
   width: 3rem;
   height: 3rem;
   border-radius: 50%;
}

/*.el-menu {*/
/*   display: block;*/
/*}*/
</style>
