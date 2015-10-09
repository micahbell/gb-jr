var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/layout', function(req, res, next) {
  res.render('index');
});

router.get('/new', function(req, res, next) {
  res.render('index');
});

module.exports = router;
