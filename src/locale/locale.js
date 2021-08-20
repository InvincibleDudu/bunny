import en from '@/locale/en'
import zhCN from '@/locale/zh-CN'
import {createI18n} from 'vue-i18n'

export const messages = {
   "en": {...en},
   "zh-CN": {...zhCN}
}

export const i18n = createI18n({
   locale: navigator.language, // set locale
   fallbackLocale: 'en', // set fallback locale
   legacy: false,
   globalInjection: true,
   messages, // set locale messages
})
