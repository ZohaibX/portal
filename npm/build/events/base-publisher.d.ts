import { Stan } from 'node-nats-streaming';
import { Accounts } from './project-1/types/subjects';
interface Event {
    subject: Accounts;
    data: any;
}
export declare abstract class Publisher<T extends Event> {
    abstract subject: T['subject'];
    protected client: Stan;
    constructor(client: Stan);
    publish(data: T['data']): Promise<void>;
}
export {};
