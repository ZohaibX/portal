import { Message } from 'node-nats-streaming';
import {
  BadRequestError,
  NotFoundError,
} from '@zbprojector/project1';
import { AccountCreated } from './queue-groups/names';

import {Listener , Accounts , AssignmentExpirationEvent} from "@zbprojector/project1" ;
import { User } from '../../model/user';
import { AccountTypes } from '@zbprojector/project1/build/events/project-1/types/account-types';
import { StudentCourseData } from '../../model/student-course';


export class AssignmentExpiredListener extends Listener<AssignmentExpirationEvent> {

  subject: Accounts.Expired = Accounts.Expired;

  queueGroupName = AccountCreated; // queueGroupName may be used as queueGroup sometimes 
  // queue group property ensures that if we are running 2 copies of this service,
  // data will go to only one of them

  async onMessage(data: AssignmentExpirationEvent['data'], msg: Message) {
    
    console.log('Ive recieved  the event to expire the assignment')

    const { section , department, assignment , courseCode } = data ;

    // getting all students -- to assign them assignment
    const students = await User.find({ department , section}) ;
    if(!students) throw new BadRequestError("Students Not Found");

    const studentIds = students.map((student: any) => student.id)

    // updating all the students data
  for(let i=0 ; i< studentIds.length ; i++) {

    const course = await StudentCourseData.findOne({
          user_id: studentIds[i] , 
          course_code: courseCode
        });

    if(course) {
      console.log(`assignment.id is  ${assignment.id}`)

      // making big-o very bad -- but just for time pass this time 
      for(let i=0 ; i<course!.assignments!.length ; i++) {
        if(course!.assignments![i]!.id === assignment.id) {
          console.log("-------------------- ID MATCHED ----------------------")
          course!.assignments!.splice(i,1);
        }
      }

      await course!.save()
    }
  }

  console.log("All Assignments are removed")

    msg.ack();
  }
}
