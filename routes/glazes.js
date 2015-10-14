var express = require('express'),
    router = express.Router(),
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
  console.log('USER OIDDJDJ', req.params.user_id);
  users.findOne({ _id: req.params.user_id }).then(function(user) {
    res.json(user.glazes);
  })
});

router.get('/:user_id/recipes/:recipe_id', function(req, res, next) {
  console.log('USER OIDDJDJ', req.params.user_id);
  users.findOne({ _id: req.params.user_id }).then(function(user) {
    res.json(user.glazes);
  })
});









module.exports = router;
