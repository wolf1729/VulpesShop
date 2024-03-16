const express = require('express');
const sellerAuthController = require('../controllers/sellerAuthController')
const sellerAuthRouter = express.Router();

//Route to add new seller
sellerAuthRouter.post('/sign-up', sellerAuthController.addNewSeller)

//Route to login the existing seller
sellerAuthRouter.post('/login', sellerAuthController.loginExistingSeller)

//Route to put product id in seller database
sellerAuthRouter.post('/addProductId', sellerAuthController.addProductIdToSellerData)

module.exports = sellerAuthRouter;
