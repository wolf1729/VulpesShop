const express = require('express')
const router = express.Router()
const productController = require('../controllers/mainController')

//API to get all products
router.get('/', productController.allProducts)

//API to add new products
router.post('/addNewProduct', productController.addProductToDatabase)

//Get Specific Seller Products
router.post('/getSellerProducts', productController.getSellersProductDetails)

//API to delete the product from product database
router.post('/deleteProduct', productController.deleteProductfromMainDatabase)

module.exports = router