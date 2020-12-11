// recipe_id, step_id, ingredient_id, unit_of_measure, quantity
exports.seed = function(knex, Promise) {
    return knex('recipes').insert([   
      { recipe_id: 1, step_id: 1, ingredient_id: 1, unit_of_measure: "cup", quantity: '1/4' },
      { recipe_id: 2, step_id: 2, ingredient_id: 2, unit_of_measure: "cup", quantity: '1/3' },
      { recipe_id: 3, step_id: 3, ingredient_id: 3, unit_of_measure: "cup", quantity: '1/2' },
      { recipe_id: 4, step_id: 4, ingredient_id: 4, unit_of_measure: "cup", quantity: '1' },
      { recipe_id: 5, step_id: 5, ingredient_id: 5, unit_of_measure: null, quantity: null },
    ]);
  };
