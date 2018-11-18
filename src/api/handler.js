'use strict';
const moment = require('moment');
const _ = require('lodash');
const STEPS = require('./steps');

module.exports = function(models) {
    const Steps = STEPS(models);
    
    const getShoes = async (req, res, done) => {
        try {
            console.log('Hello')
            let result = await Steps.Add();
            console.log('result', result)
            res.status(200).send(result);

        } catch (error) {
            res.status(400).send(error);
            
        }
    };
    

    return {
        getShoes
    }
};