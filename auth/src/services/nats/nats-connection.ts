import { AccountCreatedListener } from '../../events/listeners/account-created';
import { PasswordForgotListener } from '../../events/listeners/forgot-password';
import { natsWrapper } from './nats-wrapper';

export const natsConnection = async () => {
  try {
    if (!process.env.NATS_CLUSTER_ID)
      throw new Error('NATS CLUSTER_ID is not defined');

    if (!process.env.NATS_CLIENT_ID)
      throw new Error('NATS CLIENT_ID is not defined');

    if (!process.env.NATS_URL) throw new Error('NATS URL is not defined');

    await natsWrapper.connect(
      process.env.NATS_CLUSTER_ID,
      process.env.NATS_CLIENT_ID, // client id is always unique, client id is its own pod name, which is always unique
      process.env.NATS_URL
    );
    // it already has a console.log of NATS connection in natsWrapper
    natsWrapper.client.on('close', () => {
      console.log('NATS connection closed');
      process.exit();
    });

    process.on('SIGINT', () => natsWrapper.client.close());
    process.on('SIGTERM', () => natsWrapper.client.close());
    
    new AccountCreatedListener(natsWrapper.client).listen();
    new PasswordForgotListener(natsWrapper.client).listen();
  } catch (error) {
    console.error(error);
  }
};
