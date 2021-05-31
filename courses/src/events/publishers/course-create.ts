import { CourseCreateEvent, Publisher, Accounts } from '@zbprojector/project1';

export class CourseCreatePublisher extends Publisher<CourseCreateEvent> {
  readonly subject = Accounts.CourseCreated;
}