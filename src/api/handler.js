'use strict';
const moment = require('moment');
const _ = require('lodash');
const STEPS = require('./steps');

module.exports = function(models) {
    const Steps = STEPS(models);
    
    const getShoes = async (req, res, done) => {
        try {
            console.log('getShoes')
            let result = await Steps.FindAll();
            console.log('----', result);
            res.status(200).send(result);

        } catch (error) {
            console.log(error)
            res.status(400).send(error);
            
        }
    };

    const getShoeData = async (req, res, done) => {
        const { id } = req.params;
        // console.log('purchaseShoe body: ------ | ', id);
        try {
            console.log('getShoeData', req.body)
            let result = await Steps.FindById(id);

            let { stock } = result;
            
            result.stock = _.sortBy(stock, 'size');

            res.status(200).send([result]);

        } catch (error) {
            console.log(error)
            res.status(400).send(error);
            
        }

    };

    const getBrand = async (req, res, done) => {
        // console.log('body:', req.params);

        try {
            console.log('getBrand')
            let result = await Steps.FindById('5bfb11d3299d33e0d7b36e8f');
            res.status(200).send(result);
        } catch (error) {
            console.log(error)
            res.status(400).send(error);
        }

    }
    

    return {
        getShoes,
        getShoeData,
        getBrand
    }
};
