import express, { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import { validateAuthInput } from '../services/validate-input';
import { BadRequestException } from '@zbtickets/common';
import { User } from '../model/user';
const router = express.Router();

//! Postman must be used in https version

router.get("/api/users/get-all-accounts" , async (req , res) => {

  const accounts = await User.find() ;

  res.send(accounts)
})


export default router ;