const productModel = require('../models/DbModel')
const firebaseFunction = require('../firebase')
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

//Function to add product to the database
const addProductToDatabase = asyncHandler( async(req, res) => {
    const { name, price, image } = req.body

    let downloadURL = await firebaseFunction.uploadFileInStorage(image, name)

    const productDetail = {
        productName: name,
        productImg: downloadURL || '',
        productPrice: price
    };

    try {
        const newProduct = new productModel(productDetail);
        await newProduct.save();
        res.send(newProduct._id)
        console.log(`New product added: ${newProduct._id}`);
    } catch (error) {
        console.error(`Error adding product ${name}:`, error);
        throw error;
    }
})

module.exports = { allProducts, productDetails, addProductToDatabase }