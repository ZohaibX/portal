import { Publisher, AssignmentExpirationEvent, Accounts } from '@zbprojector/project1';

export class ExpirationCompletedPublisher extends Publisher<AssignmentExpirationEvent> {
  readonly subject = Accounts.Expired;
}