let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//Connect with blockchain Model
let Blockchains = require('../models/blockchain');

/* Read Operation */
/* Get Route for the Blockchain List */

router.get('/',(req,res,next) => {
    Blockchains.find((err, blockchainslist)=>{
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('blockchain',{
                title: 'Blockchain List',
                Blockchainslist: blockchainslist});
        }
    });
});
module.exports = router;