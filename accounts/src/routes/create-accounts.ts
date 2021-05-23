import express, { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { AccountHead } from '../model/account-head';

import { validateAuthInput } from '../services/validate-input';
import { BadRequestException } from '@zbtickets/common';
import { User } from '../model/user';
import sendMail from '../services/mailing/server'
import { textSpanOverlapsWith } from 'typescript';
import { natsWrapper } from '../services/nats/nats-wrapper';
import { AccountCreatePublisher } from '../events/publishers/account-create';



const router = express.Router();


router.post("/api/accounts/create-account" , async(req,  res) => {
  
  const {email  } = req.body ;
  
  const emailExist = await User.findOne({ email })
  if(!emailExist) throw new BadRequestException('Invalid Credentials');

  if(emailExist.accountActivated) throw new BadRequestException("Account is already activated")
  
    let password ;
    try {
      password = Math.floor(10000000 + Math.random() * 90000000); // generate random 8 digit numbers
      emailExist.password = JSON.stringify(password);
      emailExist.accountActivated = true

      await emailExist.save()

    } catch (error) {
      throw new BadRequestException("Something went wrong during save")
    }

      await new AccountCreatePublisher(natsWrapper.client).publish({
        id: emailExist.id ,
        password: emailExist.password ,
        department: emailExist.department ,
        section: emailExist.section ,
        phone: emailExist.phone ,
        rollNo: emailExist.rollNo ,
        email: emailExist.email , 
        accountActivated: emailExist.accountActivated ,
        accountType: emailExist.accountType , // here we are using account types from @zbprojector/project1
      })
    

    const text = `Your Password is ${password}`
     sendMail(email , text) //uncomment this when app is ready

    res.send(emailExist)
  
})
//! Postman must be used in https version

export default router ;