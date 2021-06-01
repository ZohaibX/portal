import { Accounts } from './types/subjects';

export interface CourseCreateEvent {
  subject: Accounts.CourseCreated; 
  data: {
    _id: string,
    course_name: string ,
    course_code: number 
  };
}
