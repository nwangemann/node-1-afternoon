const express = require('express');
const products = require('../products.json')


const getProducts = ('/api/products', (req, res, next) => {
    console.log(typeof req.query.price)
    if(req.query.price){
        const priceRes = products.filter((elem) => {
            return elem.price >= req.query.price
        })
        res.status(200).send(priceRes)
    }
    res.status(200).send(products)
})




module.exports = getProducts;