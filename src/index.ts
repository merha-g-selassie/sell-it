// import Knex from 'knex';
// import { Model } from 'objection';
// import User from './models/User';
// import configs from '../knexfile';

// const knex = Knex(configs.development);

// Model.knex(knex);

// const setupKnex = async (): Promise<void> => {
//   try {
//     await knex.migrate.latest();
//     await knex.seed.run();
//     const res = await User.query();
//     console.log(res);
//   } catch (err) {
//     console.error(err);
//   } finally {
//     await knex.destroy();
//   }
// };

// setupKnex();

console.log('hello');
