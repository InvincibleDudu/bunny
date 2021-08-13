import { ElButton, ElUpload, ElLoading} from 'element-plus'

export default (app) => {
  app.use(ElButton)
  app.use(ElUpload)
  app.use(ElLoading)
  // app.use(ElMessage)
}
