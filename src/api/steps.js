'use strict';
const moment = require('moment');
const _ = require('lodash');
let { data } = require('../lib/constant');

module.exports = function(models) {
    const Shoe = models.Shoe;
    // crud
    const Add = async () => {
        let [ created, last_updated ] = [moment.utc(), moment.utc()];
        
        data.timestamp = { created, last_updated };

        let { stock } = data || [];

        // calculate total stock available, create a func, (stock, type) | type = 'Purchase/minus' || 'Add stock' 
        let in_stock = 0;
        _.forEach(stock, (x) => {
            in_stock += _.get(x, 'qty');
        });
        data.in_stock = in_stock;



        return Shoe.create(data).then(result => result).catch(error => error);
    }

    // Purchase/Delete Item
    const Delete = () => {
        return Shoe.remove().then(result => result).catch(error => error);
    };

    // Find and Get Functions
    const FindAll = () => {
        return Shoe.find().then(result => result).catch(error => error);
    };

    const FindById = (_id) => {
        console.log(_id, '------_id-----');
        
        return Shoe.findOne({_id}).then(result => result).catch(error => error);
    };

    const FindByBrand = (brand) => {
        return Shoe.find({brand}).then(result => result).catch(error => error);
    };

    const FindByParams = (params) => {
        return Shoe.find(params).then(result => result).catch(error => error);
    };



    return {
        Add,
        Delete,
        FindAll,
        FindById
    }
}
