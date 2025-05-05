var express = require('express');
var router = express.Router();
var db = require('../database/connection');

router.get('/', function(req, res, next) {
    let sql = `SELECT * FROM recipes;`

    db.query(sql,(err,result) => {
        if(err) throw err;
        console.log(result);
        res.render('recipelist',{recipes: result, title: 'Recipe List'})
    })
});

router.get('/addrecipe', function(req, res, next) {
    let sql = `SELECT * FROM ingredients;`

    db.query(sql,(err,result) => {
        if(err) throw err;
        console.log(result);
        res.render('addrecipe',{ingredients: result, title: 'Add Recipe'})
    })
});


router.post("/addrecipe", (req, res) => {
    const { name, protein_type, instructions, ingredients } = req.body;
    console.log('Submitted ingredients:', ingredients);

    const recipeSql = `INSERT INTO recipes (name, protein_type, instructions) VALUES (?, ?, ?)`;
    db.query(recipeSql, [name, protein_type, instructions], (err, result) => {
        if (err) throw err;

        const recipeId = result.insertId;
        const ingredientList = Array.isArray(ingredients) ? ingredients : [ingredients]; // this line from chatgpt
        const mappingSql = `INSERT INTO recipe_ingredients (recipe_id, ingredient_id) VALUES ?`;
        const values = ingredientList.map(ingredientId => [recipeId, ingredientId]); // this line from chatgpt

        db.query(mappingSql, [values], (err2) => {
            if (err2) throw err2;

            res.redirect('/recipes');
        });
    });
});

router.get('/:id', (req, res) => { // :id idea from from chatgpt
    const recipeId = req.params.id;
  
    const recipeSql = `SELECT * FROM recipes WHERE recipe_id = ?`;
    const ingredientsSql = `
      SELECT i.name, i.description
      FROM recipe_ingredients ri
      JOIN ingredients i ON ri.ingredient_id = i.ingredient_id
      WHERE ri.recipe_id = ?`;
  
    db.query(recipeSql, [recipeId], (err, recipeResult) => {
      if (err) throw err;
      if (recipeResult.length === 0) {
        return res.status(404).send('Recipe not found');
      }
  
      db.query(ingredientsSql, [recipeId], (err2, ingredientResults) => {
        if (err2) throw err2;
  
        res.render('recipedetail', {
          recipe: recipeResult[0],
          ingredients: ingredientResults,
          title: recipeResult[0].name
        });
      });
    });
  });
  
module.exports = router;
