import { Accounts } from './types/subjects';

export interface CourseCreateEvent {
  subject: Accounts.CourseCreated; 
  data: {
    course_name: string ,
    course_code: string 
  };
}
