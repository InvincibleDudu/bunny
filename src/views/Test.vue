<template>
   <el-button @click="color = color === 'red' ? 'green' : 'red'">
      Color is: {{ color }}
   </el-button>
   <el-button @click="$router.push({name: 'error', params: {errorCode: '403'}})">push to 403</el-button>
   <el-button @click="$router.push({name: 'error', params: {errorCode: '500'}})">push to 500</el-button>
   <el-button @click="$router.push({name: 'error', params: {errorCode: '404'}})">push to 404</el-button>
   <el-button @click="$router.push({name: 'error', params: {errorCode: '555'}})">push to unknown</el-button>
   <el-button @click="store.commit('increment')">{{ count }}</el-button>
   <el-date-picker/>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStore } from "vuex";

const { t } = useI18n()
const store = useStore()
const color = ref('red')


const count = computed(() => store.state.count)

</script>


<script>


</script>


<style scoped>
button {
  color: v-bind(color);
}
</style>
