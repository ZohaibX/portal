import { Listener, AssignmentExpirationEvent , Accounts } from '@zbprojector/project1';
import {AssignmentAssigned} from './queue-group/names'
import { Message } from 'node-nats-streaming';
import { expirationQueue } from '../../queues/expiration-srv';

export class AssignmentAssignedListener extends Listener<AssignmentExpirationEvent> {
  readonly subject = Accounts.AssignmentAssigned;
  queueGroupName = AssignmentAssigned;

  async onMessage(data: AssignmentExpirationEvent['data'], msg: Message) {

    const delay = new Date(data.assignment.expiresAt).getTime() - new Date().getTime();
    // new Date(data.expiresAt).getTime() will give us saved time in milli-seconds
    // new Date().getTime() will give us current time in milli-seconds

    console.log('delay time is: ', delay); // it would be in ms -- so delay/1000= seconds

    //? expiresAt property has saved specific timing in new.ts file

    await expirationQueue.add(
      {
        courseCode : data.courseCode ,
        section: data.section ,
        department: data.department ,
        assignmentId: data.assignment.id ,
        expiresAt: data.assignment.expiresAt
      },
      {
        delay,
      }
    );

    msg.ack();
  }
}