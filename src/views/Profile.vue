<template>
<!--   <NavBar/>-->
   <el-descriptions title="用户信息">
      <el-descriptions-item label="用户名">{{ store.state.user.name }}</el-descriptions-item>
      <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
      <el-descriptions-item label="居住地">苏州市</el-descriptions-item>
      <el-descriptions-item label="备注">
      </el-descriptions-item>
      <el-descriptions-item label="联系地址"
      >江苏省苏州市吴中区吴中大道 1188 号
      </el-descriptions-item
      >
   </el-descriptions>
</template>

<script setup>
import { useI18n } from "vue-i18n"
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import NavBar from '@/components/NavBar'

/**
 * Created by InvincibleDudu on 2021/9/6 at 14:55
 */

const { t } = useI18n()
const store = useStore()
const router = useRouter()

if (store.state.user.id === '0') {
   router.push('/register')
}

</script>


<style scoped>

</style>
