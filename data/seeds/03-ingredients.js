// ingredient_id, ingredient_name
exports.seed = function(knex, Promise) {
    return knex('ingredients').insert([   
      { ingredient_id: 1, ingredient_name: "flour" },
      { ingredient_id: 2, ingredient_name: "eggs" },
      { ingredient_id: 3, ingredient_name: "sugar" },
      { ingredient_id: 4, ingredient_name: "milk" },
      { ingredient_id: 5, ingredient_name: "chocolate chips" },
    ]);
  };
