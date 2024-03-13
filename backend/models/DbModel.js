const mongoose = require('mongoose')
const schema = mongoose.Schema

const productModel = new schema({
    productName: {type: String, required: true},
    productImg: {type: String, required: true},
    productPrice: {type: Number, required: true}
})

module.exports = mongoose.model('Product', productModel)