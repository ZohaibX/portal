//! That's how we will create publisher

import { Publisher, StudentAccountCreateEvent,ForgotPasswordEvent , Accounts } from '@zbprojector/project1';

export class PasswordForgotPublisher extends Publisher<ForgotPasswordEvent> {
  readonly subject = Accounts.ForgotPassword;
}

// we will create instance of this class and run publish method


