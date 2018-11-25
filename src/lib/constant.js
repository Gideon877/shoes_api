const moment = require('moment');

const data = {
  brand: "Puma",
  price: 199,
  release_date: "Sun Nov 18 2018 20:41:50 GMT+0000",
  timestamp: {
    created: moment.utc(),
    last_updated: moment.utc()
  },
  stock: [
    {
      size: 6,
      color: "white",
      qty: 3,
      status: "IN_STOCK"
    },
    {
      size: 6,
      color: "green",
      qty: 5,
      status: "IN_STOCK"
    },
    {
      size: 7,
      color: "black",
      qty: 2,
      status: "IN_STOCK"
    }
  ]
};


module.exports = {
    data
}
