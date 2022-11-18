let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//Connect with blockchain Model
let Blockchain = require('../models/blockchain');
/* CRUD Operation */

module.exports.displayBookList = router.get('/',(req,res,next)=>{
    Blockchain.find((err, blockchainlist)=>{
        if (err) {
            return console.error(err);
        }

        else 
        {
            res.render('Blockchain/blockchain', {
                title: 'Blockchain List',
                Blockchainlist: blockchainlist
            });
        }
    });
});

module.exports.displayAddPage = (req,res,next)=>{
    res.render('blockchain/add', {title: 'Add Crypto'});
};