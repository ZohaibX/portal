import express, { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../model/user';

import { validateAuthInput } from '../services/validate-input';
import { BadRequestException } from '@zbtickets/common';
import { AccountType } from '../model/enums/accountType';
const router = express.Router();

//! Postman must be used in https version

router.post("/api/accounts/request-for-registration" , async(req , res) => {
  const {email  , department , section  , phone , rollNo} = req.body ;

  const emailExist = await User.findOne({email})
  if(emailExist) throw new BadRequestException("Email Already exist")

  // not validating input for now

  if(section && rollNo) {
    
    let student ;
    try {
        student = await new User({
        email , 
        department ,
        section ,
        phone ,
        rollNo ,
        accountType: AccountType.Student
      }).save()
    } catch (error) {
      console.log("error coming from req reg student"  , error)
      throw new Error(error)
    }

    
    res.send(student) ;
  }else {
    let teacher ;

    try {
      teacher = await new User({
        email  , department , phone , accountType: AccountType.Teacher
      }).save()
    } catch (error) {
      console.log("error coming from req reg teacher"  , error)
      throw new Error(error) 
    }
    res.send(teacher) ;
  }

})

export default router ;