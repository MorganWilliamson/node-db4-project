// step_id, step_name
exports.seed = function(knex, Promise) {
    return knex('steps').insert([
        { step_id: 1, step_name: "Preheat oven." },
        { step_id: 2, step_name: "Cut ingredients." },
        { step_id: 3, step_name: "Combine ingredients." },
        { step_id: 4, step_name: "Bake in oven." },
        { step_id: 5, step_name: "Let cool." },
    ]);
};
