import express, { Request, Response } from 'express';
import { currentUser , requireAuth} from '@zbprojector/project1';
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
