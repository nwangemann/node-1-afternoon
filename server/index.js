const express = require('express');

const app = express();

app.use(express.json());

const port = 4000;

const products = require('../products.json')
const getProducts = require('../server/getProducts')
const getProduct = require('../server/getProduct')

app.listen(port, () => console.log(`server running on port ${port}`))

app.get('/api/products', getProducts);
app.get('/api/product/:id', getProduct);


