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

module.exports.processAddPage =  (req,res,next)=>{
    let newBlockchain = Blockchain({
        "name":req.body.name,
        "created":req.body.created,
        "popularity":req.body.popularity,
        "total":req.body.total,
        "price":req.body.price
        });
        Blockchain.create(newBlockchain, (err,Blockchain)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/blockchain-list');
        }

    });
};

module.exports.displayEditPage =  (req,res,next)=>{
    let id=req.params.id;
    Blockchain.findById(id,(err,blockchainToEdit)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('blockchain/edit',{title:'Edit Blockchain', blockchain:blockchainToEdit});
        }
    });
};

module.exports.processEditPage = (req,res,next)=>{
    let id=req.params.id;
    let updateBlockchain = Blockchain({
        "_id":id,
        "name":req.body.name,
        "created":req.body.created,
        "popularity":req.body.popularity,
        "total":req.body.total,
        "price":req.body.price
    });
    Blockchain.updateOne({_id:id}, updateBlockchain,(err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else{
            res.redirect('/blockchain-list');
        }
    });

};
