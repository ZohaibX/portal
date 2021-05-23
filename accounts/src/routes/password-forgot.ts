import express, { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../model/user';
import sendMail from '../services/mailing/server'

import { validateAuthInput } from '../services/validate-input';
import { BadRequestException } from '@zbtickets/common';
import { AccountType } from '../model/enums/accountType';
import { PasswordForgotPublisher } from '../events/publishers/password-forgot';
import { natsWrapper } from '../services/nats/nats-wrapper';

const router = express.Router();

//! Postman must be used in https version
router.post("/api/accounts/password-forgot" , async (req , res) => {
  
  if(!req.body.email) throw new BadRequestException("Provide an email")
  const {email} = req.body ;

  if(email.length < 10) throw new BadRequestException("enter vaild email") 

  const user = await User.findOne({email});
  if(!user) throw new BadRequestException("Email doesn't exist")

  if(!user.accountActivated) throw new BadRequestException('No Account with this email - create account first')

  const password = Math.floor(10000000 + Math.random() * 90000000); // generate random 8 digit numbers
  user.password = JSON.stringify(password);
  
  await user.save()

  try {
    await new PasswordForgotPublisher(natsWrapper.client).publish({
      password: user.password ,
      email: user.email , 
    })
  } catch (error) {
    throw new BadRequestException("error")
  }

  const text = `Your new password is - ${password}` ;
  sendMail(email , text )
  
  res.send(`New Password has been sent to ${email}`)

})



export default router ;