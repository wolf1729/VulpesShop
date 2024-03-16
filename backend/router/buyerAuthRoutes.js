const express = require('express')
const buyerAuthRouter = express.Router()
const buyerAuthController = require('../controllers/buyerAuthController')

//API to Sign up
buyerAuthRouter.post('/sign-up', buyerAuthController.addNewBuyer)

//API to Login
buyerAuthRouter.post('/login', buyerAuthController.loginExistingBuyer)

module.exports = buyerAuthRouter