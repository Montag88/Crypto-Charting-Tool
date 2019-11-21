const axios = require('axios');

module.exports = {
  getHistorical(callback) {
    axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
      .then(({ data }) => {
        const keys = Object.keys(data.bpi);
        const renderData = keys.map((t) => ({
          t,
          y: data.bpi[t],
        }));
        callback(null, { data: renderData, time: data.time });
      });
  },
  getCurrent(callback) {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(({ data }) => {
        callback(null, data);
      });
  },
};
