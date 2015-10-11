var express = require('express'),
    router = express.Router(),
    db = require('monk')(process.env.LOCAL_DB),
    users = db.get('users');

router.get('/', function(req, res, next) {
  users.findOne({ email: req.cookies.email }).then(function(recipes) {

  })
  //show the recipes
  res.render('index');
});

router.get('/new', function(req, res, next) {
  res.render('index');
});

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
  }).then(function(response) { res.json(response.data) })
});

module.exports = router;
