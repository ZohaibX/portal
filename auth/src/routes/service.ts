import GetAllAccounts from './get-all-accounts';
import SignIn from './sign-in'
import CurrentUser from './current-user'
import SignOut from './sign-out'
import ImageUpload from './profile-picture/service'

export default (app: any) => {
  app.use(GetAllAccounts) ;
  app.use(SignIn)
  app.use(CurrentUser)
  app.use(SignOut)
  ImageUpload(app)
} 