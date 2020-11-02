const express = require('express');
const products = require('./data/products');

const app = express();

app.get('/', (req, res) => {
  res.send('API Running');
})

app.get('/api/products' , (req, res) => {
   res.json(products);
})

app.listen(5000, console.log('server running on port 5000'));
