const db = require('../../data/db-config');

module.exports = {
    getRecipes() {
        return db('recipes r')
            .join('ingredients i', 'ingredient_id', 'r.ingredient')
            .select('r.recipe_id', 'r.step_id', 'i.ingredient_id');
    },
    getShoppingList(recipe_id) {
        return db('ingredients i')
            .join('recipes r', 'i.ingredient_id', 'r.recipe_id')
            .join('i.ingredient_name', 'r.recipe_id', 'r.quantity')
            .select('i.ingredient_name', 'r.quantity')
            .where('r.recipe_id', recipe_id);
    },
    getInstructions(recipe_id) {
        return db('recipes r')
            .where('r.recipe_id', recipe_id)
            .orderBy('r.step_id', 'asc');
    },
};
