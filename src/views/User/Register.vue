<template>
   <div class="register-form">
      <el-form
          label-position="right"
          label-width="80px"
          :model="form"
          :rules="rules"
          ref="registerForm">
         <el-form-item :label="t('Email')" prop="mail">
            <el-input type="email" v-model="form.mail"></el-input>
         </el-form-item>
         <el-form-item :label="t('Username')" prop="name">
            <el-input v-model="form.name"></el-input>
         </el-form-item>
         <el-form-item :label="t('Password')" prop="password">
            <el-input type="password" v-model="form.password"></el-input>
         </el-form-item>
         <el-form-item prop="eula" class="eula-form-item">
            <el-checkbox type="eula" v-model="form.eula" class="eula-checkbox">{{ t('I have read and agree to the ') }}
               <el-button type="text">
                  {{ t('EULA') }}
               </el-button>
            </el-checkbox>
         </el-form-item>
         <el-form-item>
            <el-button type="primary" @click="onSubmit">{{ t('Register') }}</el-button>
         </el-form-item>
      </el-form>
   </div>
</template>

<script setup>
import { onBeforeUnmount, ref } from "vue";
import { useI18n } from "vue-i18n";
import axios from "axios";
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

/**
 * Created by InvincibleDudu on 2021/9/3 at 16:21
 */

const { t } = useI18n()
const store = useStore()
const router = useRouter()
const form = ref({ mail: '', name: '', password: '', eula: false })
const rules = ref({
   name: [
      { required: true, message: t('What Should We Call You?'), trigger: 'blur' },
      {
         min: 3,
         max: 18,
         message: t('Name should be within 3 to 18 characters'),
         trigger: 'blur',
      },
   ],
   password: [
      { required: true, message: t('Set a Password!'), trigger: 'blur' },
      {
         min: 6,
         max: 64,
         message: t('Password should be within 6 to 64 characters'),
         trigger: 'blur',
      },
   ],
   mail: [
      { type: 'email', required: true, message: t('You need a Email in case you forget your Password!'), trigger: 'blur' }
   ],
   eula: [
      { type: 'enum', enum: [true], message: t('You Need to Agree to Our EULA!'), trigger: 'change' }
   ]
})
const registerForm = ref(null)

store.state.nav = false

function onSubmit() {
   // const res = await axios.post()
   // console.log(res.data)
   // if (res.data.code === 0) {
   //
   // }
   console.log(form.value)
   registerForm.value.validate((valid) => {
      if (valid) {
         alert('submit!')
         router.push('/')
      } else {
         console.log('error submit!!')
         return false
      }
   })
}

onBeforeUnmount(() => {
   store.state.nav = true
})
</script>


<style scoped>
.register-form {
   /*margin-top: 40vh;*/
   /*width: 50vw;*/
   /*min-width: 400px;*/
   height: 90vh;
   /*display: grid;*/
   /*place-items: center;*/
   display: flex;
   align-items: center;
   justify-content: center;
}

.el-input {
   min-width: 250px;
   width: 40vw;
   max-width: 375px;
}

.el-form-item__content {
   margin-left: 25px !important;
}

.eula-checkbox {
   margin-left: -24vw;
}
</style>
