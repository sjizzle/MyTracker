let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//Connect with blockchain Model
let Blockchain = require('../models/blockchain');
let blockchainController = require('../controller/blockchain');
/* CRUD Operation */

/* Read Operation */
/* Get Route for the Blockchain List */

router.get('/', blockchainController.displayBookList);

/** Add Operation */
/** Get Route for add page contents */

router.get('/add', blockchainController.displayAddPage);

/** Post Routes for process Add to Page */
router.post('/add', blockchainController.processAddPage);
/** Edit Operation */
/** Get route for displaing the edit operations */

router.get('edit/:id', blockchainController.displayEditPage);

/** Post route for displaying the edit operations - update */
    router.post('/edit/:id', blockchainController.processEditPage);
/** Delete Operations */
/** Get Mode - for Deleting Content */
    router.get('/delete/:id', blockchainController.DeletePage);

module.exports = router;