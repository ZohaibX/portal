import GetUrl from './get-url'
import SaveURL from './assign-assignment'

export default (app:any) => {
  app.use(GetUrl);
  app.use(SaveURL);
}