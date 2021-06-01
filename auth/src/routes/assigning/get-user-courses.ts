import express, { Request, Response } from 'express';
import { BadRequestError, currentUser,NotAuthorizedError, requireAuth } from '@zbprojector/project1';
import { User } from '../../model/user';
import { Course } from '../../model/course';
import { StudentCourseData } from '../../model/student-course';
const router = express.Router();

router.get(
  '/api/users/user-courses',
  currentUser ,
  requireAuth ,
  async (req: Request, res: Response) => {
    if(!req.currentUser) throw new NotAuthorizedError();

    const courses = await StudentCourseData.find({user_id: req.currentUser.id})

    res.status(201).send(courses);
  }
);

export default router;
