<template>
  <button @click="color = color === 'red' ? 'green' : 'red'">
    Color is: {{ color }}
  </button>
</template>

<script setup>
import { ref } from 'vue'

const color = ref('red')

</script>

<style scoped>
button {
  color: v-bind(color);
}
</style>