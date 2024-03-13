const express = require('express')
const router = express.Router()
const productController = require('../controllers/mainController')

//API to get all products
router.get('/', productController.allProducts)

//API to get all product in users cart
router.get('/cart', (req, res) => {
    res.send('Cart API')
})

//get each product details API
router.get('/productDetails', productController.productDetails)

router.post('/addNewProduct', productController.addProductToDatabase)

module.exports = router