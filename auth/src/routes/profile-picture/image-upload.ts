import { NotFoundError , NotAuthorizedError , BadRequestError } from '@zbprojector/project1';
import express, { Request, Response } from 'express';
import {User} from '../../model/user'

const router = express.Router();

router.post('/api/users/image-upload', async (req: Request, res: Response) => {
  if(!req.currentUser) throw new NotAuthorizedError()

  const { imageUrl } = req.body;
  if(!imageUrl) throw new BadRequestError("Provide Image Url")

  const user = await User.findByIdAndUpdate(req.currentUser!.id , {
    profile_pic: {
      url: imageUrl
    }
  } ,{ new: true }) ;
  if(!user) throw new BadRequestError('User Not Found');

  res.send(user);
});

export default router ;