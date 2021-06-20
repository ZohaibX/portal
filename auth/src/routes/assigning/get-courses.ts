import { cache, client } from './../../services/caching/cache-1';
import express, { Request, Response } from 'express';
import { BadRequestError, currentUser , NotAuthorizedError, NotFoundError, requireAuth } from '@zbprojector/project1';
import { User } from '../../model/user';
import { Course } from '../../model/course';
import { StudentCourseData } from '../../model/student-course';
const router = express.Router();

router.get(
  '/api/users/courses',
  currentUser ,
  requireAuth ,
  cache ,
  async (req, res) => {
    if(!req.currentUser) throw new NotAuthorizedError();

    const course = await Course.find();
    if(!course) throw new NotFoundError()

    const hashKey = req.currentUser!.id ;
    const key = req.params.key ;

    client.setex(JSON.stringify(hashKey), 3600 , JSON.stringify(course));

    res.status(201).send(course);
  }
);

export default router;
