'use strict';
module.exports = function(models) {
    const sold = function(req, res, done) {
        var shoe_id = req.params.shoe_id;
        models.Shoes.findOne({
            _id: shoe_id
        }, function(err, result) {
            if (err) {
                return done(err)
            }

            result.in_stock = result.in_stock - 1;
            result.save(function(err, result) {
                if (err) {
                    return done(err)
                }
            });
            console.log('Sold a shoe');
            if (result.in_stock < 1) {
                result.remove(function(err, check) {
                    if (err) {
                        return done(err)
                    }
                    console.log(check.brand + ' size ' + check.size + ', ' + check.color + ' is sold out.');
                })
            }
            res.status(200).send(result.brand + ' size ' + result.size + ', ' + result.color + ' have been sold for R' + result.price + '. Avail in store: ' + result.in_stock);
        })
    }
    return {
        sold
    }
}
