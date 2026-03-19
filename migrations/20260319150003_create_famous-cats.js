/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
      return knex.schema.createTable('famous_cats', table => {
        table.increments();
        table.string('name', 50);
        table.string('media');
        table.integer('breed_id').unsigned().references('breeds.id');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable('famous_cats', table => {
        table.dropForeign('breed_id')
    })
    .then(function() {
        return knex.schema.dropTableIfExists('famous_cats');
    })
    ;
};
