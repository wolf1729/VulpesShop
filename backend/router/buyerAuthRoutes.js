const express = require('express')
const buyerAuthRouter = express.Router()
const buyerAuthController = require('../controllers/buyerAuthController')

//API to Sign up
buyerAuthRouter.post('/sign-up', buyerAuthController.addNewBuyer)

//API to Login
buyerAuthRouter.post('/login', buyerAuthController.loginExistingBuyer)

//Route to add product id to cart
buyerAuthRouter.post('/addProductToCart', buyerAuthController.addProductToBuyerCart)

module.exports = buyerAuthRouter