'use strict';
const moment = require('moment');
const _ = require('lodash');
module.exports = function(models) {
    const Shoe = models.Shoe;
    const Type = models.Type;
    
    // crud
    const Add = async () => {
        try {
            let main = await Shoe.create({
                brand: 'Puma',
                price: 1299,
                release_date: "Sun Nov 18 2018 20:41:50 GMT+0000",
                timestamp: {
                    created: moment.utc(),
                    last_updated: moment.utc()
                },
            }) || {};
    
            // console.log('main:', main);
    
            let type = await Type.create({
                mainId: main._id,
                stock: [
                    {
                        size: 5,
                        color: 'white',
                        qty: 3,
                        status: 'IN_STOCK'
                    }, {
                        size: 5,
                        color: 'green',
                        qty: 5,
                        status: 'IN_STOCK'
                    }, {
                        size: 5,
                        color: 'black',
                        qty: 9,
                        status: 'IN_STOCK'
                    }
            ]
            }) || {};

            type.typeId = type._id;
    
            console.log('type:',type.typeId);
    
            return _.merge(main, type);
    
            
        } catch (error) {
            return error
        }
    }


    const Delete = async () => {
        try {
            let main = await Shoe.remove();
            let type = await Type.remove();

            return {
                main, type
            }
        } catch (error) {
            return error
        }
    };

    const Find = async () => {
        try {
            let main = await Shoe.find();
            let type = await Type.find();

            

            return {
                main, type
            }
        } catch (error) {
            return error
        }
    }

    return {
        Add,
        Delete,
        Find
    }
}