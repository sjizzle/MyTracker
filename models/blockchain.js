let mongoose = require('mongoose');
// create models
let blockchainModel = mongoose.Schema({
    name: String,
    created: Number,
    popularity: String,
    total: Number,
    price: String
    },
    {
        collection: 'blockchains'
    }

);
module.exports = mongoose.model('Blockchain', blockchainModel);
