const express = require('express');
const path = require('path');
const coindeskAPI = require('./coindeskAPI');

const app = express();
const port = 3000;

app.use(express.static(path.resolve(__dirname, '../client/public/')));

app.get('/api/bpiData', (req, res) => {
  coindeskAPI.getHistorical((err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.json(data);
    }
  });
});

app.listen(port, () => console.log(`Crypto Chart listening on port ${port}!`));
