'use strict';
module.exports = function(models) {

    const index = function(req, res, done) {

        models.Shoes.create({
            brand: Abiter,
            color: Blue,
            price: 1099,
            in_stock: 4,
            size: 8
        }, function(err, result) {
            if (err) {
                return done(err);
            }

            var testingMessage = 'Hello user.';
            var data = {
                msg: testingMessage
            }
            res.render('api/shoes', data)

        })
    }

    return {
        index
    }
}
