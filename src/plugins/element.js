import El, {
   ElButton,
   ElUpload,
   ElLoading,
   ElInput,
   ElInputNumber,
   ElAutocomplete,
   ElPopover,
   ElMenu,
   ElMenuItem,
   ElDropdown,
   ElDropdownItem,
   ElDropdownMenu,
   ElResult, ElFormItem, ElForm, ElDescriptions, ElDescriptionsItem, ElConfigProvider, ElDatePicker, ElCheckbox
} from 'element-plus'
// import {  } from '@element-plus/icons'
// import { Avatar } from '@element-plus/icons'

export default (app) => {
   app.use(ElButton)
   app.use(ElUpload)
   app.use(ElLoading)
   app.use(ElInput)
   app.use(ElInputNumber)
   app.use(ElAutocomplete)
   app.use(ElPopover)
   app.use(ElMenu)
   app.use(ElMenuItem)
   app.use(ElDropdown)
   app.use(ElDropdownItem)
   app.use(ElDropdownMenu)
   app.use(ElResult)
   app.use(ElForm)
   app.use(ElFormItem)
   app.use(ElDescriptions)
   app.use(ElDescriptionsItem)
   app.use(ElConfigProvider)
   app.use(ElDatePicker)
   app.use(ElCheckbox)
   // app.use(El)
   // app.use(Avatar)
   // app.use(ElMessage)
}
