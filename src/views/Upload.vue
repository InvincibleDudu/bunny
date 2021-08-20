<template>
   <el-upload
      class="upload-demo pt"
      drag
      :action="url + fileType"
      accept=".mp4, .avi, .mov, .wav, .mp3, .aac"
      :before-upload="beforeUpload"
      :on-success="onSuccess"
      :show-file-list="false"
      v-loading.fullscreen.lock="fullscreenLoading"
   >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <template #tip>
         <div class="el-upload__tip">.mp4, .avi, .mov, mp3, aac, wav</div>
      </template>
   </el-upload>
</template>

<script setup>
import { onMounted, ref, onUnmounted } from "vue"
import VideoToAudio from 'video-to-audio'
import { ElLoading, ElMessage, ElMessageBox } from 'element-plus'
import axios from 'axios'
import { getReadableTime } from '@/util/util'

const url = ref('http://localhost/api/upload?userId=x&fileType=')
const fileType = ref('')
const fullscreenLoading = ref(false)

async function connect() {
   const res = await axios.get('http://localhost/api/hello')
   console.log(res.data)
   ElMessage({
      showClose: true,
      message: res.data,
      type: 'success'
   })
}

onMounted(async () => {
   await connect()
})

function beforeUpload(file) {
   console.log('before upload', file)

   if (file.name.includes('.mp3') || file.name.includes('.aac') || file.name.includes('.wav')) {
      console.log('audio')
      if (file.name.includes('.mp3'))
         fileType.value = 'mp3'
      else if (file.name.includes('.aac'))
         fileType.value = 'aac'
      else
         fileType.value = 'wav'
      fullscreenLoading.value = true
      return new Promise((resolve) => {
         resolve()
      })
   } else if (file.name.includes('.mov') || file.name.includes('.avi') || file.name.includes('.mp4')) {
      console.log('video')
      convertToAudio(file)
   } else {
      console.log('invalid file type')
      ElMessage({
         showClose: true,
         message: '无效文件类型',
         type: 'error'
      })
   }
   return false
}

function onSuccess(res) {
   fullscreenLoading.value = false
   if (res.flash_result) {
      console.log(res.flash_result[0].text)
      ElMessageBox.alert(res.flash_result[0].text, '识别结果', {
         confirmButtonText: '确定',
         callback: () => {
         }
      })
   } else {
      ElMessage({
         showClose: true,
         message: res.message,
         type: 'error'
      })
   }
}

async function convertToAudio(sourceVideoFile) {
   // console.log(event)
   const loading = ElLoading.service({
      lock: true,
      text: '检测到视频文件，转换并识别中...'
   })
   const format = 'wav'
   let convertedAudioDataObj = await VideoToAudio.convert(sourceVideoFile, format)
   // downloadAudio(convertedAudioDataObj)
   console.log(convertedAudioDataObj)
   let file = await fetch(convertedAudioDataObj.data).then(r => r.blob())
      .then(blobFile => new File([blobFile], convertedAudioDataObj.name + getReadableTime() + '.wav', { type: "audio/wav" }))
   const res = await fileUpload(file)
   console.log(res.data)
   ElMessageBox.alert(res.data.flash_result[0].text, '识别结果', {
      confirmButtonText: '确定',
      callback: () => {
      }
   })
   // }).catch((e) => {
   //    console.log(e)
   // })
   loading.close()
}

function downloadAudio(convertedAudioDataObj) {
   let a = document.createElement("a")
   a.href = convertedAudioDataObj.data
   a.download = convertedAudioDataObj.name + "." + convertedAudioDataObj.format
   a.click()
}

function fileUpload(file) {
   console.log("file upload? ")
   const formData = new FormData()
   formData.append('file', file)
   const config = {
      timeout: 15000,
      headers: {
         'content-type': 'multipart/form-data'
      }
   }
   return axios.post(url.value + "wav", formData, config)
}

onUnmounted(() =>
   ElMessage.closeAll()
)

</script>

<style scoped>
.pt {
   padding-top: 1rem;
}
</style>
