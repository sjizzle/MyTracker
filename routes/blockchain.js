let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//Connect with blockchain Model
let Blockchain = require('../models/blockchain');

/* Read Operation */
/* Get Route for the Blockchain List */

router.get('/',(req,res,next)=>{
    Blockchain.find((err, blockchainlist)=>{
        if (err) {
            return console.error(err);
        }

        else 
        {
            res.render('Blockchain/blockchain', {
                title: 'Blockchain First List',
                Blockchainlist: blockchainlist
            });
        }
    });
});

/** Add Operation */
/** Get Route for add page contents */

router.get('/add', (req,res,next)=>{
    res.render('blockchain/add', {title: 'Add Crypto'})
});

module.exports = router;