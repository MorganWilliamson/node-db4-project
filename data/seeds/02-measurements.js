// measurement_id, quantity, unit_of_measure
exports.seed = function(knex, Promise) {
    return knex('measurements').insert([   
      { measurement_id: 1, quantity: '1/4', unit_of_measure: "cup" },
      { measurement_id: 2, quantity: '1/3', unit_of_measure: "cup" },
      { measurement_id: 3, quantity: '1/2', unit_of_measure: "cup" },
      { measurement_id: 4, quantity: '1', unit_of_measure: "cup" },
    ]);
  };
