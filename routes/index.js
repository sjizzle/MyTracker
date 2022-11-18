let express = require('express');
let router = express.Router();
let indexController = require('../controller/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home',  indexController.displayHomePage);

/* GET Past page. */
router.get('/past', indexController.displayPastPage);

/* GET Contact page. */
router.get('/contact', indexController.displayContactPage);


module.exports = router;
