'use strict';
module.exports = function(models) {
    const index = function(req, res, done) {
        models.Shoes.find({}, function(err, foundStock) {
            if (err) {
                return done(err)}

            console.log('Home Page');
            res.status(200).send(foundStock)
        })
    };
    return {
        index
    }
}
