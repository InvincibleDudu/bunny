<template>
   <div>{{ what }}</div>
   <el-upload
      class="upload-demo"
      drag
      :action="url"
      :before-upload="beforeUpload"
   >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <template #tip>
         <div class="el-upload__tip">只能上传 jpg/png 文件，且不超过 500kb</div>
      </template>
   </el-upload>
</template>

<script setup>
import {ref} from "vue"

const what = ref("anything")
const url = ref('http://localhost/api/')

function beforeUpload(file) {
   console.log('before upload', file)
   return false
}


</script>


<style>
</style>
