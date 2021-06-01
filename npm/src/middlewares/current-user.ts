import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { AccountTypes } from '../events/project-1/types/account-types';

interface UserPayloadX {
  id: string;
  email: string;
  accountType:  AccountTypes
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayloadX
    }
  }
}

export const currentUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.session?.jwt) {
    return next();
  }

  try {
    const payload = jwt.verify(
      req.session.jwt,
      process.env.JWT_KEY!
    ) as UserPayloadX;
    req.currentUser = payload;
  } catch (err) {}

  next();
};
