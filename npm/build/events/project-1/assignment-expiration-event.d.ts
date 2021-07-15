import { Accounts } from './types/subjects';
export interface AssignmentExpirationEvent {
    subject: Accounts.Expired;
    data: {
        courseCode: number;
        section: string;
        department: string;
        assignment: {
            id: string;
            expiresAt: string;
        };
    };
}
