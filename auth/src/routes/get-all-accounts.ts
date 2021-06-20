import express, { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import { validateAuthInput } from '../services/validate-input';
import { User } from '../model/user';
import { AccountType } from '../model/enums/accountType';
const router = express.Router();

//! Postman must be used in https version

router.get("/api/users/get-all-accounts" , async (req , res) => {

  const accounts = await User.find() ;

  res.send(accounts)
})

router.get("/api/users/get-all-accounts-by-department/:department" , async (req , res) => {

  const accounts = await User.find({department: req.params.department}) ;

  res.send(accounts)
})

router.get("/api/users/get-all-accounts-by-section/:section" , async (req , res) => {

  const accounts = await User.find({section: req.params.section}) ;

  res.send(accounts)
})

router.get("/api/users/get-all-accounts-by-accountType/:accountType" , async (req , res) => {

  let accounts ;
  
  if(req.params.accountType === 'Student' || req.params.accountType === 'student' ) {
   accounts = await User.find({accountType: AccountType.Student}) ; }
  else if(req.params.accountType === 'Teacher' || req.params.accountType === 'teacher' ) {
     accounts = await User.find({accountType: AccountType.Teacher}) ; }

  res.send(accounts)
})


export default router ;