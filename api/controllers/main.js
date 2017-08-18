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

    const newStock = function(req, res, done) {

        models.Shoes.create({
            brand: 'Nike',
            color: 'Black',
            price: 879,
            size: 6,
            in_stock: 10
        }, function(err, result) {
            if (err) {
                return done(err);
            }
            console.log('result', result);
            res.status(200).send(result)

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


    return {
        index,
        newStock,
        size_search,
        brand_search,
        brand_size
    };
};
