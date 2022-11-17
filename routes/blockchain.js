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

/** Post Routes for process Add to Page */
router.post('/add', (req,res,next)=>{
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
});

/** Edit Operation */
/** Get route for displaing the edit operations */

router.get('edit/:id', (req,res,next)=>{
    let id=req.params.id;
    Blockchain.findById(id,(err,blockchainToEdit)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('Blockchain/edit',{title:'Edit Blockchain', blockchain:blockchainToEdit});
        }
    });
});

/** Post route for displaying the edit operations - update */
    router.post('/edit/:id', (req,res,next)=>{
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

});

/** Delete Operations */
/** Get Mode - for Deleting Content */
    router.get('/delete/:id', (req,res,next)=>{
        let id=req.params.id;
        Blockchain.deleteOne({_id:id}, (err)=>{
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
    });


module.exports = router;