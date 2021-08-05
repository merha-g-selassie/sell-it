import Knex from 'knex';
import configs from '../../knexfile';
import { Model } from 'objection';

const setupDb = (): void => {
  try {
    const knex = Knex(configs.development);
    Model.knex(knex);
  } catch (error) {
    console.error(error);
  }
};

export default setupDb;
