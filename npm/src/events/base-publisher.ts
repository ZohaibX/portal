import { Stan } from 'node-nats-streaming';
import { Accounts } from './project-1/types/subjects';
import { Subjects } from './subjects';

interface Event {
  subject: Accounts; //! we will have to change this project wise 
  data: any;
}

export abstract class Publisher<T extends Event> {
  abstract subject: T['subject'];
  protected client: Stan;

  constructor(client: Stan) {
    this.client = client;
  }

  publish(data: T['data']): Promise<void> {
    return new Promise((resolve, reject) => {
      this.client.publish(this.subject, JSON.stringify(data), (err) => {
        if (err) {
          return reject(err);
        }
        console.log('Event published to subject', this.subject);
        resolve();
      });
    });
  }
}
