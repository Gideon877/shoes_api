'use strict';
module.exports = function(models) {
    const mongoDb = models.Shoes;
    const brand_search = function(req, res, done) {
        var brand = req.params.brandname;
        mongoDb.find({
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

        mongoDb.find({
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

        mongoDb.find({
            brand: req.params.brandname,
            size: req.params.size
        }, function(err, brandsFound) {
            if (err) {
                return done(err)}

            console.log('Brand and size send.');
            res.status(200).send(brandsFound)
        })
    }

    const findBrandAndSize = (req, res, done) => {
        let {brandname, size } = req.params || undefined;
        return mongoDb.find({
            brand: brandname,
            size
        }).then(shoes => {
            res.status(200).send(shoes);
        }).catch(e=> res.status(400).send(e))

    }

    return {
        size_search,
        brand_search,
        brand_size
    };
}
