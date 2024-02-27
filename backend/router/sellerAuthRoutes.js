const express = require('express')
const sellerAuthRouter = express.Router()
const sellerAuthController = require('../controllers/sellerAuthController')

//API to Sign up
sellerAuthRouter.post('/sign-up', sellerAuthController.addNewSeller)

//API to Login
sellerAuthRouter.get('/', (req, res) => {
    res.send('Login Pae')
})

module.exports = sellerAuthRouter