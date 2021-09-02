<template>
   <el-result :title="errorCode" :subTitle="msg">
      <template #extra>
         <el-button size="medium" @click="$router.push('/')">{{ t('Home') }}</el-button>
      </template>
   </el-result>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

/**
 * Created by InvincibleDudu on 2021/8/31 at 14:19
 */

const { t } = useI18n()

const props = defineProps({
   errorCode: {
      type: [Number, String],
      default: 404
   }
})

console.log(props.errorCode)

const msg = computed(() => {
   switch(props.errorCode) {
      case '403':
         return t('Bad Request')
      case '500':
         return t('Server Error')
      case '404':
         return t('Not Found')
      default:
         return t('Unknown Error')
   }
})

</script>


<style scoped>

</style>
