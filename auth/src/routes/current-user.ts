import express, { Request, Response } from 'express';
import { currentUser } from '@zbprojector/project1';
import { requireAuth } from '@zbtickets/common';
const router = express.Router();

router.get(
  '/api/users/current-user',
  currentUser ,
  requireAuth ,
  async (req: Request, res: Response) => {
    console.log(req.currentUser);
    
    // currentUser middleware will handle payload extraction from jwt
    res.status(200).send({ currentUser: req.currentUser || null });
  }
);

export default router;
