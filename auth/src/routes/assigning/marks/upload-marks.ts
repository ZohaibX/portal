import { StudentCourse } from './../../../model/types/course';

import express, { Request, Response } from 'express';
import { NotAuthorizedError, NotFoundError , AccountTypes, BadRequestError} from '@zbprojector/project1';

import { Course } from '../../../model/course';
import {StudentCourseData } from '../../../model/student-course'
import { TeacherCourseData } from '../../../model/teacher-course';
import { User } from '../../../model/user';
import { Presence } from '../../../model/enums/presence';
import { AssessmentTitles } from '../../../model/enums/assessment-titles';
const router = express.Router();

type NewClass = {
  classTitle: string ;
  classPresence: Presence ;
}

router.post(
  '/api/users/upload-marks',
  async (req: Request, res: Response) => {
    if(req.currentUser!.accountType !== AccountTypes.Teacher) throw new BadRequestError('Only Teachers could mark attendance');

    // getting required data
    const { assessmentTitle, assessmentTopic , totalMarks , gainedMarks , course_code , studentId  } = req.body ;
    if(!assessmentTitle && !assessmentTopic && !totalMarks && gainedMarks ) throw new BadRequestError('Provide all the details ');

    // setting assignment title -- acc to AssessmentTitles
    let title ;
    if(assessmentTitle === "Quiz" || assessmentTitle === "quiz") title = AssessmentTitles.Quiz ;
    else if(assessmentTitle === "Assignment" || assessmentTitle === "assignment") title = AssessmentTitles.Assignment;
    else if(assessmentTitle === "S1" || assessmentTitle === "s1") title = AssessmentTitles.S1 ;
    else if(assessmentTitle === "S2" || assessmentTitle === "s2") title = AssessmentTitles.S2 ;
    else if(assessmentTitle === "Terminal" || assessmentTitle === "terminal") title = AssessmentTitles.Terminal ;
    else throw new BadRequestError('Assessment Title should be valid')

    // verifying teacher -- if teacher is assigned with the course
    const teacherData = await TeacherCourseData.findOne({course_code: course_code, user_id: req.currentUser!.id});
    if(!teacherData) throw new NotAuthorizedError(); 

    // getting student data -- and verifying 
    const studentCourseData = await StudentCourseData.findOne({ course_code: course_code , user_id: studentId});
    if(!studentCourseData) throw new BadRequestError('No student is registered with this student id');

    // set marks in student data 
    studentCourseData!.marks!.push({
      id: JSON.stringify(Math.floor(Math.random() * 9999)) , 
      assessmentTitle: title , 
      assessmentTopic: assessmentTopic , 
      totalMarks: totalMarks , 
      gainedMarks: gainedMarks, 
      percentage: Math.ceil(gainedMarks/totalMarks * 100)
    })

    // as there is nothing to set for teacher data -- all set 

    await studentCourseData.save()

    res.send(studentCourseData)
  }
);

export default router;
