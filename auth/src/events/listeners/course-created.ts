import { Message } from 'node-nats-streaming';
import {
  NotFoundError,
} from '@zbprojector/project1';
import { AccountCreated } from './queue-groups/names';

import { CourseCreateEvent, Listener , Accounts } from '@zbprojector/project1';
import { Course } from '../../model/course';
import mongoose from 'mongoose'
import * as hash from '../../services/caching/cache' // to run js file -- tsconfig -> allowJS to true 


export class CourseCreatedListener extends Listener<CourseCreateEvent> {

  subject: Accounts.CourseCreated = Accounts.CourseCreated;

  queueGroupName = AccountCreated; // queueGroupName may be used as queueGroup sometimes 
  // queue group property ensures that if we are running 2 copies of this service,
  // data will go to only one of them

  async onMessage(data: CourseCreateEvent['data'], msg: Message) {

    let course ;
    
    course = await Course.build({
      id: data._id ,
      course_code: data.course_code ,
      course_name: data.course_name 
    }).save()

    hash.clearHash(data.user_id)

  console.log(`Course Data is saved with course name: ${course.course_name}`)

    msg.ack();
  }
}
