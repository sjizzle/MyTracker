let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Crypto' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Crypto' });
});

/* GET Past page. */
router.get('/past', function(req, res, next) {
  res.render('index', { title: 'Past' });
});

/* GET Contact page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact' });
});

module.exports = router;
