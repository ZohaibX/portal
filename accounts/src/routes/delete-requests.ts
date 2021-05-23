import express, { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../model/user';
import sendMail from '../services/mailing/server'

import { validateAuthInput } from '../services/validate-input';
import { BadRequestException } from '@zbtickets/common';
import { AccountType } from '../model/enums/accountType';

const router = express.Router();

//! Postman must be used in https version
router.delete("/api/accounts/delete-request" , async (req , res) => {
  
  if(!req.body.email) throw new BadRequestException("Provide an email")
  const {email} = req.body ;

  if(email.length < 10) throw new BadRequestException("enter vaild email") 

  const user = await User.findOne({email});
  if(!user) throw new BadRequestException("Email doesn't exist")

  if(user.accountActivated) throw new BadRequestException('Account is already created')

  try {
     await User.findOneAndDelete({ email })
  } catch (error) {
    throw new Error('Something went wrong')
  }

  const text = 'Your account create request has been rejected - contact for assisstance'
  sendMail(email , text )
  
  res.status(204).send(email)

})



export default router ;