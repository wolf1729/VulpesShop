const mongoose = require('mongoose')
const schema = mongoose.Schema

const sellerDbModel = new schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    product: { type: Array, required: false }
})

module.exports = mongoose.model("Seller-Data", sellerDbModel)