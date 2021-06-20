import { Publisher, AssignmentAssignedEvent, Accounts } from '@zbprojector/project1';

export class AssignmentAssignedPublisher extends Publisher<AssignmentAssignedEvent> {
  readonly subject = Accounts.AssignmentAssigned;
}