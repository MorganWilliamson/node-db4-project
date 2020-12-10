// Tables: Recipes (intermediary?), ingredients, measurements, steps
exports.up = function(knex) {
  return knex.schema
    // Steps
    .createTable('steps', table => {
        table.increments('step_id');
        table.string('step_name', 128).notNullable();
    })
    // Measurements
    .createTable('measurements', table => {
        table.increments('measurement_id');
        table.integer('quantity')
            .unsigned()
            .notNullable();
        table.string('unit_of_measure', 128).notNullable();
    })
    // Ingredients
    .createTable('ingredients', table => {
        table.increments('ingredient_id');
        table.string('ingredient_name', 128).notNullable();
    })
    // Recipes
    .createTable('recipes', table => {
        table.increments('recipe_id');
        table.string('step_name')
            .notNullable()
            .references('step_name').inTable('steps')
            .onDelete('restrict').onUpdate('restrict');
        table.string('ingredient_name')
            .references('ingredient_name', 128).inTable('ingredients')
            .onDelete('restrict').onUpdate('restrict');
        table.string('unit_of_measure', 128)
            .references('unit_of_measure').inTable('measurements')
            .onDelete('restrict').onUpdate('restrict');
        table.integer('quantity')
            .unsigned()
            .references('quantity').inTable('measurements')
            .onDelete('restrict').onUpdate('restrict');
    });
};

exports.down = function(knex) {
  return knex.schema   
    .dropTableIfExists('recipes')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('measurements')
    .dropTableIfExists('steps');
};
