import { Message } from 'node-nats-streaming';
import {
  NotFoundError,
} from '@zbprojector/project1';
import { AccountCreated } from './queue-groups/names';

import {Listener , Accounts , AssignmentExpirationEvent} from "@zbprojector/project1" ;
import { User } from '../../model/user';
import { AccountTypes } from '@zbprojector/project1/build/events/project-1/types/account-types';


export class AssignmentExpiredListener extends Listener<AssignmentExpirationEvent> {

  subject: Accounts.Expired = Accounts.Expired;

  queueGroupName = AccountCreated; // queueGroupName may be used as queueGroup sometimes 
  // queue group property ensures that if we are running 2 copies of this service,
  // data will go to only one of them

  async onMessage(data: AssignmentExpirationEvent['data'], msg: Message) {
    
    console.log('Ive recieved  the event')

    msg.ack();
  }
}
