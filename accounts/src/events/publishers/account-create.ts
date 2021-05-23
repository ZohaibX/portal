//! That's how we will create publisher

import { Publisher, AccountCreateEvent, Accounts } from '@zbprojector/project1';

export class AccountCreatePublisher extends Publisher<AccountCreateEvent> {
  readonly subject = Accounts.AccountCreated;
}

// we will create instance of this class and run publish method


