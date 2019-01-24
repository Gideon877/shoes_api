'use strict';
const mongoose = require('mongoose');
module.exports = function(mongoUrl){
    mongoose.Promise = global.Promise;
    mongoose.connect(mongoUrl);

    const Shoes = mongoose.model('Shoes', {
        brand: { type: String, required: true },
        color: { type: String, required: true },
        timestamp: {
            created: String,
            lastUpdated: String
        },
        in_stock: [
            {
                qty: Number,
                price: { type: Number },
                size: { type: Number, required: true},
            }
        ]
    });
    

    const User = mongoose.model('User', {
        firstName: String,
        lastName: String,
        timestamp: Object,
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true, bcrypt: true },
        type: { type: String, required: true, unique: false }
        
    });

    return {
        Shoes,
        User
    };
};
