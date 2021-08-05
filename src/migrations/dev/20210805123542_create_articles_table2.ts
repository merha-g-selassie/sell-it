import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('Articles', (table) => {
    table.increments('id').primary();
    table.string('name').unique().notNullable();
    table.integer('price').notNullable();
    table.integer('category_id').unsigned();
    table.foreign('category_id').references('Categories.id').onDelete('SET NULL');
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('Articles');
}
