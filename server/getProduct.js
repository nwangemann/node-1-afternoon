const express = require('express');
const products = require('../products.json')


const getProduct = ('/api/product/:id', (req, res, next) => {
    const searchById = products.filter((elem) => {
        return elem.id === parseInt(req.params.id)
    })
    if (!searchById) {
        return res.status(500).send("Item not in list");
    }
    res.status(200).send(searchById)

 })

 
module.exports = getProduct; 