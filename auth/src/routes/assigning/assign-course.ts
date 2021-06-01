import { StudentCourse } from './../../model/types/course';

import express, { Request, Response } from 'express';
import { NotAuthorizedError, NotFoundError , AccountTypes, BadRequestError} from '@zbprojector/project1';

import { Course } from '../../model/course';
import {StudentCourseData } from '../../model/student-course'
import { TeacherCourseData } from '../../model/teacher-course';
import { User } from '../../model/user';
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

      const courseAlreadyExist = await StudentCourseData.findOne({course_code: course.course_code});
      if(courseAlreadyExist) throw new BadRequestError("Course Already Assigned");

     assignCourse = await StudentCourseData.build({
      course_id: course.id ,
      user_id: req.currentUser.id,
      course_name: course.course_name ,
      course_code: course.course_code 
    }).save() ;

    user.studentCourses.push(assignCourse.id);

  }else {

    const courseAlreadyExist = await TeacherCourseData.findOne({course_code: course.course_code});
    if(courseAlreadyExist) throw new BadRequestError("Course Already Assigned");

    assignCourse = await TeacherCourseData.build({
      user_id: req.currentUser.id,
      course_id: course.id ,
      course_name: course.course_name ,
      course_code: course.course_code 
    }).save() ;

    user.teacherCourses.push(assignCourse.id);
  }

  await user.save()

  console.log(user)
  res.status(201).send(user);
  
  }
);

export default router;
