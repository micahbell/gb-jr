var express = require('express'),
    router = express.Router(),
    recipeFinder = require('../lib/recipe_finder.js'),
    db = require('monk')(process.env.LOCAL_DB),
    users = db.get('users');

router.post('/:user_id/create', function(req, res, next) {
  var date = Date(),
      recipeId = users.id();

  users.update({ _id: req.params.user_id },
    { $push:
      { glazes: {
        _id: recipeId,
        date: date,
        recipe: req.body
      }
    }
  }).then(function(response) {
    res.cookie('username', req.cookies.username );
    res.json(response.data) })
});


router.get('/:user_id/recipes', function(req, res, next) {
  users.findOne({ _id: req.params.user_id }).then(function(user) {
    res.json(user.glazes);
  })
});


router.get('/:user_id/recipes/:recipe_id', function(req, res, next) {
  users.findOne({ _id: req.params.user_id }).then(function(user) {
    var recipe = recipeFinder.findRecipe(req.params.recipe_id, user.glazes);
    if(recipe) {
      res.json(recipe);
    }
  })
});

router.get('/:user_id/recipes/:recipe_id/edit', function(req, res, next) {
  users.findOne({ _id: req.params.user_id }).then(function(user) {
    var recipe = recipeFinder.findRecipe(req.params.recipe_id, user.glazes);
    if(recipe) {
      res.json(recipe);
    }
  })
})


// router.post('/:user_id/recipes/:recipe_id/update', function(req, res, next) {
//   users.findOne({ _id: req.params.user_id }).then(function(user) {
//     var recipeId = req.params.recipe_id,
//         date = Date(),
//         recipe = recipeFinder.findRecipe(recipeId, user.glazes);
//
//     users.update({ _id: user._id },
//       { $set:
//         {
//           'glazes.recipeId': {
//             date: date,
//             recipe: req.body
//           }
//         }
//       }
//     ).then(function(response) {
//       res.json(response.data);
//     })
//   })
// });

// router.get('/:user_id/recipes/:recipe_id/delete', function(req, res, next) {
//   users.findOne({ _id: req.params.user_id }).then(function(user) {
//     var recipeId = req.params.user_id;
//         recipe = recipeFinder.findRecipe(recipeId, user.glazes);
//
//     users.update({ _id: user._id },
//       { $pull:
//         { glazes:
//           { _id: recipeId }
//         }
//       }
//     )
//   })
// })









module.exports = router;
