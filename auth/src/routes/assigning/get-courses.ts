import express, { Request, Response } from 'express';
import { BadRequestError, currentUser } from '@zbprojector/project1';
import { NotAuthorizedError, requireAuth } from '@zbtickets/common';
import { User } from '../../model/user';
import { Course } from '../../model/course';
const router = express.Router();

router.get(
  '/api/users/courses',
  currentUser ,
  requireAuth ,
  async (req: Request, res: Response) => {
    if(!req.currentUser) throw new NotAuthorizedError();

    const course = await Course.find()

    res.status(201).send(course);
  }
);

export default router;
