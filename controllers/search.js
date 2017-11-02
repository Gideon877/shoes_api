'use strict';
module.exports = function(models) {
    const brand_search = function(req, res, done) {
        var brand = req.params.brandname;
        models.Shoes.find({
            brand: req.params.brandname
        }, function(err, brandsFound) {
            if (err) {
                return done(err)}

            console.log('Searched for a shoe brand');
            res.status(200).send(brandsFound)
        })
    }

    const size_search = function(req, res, done) {
        var size = req.params.size;

        models.Shoes.find({
            size: req.params.size
        }, function(err, brandsFound) {
            if (err) {
                return done(err)}

            console.log('Searched for a shoe size');
            res.status(200).send(brandsFound)
        })
    }

    const brand_size = function(req, res, done) {
        var brand = req.params.brandname;
        var size = req.params.size;

        models.Shoes.find({
            brand: req.params.brandname,
            size: req.params.size
        }, function(err, brandsFound) {
            if (err) {
                return done(err)}

            console.log('Brand and size send.');
            res.status(200).send(brandsFound)
        })
    }
    return {
        size_search,
        brand_search,
        brand_size
    };
}
