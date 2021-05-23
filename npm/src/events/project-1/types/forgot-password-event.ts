import { AccountTypes } from './account-types';
import { Accounts } from './subjects';

export interface ForgotPasswordEvent {
  subject: Accounts.ForgotPassword; 
  data: {
    email: string | undefined;
    password: string;
  };
}
