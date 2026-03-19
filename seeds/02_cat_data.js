/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('cats').del()
  await knex('cats').insert([
    {id: 1, 
      name: 'Gumball',
      color: 'Tuxedo',
      breed_id: 1
    },
    {id: 2, 
      name: 'Darwin',
      color: 'Orange',
      breed_id: 1
    },
    {id: 3, 
      name: 'Tugg',
      color: 'Black',
      breed_id: 2
    },

  ]);
};
