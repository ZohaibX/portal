import { NotFoundError } from '@zbprojector/project1';
import express, { Request, Response } from 'express';

const router = express.Router();

router.post('/api/users/image-upload', async (req: Request, res: Response) => {
  const { imageUrl } = req.body;

  // note - imageUrl is not actual url but key 
  // url data that we recieve from get-url is url, key and error

  // key is the name of image, we set that in get-url
  // and url is url

  // we can get both from frontend and save here 

  console.log(`ImageUrl is: ${imageUrl} `);
  res.send(`ImageUrl is: ${imageUrl} `);
});

export default router ;