import Resolvers from './resolvers/resolvers'
import Schema from './schema/schema'
import { graphqlHTTP } from 'express-graphql';
import { currentUser } from '@zbprojector/project1';

export default (app: any) => {
  app.use(currentUser);
  app.use(
    '/api/courses',
    graphqlHTTP({
      schema: Schema,
      rootValue: Resolvers,
      graphiql: true,
    })
  );
};