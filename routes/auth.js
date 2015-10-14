var express = require('express');
var router = express.Router();
var db = require('monk')(process.env.LOCAL_DB);
var users = db.get('users');
var bcrypt = require('bcrypt');
var userValidation = require('../lib/user-validation');


// USER SIGN UP //
router.post('/signup', function(req, res, next) {
  var username = req.body.username.trim();
      email = req.body.email.toLowerCase().trim();
      password = req.body.password.trim(),
      confirm = req.body.confirm.trim(),
      hash = bcrypt.hashSync(password, 8);

  userValidation.existingUser(email, function(duplicateError) {
    var invalid = userValidation.signUp(username, email, password, confirm, duplicateError);
    if(invalid.length > 0) {
      res.json({
        signUpErrors: invalid,
        username: username,
        email: email
      })
    } else {
      // req.session.username = username;
      res.cookie('username', username );
      users.insert({
        username: username,
        email: email,
        password: hash,
        glazes: []
      }).then(function(response) { res.json(response) })
    };
  });
});

// USER LOGIN
router.post('/login', function(req, res, next) {
  var email = req.body.email.toLowerCase().trim();
      password = req.body.password.trim();

  users.findOne({ email: email }).then(function(user) {
    if(!user) {
      res.json({
        loginError: 'No account associated with this email, please create an account.',
        email: email
      })} else if(user) {
        var compare = bcrypt.compareSync(password, user.password);
        if(compare) {
          res.cookie('username', user.username );
          res.json({
            id: user._id,
            username: user.username,
            glazes: user.glazes.length
          })
      } else {
        res.json({
          loginError: 'Invalid password.',
          email: email
        })
      }
    }
  })
});


// USER LOGOUT
router.get('/logout', function(req, res, next) {
  res.clearCookie('username');
  res.json('User logged out.');
});










module.exports = router;
