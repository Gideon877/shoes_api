'use strict';
const mongoose = require('mongoose');
module.exports = function(mongoUrl){
    mongoose.Promise = global.Promise;
    mongoose.connect(mongoUrl);

    const Shoes = mongoose.model('Shoes', {
        color: String,
        brand: String,
        price: Number,
        in_stock: Number,
        size: Number
    });

    return {
        Shoes
    };

};
