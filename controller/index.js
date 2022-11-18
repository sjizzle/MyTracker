let express = require('express');
let router = express.Router();
module.exports.displayHomePage = (req, res, next)=>{
    res.render('index', { title: 'Home'
 });
  };

  module.exports.displayPastPage = (req, res, next)=>{
    res.render('index', { title: 'Past' });
  };

  module.exports.displayContactPage = (req, res, next)=>{
    res.render('index', { title: 'Contact' });
  };