import express, { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../model/user';

import { validateAuthInput } from '../services/validate-input';
import { BadRequestException, NotFoundError } from '@zbtickets/common';
import { AccountType } from '../model/enums/accountType';

const router = express.Router();

//! Postman must be used in https version
router.get("/api/accounts/get-request-data/:email" , async (req , res) => {
  
  const {email} = req.params ;
  console.log(email);
  

  if(email.length < 10) throw new BadRequestException("enter vaild email through parameters");

  const userData = await User.findOne({ email })
  if(!userData) throw new BadRequestException("Email Not Found")
  
  console.log(userData);
  
  res.send(userData)

})



export default router ;