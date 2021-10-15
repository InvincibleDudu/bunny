<template>
<!--   <NavBar/>-->
   <div class="about">
<!--      <a href="https://weibo.com/InvincibleDudu" rel="noreferrer" target="_blank">在微博与我联系</a>-->
<!--      <a href="https://twitter.com/InvincibleDudu" rel="noreferrer" target="_blank">Contact me on Twitter</a>-->
      <span>@InvincibleDudu 2021</span>
   </div>
</template>

<script setup>
import { useI18n } from "vue-i18n"
import NavBar from '@/components/NavBar'

const { t } = useI18n()

</script>

<style scoped>
a {
   padding: 1rem;
}
</style>
