import GetAllAccounts from './get-all-accounts';
import SignIn from './sign-in'
import CurrentUser from './current-user'
import SignOut from './sign-out'
import ImageUpload from './profile-picture/service'
import GetCurrentUserData from './get-current-user-data'

import AssignCourse from './assigning/assign-course'
import GetCourses from './assigning/get-courses'

export default (app: any) => {
  app.use(GetAllAccounts) ;
  app.use(SignIn)
  app.use(CurrentUser)
  app.use(SignOut)
  app.use(GetCurrentUserData)

  app.use(AssignCourse)
  app.use(GetCourses)
  ImageUpload(app)
} 