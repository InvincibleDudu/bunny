<template>
  <div class="home">
     <p>{{ t('Hello') }}</p>
     <p>{{ t('Intro') }}</p>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n"

const { t } = useI18n()

</script>
