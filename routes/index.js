var express = require('express');
var router = express.Router();
var db = require('monk')(process.env.LOCAL_DB);
var users = db.get('users');

//LinkedIn Social Login
// router.get('/', function(req, res, next) {
//   if(req.isAuthenticated()) {
//     unirest.get('https://api.linkedin.com/v1/people/~:(id,first-name,email-address)')
//     .header('Authorization', 'Bearer ' + req.user.token)
//     .header('x-li-format', 'json')
//     .end(function (response) {
//       console.log(response.body.emailAddress);
//       res.render('glaze', { profile: response.body });
//     })
//   } else {
//     res.render('index');
//   }
// });
  

module.exports = router;
