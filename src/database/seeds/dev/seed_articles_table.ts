import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('Articles').del();

  // Inserts seed entries
  await knex('Articles').insert([
    { name: 'Samsung Galaxy S20', price: 800, category_id: 1 },
    { name: 'Samsung Galaxy S21', price: 1000, category_id: 1 },
    { name: 'MacBook Pro', price: 2000, category_id: 2 },
    { name: 'Dell XPS', price: 1300, category_id: 2 },
    { name: 'Sony WF 1000 XM4', price: 300, category_id: 3 },
    { name: 'Playstation 5', price: 399, category_id: 4 },
    { name: 'Xbox Series X', price: 500, category_id: 4 },
    { name: 'Nintendo Switch', price: 300, category_id: 4 },
    { name: 'Ratchet & Clank', price: 79, category_id: 5 },
    { name: 'Horizon Zero Dawn', price: 79, category_id: 5 },
    { name: 'God of War', price: 79, category_id: 5 },
    { name: 'Super Smash Bros Ultimate', price: 60, category_id: 5 },
    { name: 'The Legend of Zelda. Breath of The Wild', price: 69, category_id: 5 },
  ]);
}
