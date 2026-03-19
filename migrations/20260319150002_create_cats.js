/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('cats', table => {
        table.increments();
        table.string('name', 50);
        table.string('color');
        table.integer('breed_id').unsigned().references('breeds.id');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable('cats', table => {
        table.dropForeign('breed_id')
    })
    .then(function() {
        return knex.schema.dropTableIfExists('cats');
    })
    ;
};
