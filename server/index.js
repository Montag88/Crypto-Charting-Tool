const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.resolve(__dirname, '../client/public/')));
// app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Crypto Chart listening on port ${port}!`));
