import GetAllAccounts from './get-all-accounts';
import SignIn from './sign-in'
import CurrentUser from './current-user'
import SignOut from './sign-out'
import ImageUpload from './profile-picture/service'
import GetCurrentUserData from './get-current-user-data'

import AssignCourse from './assigning/assign-course'
import GetCourses from './assigning/get-courses'
import UpdateAttendance from './assigning/update-courses'
import GetUserCourses from './assigning/get-user-courses'

import { currentUser, requireAuth } from '@zbprojector/project1';

export default (app: any) => {
  app.use(GetAllAccounts) ;
  app.use(SignIn)
  app.use(CurrentUser)
  app.use(SignOut)
  app.use(GetCurrentUserData)

  app.use(currentUser)
  app.use(requireAuth)

  app.use(AssignCourse)
  app.use(GetCourses)
  app.use(UpdateAttendance)
  app.use(GetUserCourses)
  ImageUpload(app)
} 