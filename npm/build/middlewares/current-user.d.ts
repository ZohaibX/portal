import { Request, Response, NextFunction } from 'express';
import { AccountTypes } from '../events/project-1/types/account-types';
interface UserPayloadX {
    id: string;
    email: string;
    accountType: AccountTypes;
}
declare global {
    namespace Express {
        interface Request {
            currentUser?: UserPayloadX;
        }
    }
}
export declare const currentUser: (req: Request, res: Response, next: NextFunction) => void;
export {};
