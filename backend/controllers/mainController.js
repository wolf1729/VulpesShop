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

//function to get details of specific product
const productDetails = asyncHandler(async(req, res) => {
    const { id } = req.body

    try{
        const product = await productModel.findOne({ _id: id })
        res.send(product)
        console.log(product)
    }
    catch(err) {
        console.log(err)
    }
})

module.exports = { allProducts, productDetails }