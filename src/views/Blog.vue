<template>
   <article>
      <h1>{{ t('Article here?') }}</h1>
      <h2>What is Lorem Ipsum?</h2>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
      type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
      Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
      of Lorem Ipsum.

      <h2>Why do we use it?</h2>
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at
      its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
      opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
      packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will
      uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
      accident, sometimes on purpose (injected humour and the like).


      <h2>Where does it come from?</h2>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
      literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
      College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
      going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes
      from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
      written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first
      line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

      The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32
      and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form,
      accompanied by English versions from the 1914 translation by H. Rackham.

      <h2>Where can I get some?</h2>
      There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some
      form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a
      passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All
      the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first
      true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model
      sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always
      free from repetition, injected humour, or non-characteristic words etc.
   </article>

</template>

<script setup>
import { useI18n } from "vue-i18n"
import l from 'lodash'

/**
 * Created by InvincibleDudu on 2021/8/24 at 17:07
 */

const { t } = useI18n()

const a = [{
   "id": "362AB789-1B99-4F9E-8094-2B6AC5B3131C",
   "disk_path": "/",
   "disk_name": "Chenyf_不同磁盘类型_windows动态_G2OF_DYR4_OTPU_L32T.vhdx",
   "total": "20480",
   "format": null,
   "boot_index": 1,
   "is_same": 1,
   "name": "Chenyf_不同磁盘类型_windows动态_G2OF_DYR4_OTPU_L32T",
   "suffix": "vhdx",
   "disk_provision_type": 0
}, {
   "id": "5757FAEB-1565-47FE-9E1F-A68E5488E8DA",
   "disk_path": "/",
   "disk_name": "新建虚拟硬盘_0BQW.vhd",
   "total": "2048",
   "format": null,
   "boot_index": 2,
   "is_same": 1,
   "name": "11",
   "suffix": "vhd",
   "disk_provision_type": 0
}, {
   "id": "CE2C96E4-43D0-4721-9D99-BBB76C548D93",
   "disk_path": "/",
   "disk_name": "新建虚拟硬盘_HIEW.vhdx",
   "total": "20480",
   "format": null,
   "boot_index": 3,
   "is_same": 1,
   "name": "112",
   "suffix": "vhdx",
   "disk_provision_type": 0
}]

const b = l.uniqBy(a, 'name')

console.log(a, b)
console.log(a === b)
</script>


<style scoped>

article {
   font-size: 16px;
   padding: 2rem;
}

</style>
