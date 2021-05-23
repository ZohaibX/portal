import express, { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { Student } from '../model/student';

import { validateAuthInput } from '../services/validate-input';
import { BadRequestException } from '@zbtickets/common';
const router = express.Router();

//! Postman must be used in https version




export default router ;