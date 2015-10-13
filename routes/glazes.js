var express = require('express'),
    router = express.Router(),
    db = require('monk')(process.env.LOCAL_DB),
    users = db.get('users');

router.post('/create', function(req, res, next) {
  var date = Date(),
      recipeId = users.id();
  users.update({ email: req.cookies.email },
    { $push:
      { glazes: {
        _id: recipeId,
        date: date,
        recipe: req.body
      }
    }
  }).then(function(response) {
    // res.cookie('username', req.cookies.username );
    res.json(response.data) })
});


router.get('/:user_id/recipes', function(req, res, next) {
  users.findOne({ _id: req.params.user_id }).then(function(user) {
    console.log('USER GLAZES', user.glazes);
    res.json(user.glazes);
  })
});









module.exports = router;
