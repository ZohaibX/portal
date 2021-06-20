import { StudentCourse } from './../../../model/types/course';

import express, { Request, Response } from 'express';
import { NotAuthorizedError, NotFoundError , AccountTypes, BadRequestError} from '@zbprojector/project1';

import { Course } from '../../../model/course';
import {StudentCourseData } from '../../../model/student-course'
import { TeacherCourseData } from '../../../model/teacher-course';
import { User } from '../../../model/user';
import { Presence } from '../../../model/enums/presence';
const router = express.Router();

type NewClass = {
  classTitle: string ;
  classPresence: Presence ;
}

router.post(
  '/api/users/mark-attendance',
  async (req: Request, res: Response) => {
    if(req.currentUser!.accountType !== AccountTypes.Teacher) throw new BadRequestError('Only Teachers could mark attendance');

    const {studentId , courseCode , classTitle , attendance} = req.body ;

    // req body checking 
    if(!studentId || !courseCode || !classTitle || !attendance) throw new BadRequestError("all args required")

    if(attendance !== "Present" && attendance !== "Absent" && attendance !== "present" && attendance !== "absent" ) 
    throw new BadRequestError(`attendance should be 'Absent' or 'Present'`)
    
    // converting attentance into enum Presence
    let presence ;
    if(attendance === "Present" || attendance === "present") presence = Presence.Present ;
    else presence = Presence.Absent

    // verification if teacher have thos course -- with course code
    const teacherCourseVerification = await TeacherCourseData.findOne({ user_id: req.currentUser!.id , course_code: courseCode})
    if(!teacherCourseVerification) throw new BadRequestError('This course is not assigned to you')

    // getting student's course data 
    const studentCourse = await StudentCourseData.findOne({
      user_id: studentId ,
      course_code: courseCode
    });
    if(!studentCourse!.classes) throw new Error()

    // adding class details to student course data
     const newClass: NewClass   = {
      classTitle , 
      classPresence: presence
    };

    studentCourse!.classes!.push(newClass)

    // calculating attendance 
    let totalPresents = 0;
    for(let i=0 ; i<= studentCourse!.classes!.length ; i++) {
      if(studentCourse!.classes[i] && studentCourse!.classes[i].classPresence === Presence.Present) totalPresents++ ; 
    }

    let attendanceCalculation = Math.ceil(totalPresents/studentCourse!.classes!.length * 100)
    console.log("attendanceCalculation is: ", attendanceCalculation);
    
    studentCourse!.attendance = attendanceCalculation ;

    
    // adding class details to teacher course data 
    const teacherData = await TeacherCourseData.findOne({ user_id: req.currentUser!.id , course_code: courseCode});
    if(!teacherData) throw new NotFoundError();
    
    teacherData!.classes!.push({
      classTitle ,
      date: new Date().toISOString()
    })
    

    await studentCourse!.save()
    await teacherData!.save()

    res.send(studentCourse);
  
  }
);

export default router;
