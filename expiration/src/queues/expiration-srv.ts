import Queue from 'bull';
import { ExpirationCompletedPublisher } from '../events/publishers/assignment-time-complete';
import { natsWrapper } from '../services/nats/nats-wrapper';

/*
when creating an order , we will assign it time, for example 15 minutes 
we will tell expiration srv that an order is created 
expiration service will findout how much time, order has assigned 
and right after 15 minutes (or the time we have assigned )
expiration srv will publish a msg to orders srv, that expiration is done
then, order srv will decide that order is payed or not  
*/
/*  
 Main theme of this file is -- we want to publish an event that order is expired 
 when the order is created, we will get that through the listener
 then, in this file, with the help of bull. we will publish an event after 15 minutes / any timestamp 
 that will tell to expire the order
*/

//? to expire an order , we just need an order id, from our created listener
interface Payload {
  courseCode: number;
  section: string ;
  department: string ;
  assignmentId: string ;
  expiresAt: string ;
}

const expirationQueue = new Queue<Payload>('order:expiration', {
  redis: {
    host: process.env.REDIS_HOST,
  },
});

// this function will process , when the provided delay is completed
//? delay is provided in order created listener
expirationQueue.process(async (job:any) => {
  // we will simply publish an event of expiration complete, when the order service receives it, it will do its job
  new ExpirationCompletedPublisher(natsWrapper.client).publish({
    courseCode: job.data.courseCode ,
    section: job.data.section ,
    department: job.data.department ,
    assignment: {
      id: job.data.assignmentId , 
      expiresAt: job.data.expiredAt
    }
  });
});

export { expirationQueue };