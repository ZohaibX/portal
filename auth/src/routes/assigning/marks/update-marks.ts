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

router.put(
  '/api/users/update-marks',
  async (req: Request, res: Response) => {
    if(req.currentUser!.accountType !== AccountTypes.Teacher) throw new BadRequestError('Only Teachers could mark attendance');

    // getting required data
    const { assessmentTitle, assessmentTopic , totalMarks , gainedMarks , course_code , studentId , assessmentId } = req.body ;
    if(!assessmentTitle && !assessmentTopic && !totalMarks && gainedMarks && assessmentId ) throw new BadRequestError('Provide all the details ');

    // setting assignment title -- acc to AssessmentTitles
    let title: AssessmentTitles ;
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
    const studentCourseData = await StudentCourseData.findOne(
      { course_code: course_code , user_id: studentId}
      );
    if(!studentCourseData) throw new BadRequestError('No student is registered with this student id');

    // get assignment data 
    // const assignmentData = studentCourseData!.marks!.find((item: any) => item._id === assessmentId);
    // if(!assignmentData) throw new BadRequestError("Assignment Data doesn't exist");

    // update data
    // assignmentData!.assessmentTitle = title ,
    // assignmentData!.assessmentTopic = assessmentTopic ;
    // assignmentData!.totalMarks = totalMarks ;
    // assignmentData!.gainedMarks = gainedMarks ;
    // assignmentData!.percentage = Math.ceil(gainedMarks/totalMarks * 100) ;

    // console.log(studentCourseData!.marks!);
    // studentCourseData!.marks!.find((item: any) => {
    //   if(item._id === assessmentId) {
    //     item!.assessmentTitle = title ,
    //     item!.assessmentTopic = assessmentTopic ;
    //     item!.totalMarks = totalMarks ;
    //     item!.gainedMarks = gainedMarks ;
    //     item!.percentage = Math.ceil(gainedMarks/totalMarks * 100) ;
    //   }
    // })

    for(let i=0 ; i< studentCourseData!.marks!.length ; i++) {
      if(studentCourseData!.marks![i].id! === assessmentId) {
        studentCourseData!.marks![i].assessmentTitle = title ,
        studentCourseData!.marks![i].assessmentTopic = assessmentTopic ;
        studentCourseData!.marks![i].totalMarks = totalMarks ;
        studentCourseData!.marks![i].gainedMarks = gainedMarks ;
        studentCourseData!.marks![i].percentage = Math.ceil(gainedMarks/totalMarks * 100) ;
      }
    }
 
    // as there is nothing to set for teacher data -- all set -- so save studentCourseData
    await studentCourseData.save()

    res.send(studentCourseData)
  }
);

export default router;
