import { Accounts } from './types/subjects';
export interface ForgotPasswordEvent {
    subject: Accounts.ForgotPassword;
    data: {
        email: string | undefined;
        password: string;
    };
}
