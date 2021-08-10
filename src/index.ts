import 'reflect-metadata';
import 'dotenv-safe/config';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import setupDb from './database/setup-database';
import { HelloResolver } from './resolvers/hello';
import { UserResolver } from './resolvers/user';
import { usersRouter } from './routes/users';
import { CategoryResolver } from './resolvers/category';
import { ArticleResolver } from './resolvers/article';

setupDb();

// await knex.migrate.latest();
// await knex.seed.run();

const main = async (): Promise<void> => {
  const app = express();
  app.use(express.json());
  app.use(usersRouter);

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [
        HelloResolver,
        UserResolver,
        CategoryResolver,
        ArticleResolver,
      ],
      validate: false,
    }),
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log(`
      🚀 Server is running! 
      🔉 Listening on port 4000 
      📭 Query at https://studio.apollographql.com/dev
    `);
  });
};

main().catch((err) => {
  console.error(err);
});
