import { Accounts } from './types/subjects';

export interface AssignmentExpirationEvent {
  subject: Accounts.AssignmentAssigned; 
  data: {
    courseCode: number ,
    section: string ,
    department: string ,
    assignment: {
      id: string ,
      expiresAt: string, 
    }
  };
}
