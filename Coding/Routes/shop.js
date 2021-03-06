const express = require('express');
const router = express.Router();
const path = require('path');

const adminData = require('./admin.js')

router.get("/", (req, res) => {
    const products = adminData.products
    res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
    });
})


module.exports = router;