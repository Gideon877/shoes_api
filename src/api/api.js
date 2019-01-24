'use strict'
const _ = require('lodash');
const bcrypt = require('bcrypt');
const moment = require('moment');
// const { BCryptRounds, UserTypes } = require('./constant');

module.exports = (models) => {
    const User = models.User;
    const Shoes = models.Shoes;

    const getAllShoes = () => {
        return Shoes.find();
    };
    
    const getShoeByBrand = (brand) => {
        return Shoes.findOne({brand});
    };

    const addStockCheck = async (params) => {
        const getParams = {
            brand: params.brand,
            color: params.color
        }
        try {
            let results = await getShoeByBrandColor(getParams);
            return ( _.isEmpty(results) ? true : false );

        } catch (error) {
            return error;
        }
    };

    const saveData = (params) => {
        return params.save();
    }

    const updateExisting = async (params) => {
        const getParams = {
            brand: params.brand,
            color: params.color
        }
        let { in_stock } = params;

        let existingShoe = await getShoeByBrandColor(getParams);
        let stock = existingShoe.in_stock;

        let uniq = _.find(stock, (x) => {
            return x.size == params.in_stock.size;
        });

        if(_.isEmpty(uniq)) {
            let newArray = _.concat(stock, in_stock);
            existingShoe.in_stock = newArray;
            await saveData(existingShoe);
        } else {
            uniq.qty = in_stock.qty
            uniq.price = in_stock.price;
            await saveData(existingShoe);
        }
        return getAllShoes();
    }


    const addShoe = (params) => {
        return Shoes.create(params);
    }


    /**
     * @param  {Object} params
     * @param  {String} params.brand
     * @param  {String} params.color
     */
    const getShoeByBrandColor = (params) => {
        return Shoes.findOne(params);
    };

    return {
        getAllShoes,
        addStockCheck,
        addShoe,
        updateExisting
    }

}