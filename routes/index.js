var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Home page', active: 'main' });
});

router.get('/features', function (req, res, next) {
  res.render('features', { title: 'Features page', active: 'features' });
});

module.exports = router;
