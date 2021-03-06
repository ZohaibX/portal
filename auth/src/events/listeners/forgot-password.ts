import { Message } from 'node-nats-streaming';
import {
  NotFoundError,
} from '@zbprojector/project1';
import { AccountCreated } from './queue-groups/names';

import {Listener , Accounts, AccountCreateEvent, ForgotPasswordEvent, BadRequestError } from "@zbprojector/project1" ;
import { User } from '../../model/user';
import { AccountTypes } from '@zbprojector/project1/build/events/project-1/types/account-types';


export class PasswordForgotListener extends Listener<ForgotPasswordEvent> {
  subject: Accounts.ForgotPassword = Accounts.ForgotPassword;

  queueGroupName = AccountCreated; // queueGroupName may be used as queueGroup sometimes 
  // queue group property ensures that if we are running 2 copies of this service,
  // data will go to only one of them

  async onMessage(data: ForgotPasswordEvent['data'], msg: Message) {

    
    // data should be having email and password property
    const {email , password} = data ;
    // console.log("New Password is: ", password)

    const account = await User.findOne({ email });
    if(!account) throw new NotFoundError()
    
    try {
      await account.set({ password }).save();
    } catch (error) {
      throw new BadRequestError("Something bad happened while saving account in db")
    }
    console.log(`New Password is saved with email - ${data.email}`)

    msg.ack();
  }
}
