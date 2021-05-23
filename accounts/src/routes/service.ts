import RequestForRegistration from './request-for-registration'
import GetAllRequests from './getAllRequests'
import CreateAccount from './create-accounts'
import DeleteRequest from './delete-requests'
import GetRequestData from './get-request-data'
import PasswordForgot from './password-forgot'

export default (app: any) => {
  app.use(RequestForRegistration)
  app.use(GetAllRequests)
  app.use(CreateAccount)
  app.use(DeleteRequest)
  app.use(GetRequestData)
  app.use(PasswordForgot)
}