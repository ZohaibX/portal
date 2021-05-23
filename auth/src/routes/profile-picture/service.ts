import ImageUplaod from './image-upload'
import GetUrl from './get-url'

export default (app: any) => {
  app.use(GetUrl) ;
  app.use(ImageUplaod) ;
}