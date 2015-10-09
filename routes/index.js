var express = require('express');
var router = express.Router();

//LinkedIn Social Login
// router.get('/', function(req, res, next) {
//   if(req.isAuthenticated()) {
//     unirest.get('https://api.linkedin.com/v1/people/~:(id,first-name,email-address)')
//     .header('Authorization', 'Bearer ' + req.user.token)
//     .header('x-li-format', 'json')
//     .end(function (response) {
//       console.log(response.body.emailAddress);
//       res.render('glazes', { profile: response.body });
//     })
//   } else {
//     res.render('index');
//   }
// });

router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
