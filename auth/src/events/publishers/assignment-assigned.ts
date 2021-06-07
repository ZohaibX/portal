import { Publisher, AssignmentExpirationEvent, Accounts } from '@zbprojector/project1';

export class AssignmentAssignedPublisher extends Publisher<AssignmentExpirationEvent> {
  readonly subject = Accounts.AssignmentAssigned;
}