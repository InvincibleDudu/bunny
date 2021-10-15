<template>
<!--   <NavBar/>-->
   <div class="home">
      <p>{{ t('Hello') + ' ' + store.state.user.name + store.state.count }}</p>
      <p>{{ t('Intro') }}</p>
   </div>
</template>

<script setup>
import { useI18n } from "vue-i18n"
import { useStore } from "vuex";
import NavBar from '@/components/NavBar'

const { t } = useI18n()
const store = useStore()

</script>
