/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
        return knex.schema.createTable('breeds', table => {
        table.increments();
        table.string('name', 50);
        table.string('most_common_color');
        table.string('lifespan');
        table.string('common_trait');
        table.string('origin_country');
        table.string('famous_cat_of_this_breed');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('breeds');
};
