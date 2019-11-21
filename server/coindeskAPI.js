const axios = require('axios');

module.exports = {
  getHistorical(callback) {
    axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
      .then(({ data }) => {
        callback(null, data);
      });
  },
};

// https://api.coindesk.com/v1/bpi/currentprice.json
// https://api.coindesk.com/v1/bpi/historical/close.json