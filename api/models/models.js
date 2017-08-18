'use strict';
const mongoose = require('mongoose');
module.exports = function(mongoUrl){
    mongoose.Promise = global.Promise;
    mongoose.connect(mongoUrl);

    const Shoes = mongoose.model('Shoes', {
        brand: String,
        color: String,
        price: Number,
        size: Number,
        in_stock: Number
    });

    return {
        Shoes
    };

};
