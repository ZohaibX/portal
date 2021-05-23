import { AccountTypes } from './account-types';
import { Accounts } from './subjects';

export interface StudentAccountCreateEvent {
  subject: Accounts.StudentAccountCreated;
  data: {
    id: string;
    email: string | undefined;
    password: string;
    accountActivated: boolean;
    department: string;
    section: string | undefined ;
    phone: number;
    rollNo: number | undefined ;
    accountType: AccountTypes
  };
}
