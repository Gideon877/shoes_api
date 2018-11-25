const moment = require('moment');

const data = {
  brand: "Adidas",
  price: 399,
  release_date: moment().format('LL'),
  timestamp: {
    created: moment.utc(),
    last_updated: moment.utc()
  },
  color: "White",
  stock: [
    {
      size: 5,
      qty: 2,
      status: "IN_STOCK"
    },
    {
      size: 6,
      qty: 3,
      status: "IN_STOCK"
    },
    {
      size: 7,
      qty: 2,
      status: "IN_STOCK"
    }
  ]
};


module.exports = {
    data
}
