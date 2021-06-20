import { Message } from 'node-nats-streaming';
import {
  NotFoundError,
} from '@zbprojector/project1';
import { AccountCreated } from './queue-groups/names';

import {Listener , Accounts, AccountCreateEvent } from "@zbprojector/project1" ;
import { User } from '../../model/user';
import { AccountTypes } from '@zbprojector/project1/build/events/project-1/types/account-types';


export class AccountCreatedListener extends Listener<AccountCreateEvent> {

  subject: Accounts.AccountCreated = Accounts.AccountCreated;

  queueGroupName = AccountCreated; // queueGroupName may be used as queueGroup sometimes 
  // queue group property ensures that if we are running 2 copies of this service,
  // data will go to only one of them

  async onMessage(data: AccountCreateEvent['data'], msg: Message) {
    let account ;

    console.log('password from listener is: ', data.password);
    
    account = new User({
      _id: data.id , 
      password: data.password ,
      department: data.department ,
      section: data.section ,
      phone: data.phone ,
      rollNo: data.rollNo ,
      email: data.email , 
      accountActivated: data.accountActivated ,
      accountType: data.accountType ,
    })

  await account.save() ;
  console.log(`Account data is saved with email - ${data.email}`)

    msg.ack();
  }
}
