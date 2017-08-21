'use strict';
module.exports = function(models) {

    const index = function(req, res, done) {

        models.Shoes.find({}, function(err, foundStock) {
            if (err) {
                return done(err)
            }

            console.log(foundStock);
            res.status(200).send(foundStock)

        })
    };

    const new_stock = function(req, res, done) {
        var stock = req.body;

        models.Shoes.create({
            brand: stock.brand,
            color: stock.color,
            price: stock.price,
            size: stock.size,
            in_stock: stock.in_stock
        }, function(err, result) {
            if (err) {
                return done(err);
            }
            console.log('result', result);

        res.status(200).send(stock)
        });
    };

    const brand_search = function (req, res, done) {
        var brand = req.params.brandname;
        console.log(brand);
        models.Shoes.find({
            brand:req.params.brandname
        }, function(err, brandsFound) {
            if (err) {
                return done(err)
            }
            res.status(200).send(brandsFound)
        })

    }

    const size_search = function (req, res, done) {
        var size = req.params.size;

        models.Shoes.find({
            size:req.params.size
        }, function(err, brandsFound) {
            if (err) {
                return done(err)
            }
            res.status(200).send(brandsFound)
        })

    }

    const brand_size = function(req, res, done) {
        var brand = req.params.brandname;
        var size = req.params.size;

        console.log('Brand', brand, 'size', size);

        models.Shoes.find({
            brand: req.params.brandname,
            size:req.params.size
        }, function(err, brandsFound) {
            if (err) {
                return done(err)
            }

            console.log(brandsFound);

            res.status(200).send(brandsFound)
        })
    }

    const sold = function (req, res, done) {
        var shoe_id = req.params.shoe_id;
        console.log('shoe_id', shoe_id);
        models.Shoes.findOne({
            _id: shoe_id
        }, function(err, result) {
            if (err) {
                return done(err)
            }

            console.log('Before:', result.in_stock);
            result.in_stock = result.in_stock - 1;
            console.log('After', result.in_stock);

            result.save(function(err, result) {
                if (err) {
                    return done(err)
                }
            });

            res.status(200).send(result.brand + ' size ' + result.size + ', ' + result.color + ' have been sold for R' + result.price + '. Avail in store: ' + result.in_stock);
        })

    }

    return {
        index,
        new_stock,
        size_search,
        brand_search,
        brand_size,
        sold
    };
};
