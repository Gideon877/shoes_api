'use strict';
const moment = require('moment');
const _ = require('lodash');
let { data } = require('../lib/constant');

module.exports = function(models) {
    const Shoe = models.Shoe;
    // crud
    const Add = async () => {
        [ created, last_updated ] = [moment.utc(), moment.utc()];
        
        data.timestamp = { created, last_updated };
        return Shoe.create(data).then(result => result).catch(error => error);
    }

    const Delete = () => {
        return Shoe.remove().then(result => result).catch(error => error);
    };

    const Find = () => {
        return Shoe.find().then(result => result).catch(error => error);
    };

    return {
        Add,
        Delete,
        Find
    }
}
