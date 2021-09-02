<template>
   <div class="container">
      <div id="dpi" style="height: 1in; width: 1in; left: 100%; position: fixed; top: 100%;"></div>
      <div class="input">
         <span class="label">RoF：</span>
         <el-input placeholder="RPM" v-model="rof" type="number"></el-input>
      </div>
      <div class="input">
         <span class="label">BtK：</span>
         <el-input-number v-model="btk" :min="1" :max="50"></el-input-number>
      </div>
      <span class="result">{{ ((rof) ? ttkResult + ' ms' : t('Result Here')) }}</span>
      <div class="input ppi">
         <span class="label">{{ t('Resolution') + t(':')}}</span>
         <el-popover
            :title="t('Common Res')"
            :width="200"
            trigger="focus"
            :visible="popVisible1"
         >
            <div class="pop-container">
               <div @click="handleCommonRes(0)">8K</div>
               <div @click="handleCommonRes(1)">4K</div>
               <div @click="handleCommonRes(2)">QHD</div>
               <div @click="handleCommonRes(3)">FHD</div>
               <div @click="handleCommonRes(4)">HD</div>
               <div @click="handleCommonRes(5)">qHD</div>
            </div>
            <template #reference>
               <el-input placeholder="1920" v-model="horizontal" type="number" @click="popVisible1 = !popVisible1" @blur="popVisible1 = false"></el-input>
            </template>
         </el-popover>
         &nbsp;x&nbsp;
         <el-input placeholder="1080" v-model="vertical" type="number"></el-input>
      </div>

      <div class="input ppi">
         <span class="label">{{ t('Size') + t(':')}}</span>
         <el-popover
            :title="t('Common Size')"
            :visible="popVisible2"
            :width="256"
            trigger="focus"
         >
            <el-menu :default-active="'1'" class="el-menu-demo" mode="horizontal" @select="handleSelect">
               <el-menu-item index="1">{{ t('Phone') }}</el-menu-item>
               <el-menu-item index="2">{{ t('Laptop') }}</el-menu-item>
               <el-menu-item index="3">{{ t('Monitor') }}</el-menu-item>
               <el-menu-item index="4">{{ t('TV') }}</el-menu-item>
            </el-menu>
            <div class="pop-container" v-if="activeTab === '1'">
               <div @click="handleCommonSize(4)">4</div>
               <div @click="handleCommonSize(4.7)">4.7</div>
               <div @click="handleCommonSize(5.5)">5.5</div>
               <div @click="handleCommonSize(6.4)">6.4</div>
               <div @click="handleCommonSize(6.67)">6.67</div>
               <div @click="handleCommonSize(7)">7</div>
            </div>
            <div class="pop-container" v-if="activeTab === '2'">
               <div @click="handleCommonSize(11.9)">11.9</div>
               <div @click="handleCommonSize(13.3)">13.3</div>
               <div @click="handleCommonSize(14)">14</div>
               <div @click="handleCommonSize(15.6)">15.6</div>
               <div @click="handleCommonSize(16)">16</div>
               <div @click="handleCommonSize(17)">17</div>
            </div>
            <div class="pop-container" v-if="activeTab === '3'">
               <div @click="handleCommonSize(19)">19</div>
               <div @click="handleCommonSize(21)">21</div>
               <div @click="handleCommonSize(23.5)">23.5</div>
               <div @click="handleCommonSize(27)">27</div>
               <div @click="handleCommonSize(32)">32</div>
               <div @click="handleCommonSize(34)">34</div>
            </div>
            <div class="pop-container" v-if="activeTab === '4'">
               <div @click="handleCommonSize(40)">40</div>
               <div @click="handleCommonSize(43)">43</div>
               <div @click="handleCommonSize(49)">49</div>
               <div @click="handleCommonSize(55)">55</div>
               <div @click="handleCommonSize(65)">65</div>
               <div @click="handleCommonSize(75)">75</div>
            </div>
            <template #reference>
               <el-input-number v-model="size" :min="0.1" :max="200" :step="0.5" @click="popVisible2 = !popVisible2"></el-input-number>
            </template>
         </el-popover>
      </div>
      <span class="result">{{ (size) ? ppiResult + ' ' : t('Result Here') }}</span>
   </div>
</template>

<script setup>
import {ref, computed, onMounted} from 'vue'
import {toFixedNumber} from '@/util/util'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const rof = ref('')
const btk = ref(0)
const ttkResult = computed(() => ((60 / rof.value) * (btk.value - 1) * 1000).toFixed(0))
const vertical = ref(toFixedNumber(window.screen.height * window.devicePixelRatio, 2))
const horizontal = ref(toFixedNumber(window.screen.width * window.devicePixelRatio, 2))
const size = ref(6)
const ppiResult = computed(() => (Math.sqrt(vertical.value ** 2 + horizontal.value ** 2) / size.value).toFixed(2))
const activeTab = ref('1')
const popVisible1 = ref(false)
const popVisible2 = ref(false)

function handleInputChange(e) {
   console.log(e, rof)
}

function handleCommonRes(res) {
   switch (res) {
      case (0):
         horizontal.value = 7680
         vertical.value = 4320
         break
      case (1):
         horizontal.value = 3840
         vertical.value = 2160
         break
      case (2):
         horizontal.value = 2560
         vertical.value = 1440
         break
      case (3):
         horizontal.value = 1920
         vertical.value = 1080
         break
      case (4):
         horizontal.value = 1280
         vertical.value = 720
         break
      case (5):
         horizontal.value = 960
         vertical.value = 540
         break
   }
}

function handleCommonSize(commonSize) {
   size.value = commonSize
   popVisible2.value = false
}

function handleSelect(key) {
   activeTab.value = key
}

onMounted(() => {
   const dpi_x = document.getElementById('dpi').offsetWidth
   const dpi_y = document.getElementById('dpi').offsetHeight
   const width = screen.width / dpi_x
   const height = screen.height / dpi_y
   size.value = toFixedNumber(Math.sqrt(width ** 2 + height ** 2), 0)
})
</script>

<style scoped>
.container {
   display: grid;
   place-items: center;
}

.label {
   width: 10rem;
}

.input {
   padding-top: 1rem;
   display: flex;
   place-items: center;
   width: 256px;
}

.input .el-input-number {
   width: initial;
}

.result {
   padding: 2rem;
   font-size: 1.5rem;
}

.ppi {
   width: 300px;
}

.el-menu-item {
   line-height: 35px !important;
   height: 40px !important;
   padding: 0 6px;
}

.el-menu {
   display: flex;
   justify-content: space-between !important;
}

.pop-container {
   padding-top: 0.5rem;
   display: grid;
   line-height: 1.75rem;
   grid-template-columns: 1fr 1fr 1fr;
   place-items: center;
   cursor: pointer;
   color: rgb(20, 120, 248);
}
</style>

<style>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
   -webkit-appearance: none;
   margin: 0;
}
</style>
