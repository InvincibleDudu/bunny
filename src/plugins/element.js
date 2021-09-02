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
   ElDropdownMenu,
   ElResult
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
   // app.use(Avatar)
   // app.use(ElMessage)
}
