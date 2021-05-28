import { AccountTypes } from './types/account-types';
import { Accounts } from './types/subjects';

export interface AccountCreateEvent {
  subject: Accounts.AccountCreated;
  data: {
    id: string;
    email: string | undefined;
    password: string;
    accountActivated: boolean;
    department: string;
    section?: string | undefined ;
    phone: number;
    rollNo?: number | undefined ;
    accountType: AccountTypes
  };
}
