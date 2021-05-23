import { database } from './services/mongodb';
import { app } from './app';
import { natsConnection } from './services/nats/nats-connection';
// import { errorHandler } from './errors/error-handler';

if (!process.env.JWT_KEY)
// this is in k8s/auth depl
throw new Error('process.env.JWT_KEY is not defined ');

natsConnection()
database();

app.listen(3000, () => {
  console.log('App is listening on the port 3000!!');
});
