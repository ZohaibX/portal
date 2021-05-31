import express, { Request, Response } from 'express';
import { currentUser } from '@zbprojector/project1';
import { requireAuth } from '@zbtickets/common';
import { User } from '../model/user';
const router = express.Router();

router.get(
  '/api/users/current-user-data',
  currentUser ,
  requireAuth ,
  async (req: Request, res: Response) => {

    const userId = req.currentUser!.id
    
    let user ;
    try {
      user = await User.findById(userId)
    } catch (error) {
      throw new Error()
    }
    
    // currentUser middleware will handle payload extraction from jwt
    res.status(200).send({ user: user || null });
  }
);

export default router;
