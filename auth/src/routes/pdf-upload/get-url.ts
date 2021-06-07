// this route will return a presigned url to the client

import { requireAuth, currentUser } from '@zbprojector/project1';
import express, { Request, Response } from 'express';
import AWS from 'aws-sdk';
import { v1 as uuid } from 'uuid';
import {keys} from '../profile-picture/keys'

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html

const s3 = new AWS.S3({
  signatureVersion: 'v4',
  accessKeyId: keys.ACCESS_KEY,
  secretAccessKey: keys.SECRET_KEY,
});

const router = express.Router();

// this method is returning a url, configured with the Key, we shared
router.get(
  '/api/users/pdf-upload/get-url',
  currentUser ,
  async (req: Request, res: Response) => {
    console.log(req.currentUser);
    
    // we want our key to be like this -- myUserId/12122113.jpeg -- where filename will be used as a random unique string
    const key = `${req.currentUser!.id}/${uuid()}.jpeg`;
    // this key will be the name of the file, we will upload to s3
    // so we could save the url and this filename, into our database

    console.log(req.params.contentType)
    s3.getSignedUrl(
      'putObject',
      {
        Bucket: 'project-1-bucket', /// change the names acc to projects -- PDF -- Content-Type: application/pdf;
        ContentType: req.body.contentType , // upload word file , video or picture 
        Key: key,
      },
      (err: any , url: any) => res.send({ key, url, err })
    );
  }
);

export default router 