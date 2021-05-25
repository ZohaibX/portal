import Resolvers from './resolvers/resolvers'
import Schema from './schema/schema'
import { graphqlHTTP } from 'express-graphql';

export default (app: any) => {
  app.use(
    '/api/courses',
    graphqlHTTP({
      schema: Schema,
      rootValue: Resolvers,
      graphiql: true,
    })
  );
};