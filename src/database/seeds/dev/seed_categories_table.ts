import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('Categories').del();

  // Inserts seed entries
  await knex('Categories').insert([
    { name: 'Phones' },
    { name: 'Laptops' },
    { name: 'Headphones' },
    { name: 'Game Consoles' },
    { name: 'Video games' },
  ]);
}
