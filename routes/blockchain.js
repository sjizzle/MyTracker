let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const blockchain = require('../models/blockchain');


//Connect with blockchain Model
let Blockchain = require('../models/blockchain');

/* Read Operation */
/* Get Route for the Blockchain List */

router.get('/',(req,res,next) => {
    Blockchain.find((err, Blockchainlist)=> {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('blockchain',{
                title: 'Blockchain List',
                Blockchainlist: Blockchainlist});
        }
    });
});
module.exports=router;