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
    // res.cookie('email', req.cookies.email );
    res.json(response.data) })
});
// /glaze/:user_id/recipes
router.get('/:user_id/recipes', function(req, res, next) {
  // users.findOne({ email: req.cookies.email }).then(function(user) {
  //   console.log(user.glazes);
  //   res.json(user.glazes);
  // })
  res.json('hello')
});









module.exports = router;
