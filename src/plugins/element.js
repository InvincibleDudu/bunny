import {
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
   ElDropdownMenu
} from 'element-plus'

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
   // app.use(ElMessage)
}
