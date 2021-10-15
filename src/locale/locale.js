import en from '@/locale/en'
import zhCN from '@/locale/zh-CN'
import { createI18n } from 'vue-i18n'

export const messages = {
   // "en": { ...en },
   en: {en: 'English', 'zh-CN': 'sChinese'},
   "zh-CN": { ...zhCN }
}

export default createI18n({
   locale: localStorage.getItem('locale') || (navigator.language === 'zh-CN' ? 'zh-CN' : 'en'), // set locale
   fallbackLocale: 'en', // set fallback locale
   legacy: false,
   globalInjection: true,
   // silentFallbackWarn: true,
   // silentTranslationWarn: true,
   formatFallbackMessages: true,
   fallbackWarn: false,
   missingWarn: false,
   messages, // set locale messages
})
