import GetAllAccounts from './get-all-accounts';
import SignIn from './sign-in'
import CurrentUser from './current-user'
import SignOut from './sign-out'

export default (app: any) => {
  app.use(GetAllAccounts) ;
  app.use(SignIn)
  app.use(CurrentUser)
  app.use(SignOut)
} 