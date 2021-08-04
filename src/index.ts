import Knex from 'knex';
import { Model } from 'objection';

const knex = Knex({
  client: 'mysql',
  useNullAsDefault: true,
  connection: {
    host: '127.0.0.1',
    // user : 'your_database_user',
    password: 'mypass',
    database: 'myapp_test',
  },
});

Model.knex(knex);
