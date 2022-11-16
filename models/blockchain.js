let mongoose = require('mongoose');
// create models
let blockchainModel = mongoose.Schema({
    name: String,
    created: String,
    popularity: String,
    total: String,
    price: String
    },
    {
        collection: "blockchains"
    }

);
module.exports = mongoose.model('Blockchain', blockchainModel);
