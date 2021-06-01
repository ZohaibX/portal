
import express, { Request, Response } from 'express';
import { BadRequestError, currentUser , NotFoundError, NotAuthorizedError, requireAuth } from '@zbprojector/project1';
import { User } from '../../model/user';
import { Course } from '../../model/course';
const router = express.Router();

router.put(
  '/api/users/update-attendance',
  currentUser ,
  requireAuth ,
  async (req: Request, res: Response) => {
    if(!req.currentUser) throw new NotAuthorizedError();

    const {course_id} = req.body;

    const user = await User.findById(req.currentUser.id);
    if(!user) throw new NotAuthorizedError() ;

    console.log("im here - 1: " , user.courses , course_id)

    // const courseIndex = user.courses.indexOf(course_id)
    // if(courseIndex < 0) throw new NotFoundError();

    // const course = await Course.findById(course_id)
    // if(!course) throw new NotFoundError()

    // course.attendance = 75 ;
    // console.log(course);
    
    // await course.save() 
    

    res.status(201).send(user);
  }
);

export default router;
