/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('famous_cats').del()
  await knex('famous_cats').insert([
    {id: 1, 
      name: 'Salem Saberhagen',
      media: 'Sabrina the Teenage Witch',
      breed_id: 1
    },
    {id: 2, 
      name: 'Cobweb',
      media: 'Hocus Pocus 2',
      breed_id: 2
    },

  ]);
};
