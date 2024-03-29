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
    const { productId } = req.body

    try{
        const product = await productModel.findOne({ _id: productId })
        res.send(product)
        console.log(product)
    }
    catch(err) {
        console.log(err)
    }
})

//Function to add product to the database
const addProductToDatabase = asyncHandler( async(req, res) => {
    const { name, price, image, sellerId } = req.body

    let downloadURL = await firebaseFunction.uploadFileInStorage(image, name)

    const productDetail = {
        productName: name,
        productImg: downloadURL || '',
        productPrice: price,
        seller: sellerId
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

const getSellersProductDetails = asyncHandler(async(req, res) => {
    const { productId } = req.body

    try{
        const sellerProducts = await productModel.findOne({ _id: productId })
        res.send(sellerProducts)
        console.log(sellerProducts)
    }
    catch(err) {
        console.log(err)
    }
})

const deleteProductfromMainDatabase = asyncHandler(async(req, res) => {
    const { productId } = req.body

    try{
        const deleteTheProduct = await productModel.deleteOne({ _id: productId })
        console.log('Item Deleted')
    }
    catch(err) {
        console.log(err)
        console.log('Item not deleted')
    }
})

module.exports = { allProducts, productDetails, addProductToDatabase, getSellersProductDetails, deleteProductfromMainDatabase }