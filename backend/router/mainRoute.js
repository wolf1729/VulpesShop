const express = require('express')
const router = express.Router()
const productController = require('../controllers/mainController')

//API to get all products
router.get('/', productController.allProducts)

//API to add new products
router.post('/addNewProduct', productController.addProductToDatabase)

module.exports = router