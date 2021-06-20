import { CourseCreatePublisher } from './../../../events/publishers/course-create';
import { natsWrapper } from './../../../services/nats/nats-wrapper';
import { validateCourseInput } from '../validation-input';
import pool from '../../../database/configure-db'
import {BadRequestError, NotAuthorizedError} from '@zbprojector/project1'

export default {
  addCourse: async (args: any , req: any) => {
    if (!req.currentUser) throw new NotAuthorizedError();

    const error = validateCourseInput(args.courseData);
    if (error) throw new BadRequestError(error);

    const {course_name , course_id} = args.courseData ;
    // args = {courseData: { course_name , course_id }}

    let course;
    try {
       course = await pool.query(
        'INSERT INTO courses (course_name , course_id , createdDate ) VALUES($1 , $2 , $3) RETURNING *',
        [course_name , course_id , new Date().toISOString()]
      );
  
    } catch (error) {
      console.log('error found from post request', error.message);
      throw new Error()
    }

    await new CourseCreatePublisher(natsWrapper.client).publish({
      user_id: req.currentUser!.id , 
      _id: course.rows[0].id ,
      course_name ,
      course_code: course_id
    })

    return {
      ...course.rows[0] ,
      createdDate: new Date(course.rows[0].createddate).toISOString()
    }
  },
  
};