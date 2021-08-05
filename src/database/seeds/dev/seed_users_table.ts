import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('Users').del();

  // Inserts seed entries
  await knex('Users').insert([
    { username: 'Merha', email: 'merha@merha.com', password: 'abc' },
    { username: 'Reggie', email: 'reggie@reggie.com', password: 'abc' },
    { username: 'Say', email: 'say@say.com', password: 'abc' },
  ]);
}
