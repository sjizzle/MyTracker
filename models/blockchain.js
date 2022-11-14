let mongoose = require('mongoose');
// create models
let blockchainModel = mongoose.Schema({
    name: String,
    created: Number,
    popular: String,
    total: Number,
    price: String
    },
    {
        collection: 'blockchains'
    }

);
module.exports = mongoose.model('blockchain', blockchainModel);
