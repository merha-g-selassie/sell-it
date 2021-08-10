import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('Articles').del();

  // Inserts seed entries
  await knex('Articles').insert([
    { name: 'Samsung Galaxy S20', price: 800, category_id: 6 },
    { name: 'Samsung Galaxy S21', price: 1000, category_id: 6 },
    { name: 'MacBook Pro', price: 2000, category_id: 7 },
    { name: 'Dell XPS', price: 1300, category_id: 7 },
    { name: 'Sony WF 1000 XM4', price: 300, category_id: 8 },
    { name: 'Playstation 5', price: 399, category_id: 9 },
    { name: 'Xbox Series X', price: 500, category_id: 9 },
    { name: 'Nintendo Switch', price: 300, category_id: 9 },
    { name: 'Ratchet & Clank', price: 79, category_id: 10 },
    { name: 'Horizon Zero Dawn', price: 79, category_id: 10 },
    { name: 'God of War', price: 79, category_id: 10 },
    { name: 'Super Smash Bros Ultimate', price: 60, category_id: 10 },
    {
      name: 'The Legend of Zelda. Breath of The Wild',
      price: 69,
      category_id: 10,
    },
  ]);
}
