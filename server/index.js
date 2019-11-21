const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.resolve(__dirname, '../client/public/')));

app.get('/api/bpiData', (req, res) => {
  
});

app.listen(port, () => console.log(`Crypto Chart listening on port ${port}!`));

// https://api.coindesk.com/v1/bpi/currentprice.json
// https://api.coindesk.com/v1/bpi/historical/close.json
