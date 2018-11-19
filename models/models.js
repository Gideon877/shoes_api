'use strict';
const mongoose = require('mongoose');
module.exports = function(mongoUrl){
    mongoose.Promise = global.Promise;
    mongoose.connect(mongoUrl);

    const Shoe = mongoose.model('Shoe', {
        brand: { type: String, required: true},
        price: { type: Number, required: true},
        release_date: String,
        timestamp: {
            created: String,
            last_updated: String
        },
        stock: [
            {
                size: { type: Number, required: true},
                color: { type: String, required: true},
                qty: { type: Number, required: true}
            }
        ]
    })

    return {
        Shoe
    };

};