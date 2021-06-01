import { StudentCourse } from './../../model/types/course';

import express, { Request, Response } from 'express';
import { NotAuthorizedError, NotFoundError , AccountTypes} from '@zbprojector/project1';
import { User } from '../../model/user';
import { Course } from '../../model/course';
import {StudentCourseData } from '../../model/student-course'
import { TeacherCourseData } from '../../model/teacher-course';
const router = express.Router();

router.post(
  '/api/users/assign-course',
  async (req: Request, res: Response) => {
    if(!req.currentUser) throw new NotAuthorizedError();

    const {course_id} = req.body;

    const user = await User.findById(req.currentUser.id);
    if(!user) throw new NotAuthorizedError() ;

    const course = await Course.findById(course_id) ;
    if(!course) throw new NotFoundError()
    
    let assignCourse ;
    if(req.currentUser.accountType === AccountTypes.Student) {
     assignCourse = await StudentCourseData.build({
      user_id: req.currentUser.id,
      course_name: course.course_name ,
      course_code: course.course_code 
    }).save() ;

    user.studentCourses.push(assignCourse.id);
  }else {
    assignCourse = await TeacherCourseData.build({
      user_id: req.currentUser.id,
      course_name: course.course_name ,
      course_code: course.course_code 
    }).save() ;

    user.teacherCourses.push(assignCourse.id);
  }

  await user.save()
  res.status(201).send(user);
  
  }
);

export default router;
