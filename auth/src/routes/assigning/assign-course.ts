
import express, { Request, Response } from 'express';
import { BadRequestError, currentUser , NotFoundError} from '@zbprojector/project1';
import { NotAuthorizedError, requireAuth } from '@zbtickets/common';
import { User } from '../../model/user';
import { Course } from '../../model/course';
const router = express.Router();

router.post(
  '/api/users/assign-course',
  currentUser ,
  requireAuth ,
  async (req: Request, res: Response) => {
    if(!req.currentUser) throw new NotAuthorizedError();

    const {course_id} = req.body;

    const user = await User.findById(req.currentUser.id);
    if(!user) throw new NotAuthorizedError() ;

    const course = await Course.findById(course_id) ;
    if(!course) throw new NotFoundError()

    user.courses.push(course)
    await user.save()
    

    res.status(201).send(user);
  }
);

export default router;
