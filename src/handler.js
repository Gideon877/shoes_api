'use strict';

const _ = require('lodash');
const moment = require('moment');
const API = require('./api/api');


module.exports = function(models) {
    const Api = API(models);

    const getShoes = async (req, res) => {
        try {
            let stock = await Api.getAllShoes();
            res.status(200).send(stock);
        } catch (error) {
            res.status(400).send(error);
            
        };
    };

    const addNewStock = async (req, res, done) => {
        const { brand, color, qty, price, size } = req.body;
        let data = {
            brand:  _.capitalize(brand),
            color:  _.capitalize(color)
        }
        try {
            let checkStock = await Api.addStockCheck(data); //if stock doesn't exist, returns true
            data.timestamp = {
                created:  moment.utc(),
                lastUpdated:  moment.utc()
            };
            data.in_stock = { qty, price, size }
            if (checkStock) {
                console.log(' be5dd jsjsjsjjss',data)

                const stock = await Api.addShoe(data);
                console.log('jsjsjsjjss', stock)
                res.status(200).send(stock);
            } else {
                let updated = await Api.updateExisting(data);
                res.status(200).send(updated);
            }
            
        } catch (error) {
            console.log(error)
            res.status(400).send(error);
        }
    };

    const getShoesByBrand = async (req, res, done) => {
        try {
            
        } catch (error) {
            res.status(400).send(error);
        }
    };

    const getShoesBySize = async (req, res, done) => {
        try {
            
        } catch (error) {
            res.status(400).send(error);
        }
    };

    const getShoesByBrandSize = async (req, res, done) => {
        try {
            
        } catch (error) {
            res.status(400).send(error);
        }
    };

    const updateStock = async (req, res, done) => {
        try {
            
        } catch (error) {
            res.status(400).send(error);
        }
    };


    return {
        getShoes,
        addNewStock
    }
}