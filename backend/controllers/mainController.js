const productModel = require('../models/DbModel')
const asyncHandler = require('express-async-handler')

//function to get all the products from the database
const allProducts = asyncHandler(async(req, res) => {
    try{
        const products = await productModel.find()
        res.send(products)
        console.log(products)
    }
    catch(err) {
        console.log(err)
    }
})

module.exports = {allProducts}