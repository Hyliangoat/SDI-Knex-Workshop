/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.schema.raw('TRUNCATE breeds CASCADE');
  await knex('breeds').del()
  await knex('breeds').insert([
    {id: 1, 
      name: 'American Shorthair', 
      most_common_color: 'Tabby',
      lifespan: '20 years',
      common_trait: 'playful',
      origin_country: 'America',
      famous_cat_of_this_breed: 'Salem Saberhagen' 
    },
    {id: 2, 
      name: 'Bombay', 
      most_common_color: 'Black',
      lifespan: '20 years',
      common_trait: 'eerily clever',
      origin_country: 'America',
      famous_cat_of_this_breed: 'Cobweb' 
    },
  ]);
};
