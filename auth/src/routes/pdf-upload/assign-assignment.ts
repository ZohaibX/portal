import { BadRequestError ,AccountTypes, NotAuthorizedError, NotFoundError } from '@zbprojector/project1';
import express, { Request, Response } from 'express';
import { AssignmentAssignedPublisher } from '../../events/publishers/assignment-assigned';
import { StudentCourseData } from '../../model/student-course';
import { TeacherCourseData } from '../../model/teacher-course';
import { User } from '../../model/user';
import { natsWrapper } from '../../services/nats/nats-wrapper';

const router = express.Router();

// assign assignment to students 
// assign details to the teacher too 

router.post('/api/users/pdf-upload', async (req: Request, res: Response) => {
  // only teacher could do this 
  if(req.currentUser!.accountType !== AccountTypes.Teacher) throw new NotAuthorizedError();

  const { assignmentTitle , url , key , course_code , section , department , expirationTime } = req.body;

  // checking data 
  if(!assignmentTitle && !url && !key && !course_code && !section && !department && !expirationTime) throw new BadRequestError('Provide All Data Required');

  const teacher = await User.findById(req.currentUser!.id)

  // checking if teacher is from right department 
  if(teacher!.department !== department) throw new BadRequestError("Bad Request")

  const teacherCourseData = await TeacherCourseData.findOne({ user_id: req.currentUser!.id , course_code})

  // checking if teacher has this course 
  if(!teacherCourseData) throw new  BadRequestError("You don't have this course");

  // getting all students -- to assign them assignment
  const students = await User.find({ department , section}) ;
  if(!students) throw new BadRequestError("Students Not Found");

  const studentIds = students.map((student: any) => student.id)

  // //* Calculate an expiration date given by teacher
  const EXPIRATION_WINDOW_TIME = expirationTime * 60; //  minutes //? 
  const expiration = new Date();
  expiration.setSeconds(expiration.getSeconds() + EXPIRATION_WINDOW_TIME);
  // //? this will set the time into some long number
  // //? new Date(expiration).getTime() // saved time in ms  - new Date().getTime() // current time in ms
  // //? this is how we can get back our Expiration time in seconds
  // // note - this is how we can set 15 minutes after creating an order

  const randomId = JSON.stringify(Math.ceil(Math.random() * 9999))

  // updating all the students data
  for(let i=0 ; i< studentIds.length ; i++) {

      const course = await StudentCourseData.findOne({
            user_id: studentIds[i] , 
            course_code
          });
      
      if(course) {
        course!.assignments!.push({id:  randomId , title: assignmentTitle , url , expiration: expiration.toISOString() });
        await course!.save()
      }
  }

  
  new AssignmentAssignedPublisher(natsWrapper.client).publish({
    courseCode: course_code ,
    section: section ,
    department: department ,
    assignment: {
      id: randomId ,
      expiresAt: expiration.toISOString(), 
    }
  })

  console.log(`ImageUrl is: ${url} `);
  res.send(`ImageUrl is: ${url} `);
});

export default router ;