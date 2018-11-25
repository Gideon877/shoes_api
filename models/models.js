'use strict';
const mongoose = require('mongoose');
module.exports = function(mongoUrl){
    mongoose.Promise = global.Promise;
    mongoose.connect(mongoUrl);

    const Shoe = mongoose.model('Shoe', {
        brand: { type: String, required: true},
        price: { type: Number, required: true},
        release_date: String,
        in_stock: Number,
        timestamp: {
            created: String,
            last_updated: String
        },
        color: { type: String, required: true},
        stock: [
            {
                size: { type: Number, required: true},
                qty: { type: Number, required: true}
            }
        ]
    })

    return {
        Shoe
    };

};