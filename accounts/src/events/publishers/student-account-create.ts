//! That's how we will create publisher

import { Publisher, StudentAccountCreateEvent, Accounts } from '@zbprojector/project1';

export class StudentAccountCreatePublisher extends Publisher<StudentAccountCreateEvent> {
  readonly subject = Accounts.StudentAccountCreated;
}

// we will create instance of this class and run publish method


