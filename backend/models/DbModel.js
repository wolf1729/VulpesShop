const { Int32 } = require('mongodb')
const mongoose = require('mongoose')
const schema = mongoose.Schema

const productModel = new schema({
    productName: {type: String, required: true},
    productImg: {type: Buffer, required: true},
    productPrice: {type: Number, required: true},
    productStock: {type: Number, required: true}
})

module.exports = mongoose.model('Product', productModel)