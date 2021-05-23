import express, { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../model/user';

import { validateAuthInput } from '../services/validate-input';
import { BadRequestException } from '@zbtickets/common';
import { AccountTypes } from '@zbprojector/project1';
const router = express.Router();

//! Postman must be used in https version
router.get("/api/accounts/get-all-students-requests" , async (req , res) => {
  
  let allRequests ; 
  try {
     allRequests = await User.find({accountType: AccountTypes.Student , accountActivated: false });
  } catch (error) {
    
  }
  console.log(allRequests);
  
  res.send(allRequests)

})

router.get("/api/accounts/get-all-teachers-requests" , async (req , res) => {
  
  let allRequests ; 
  try {
     allRequests = await User.find({accountType: AccountTypes.Teacher , accountActivated: false });
  } catch (error) {
    
  }
  console.log(allRequests);
  
  res.send(allRequests)

})



export default router ;