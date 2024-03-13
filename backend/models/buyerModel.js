const mongoose = require('mongoose')
const schema = mongoose.Schema

const buyerDbModel = new schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    cart: { type: Array, required: false },
    purchased: { type: Array, required: false }
})

module.exports = mongoose.model("buyer-Data", buyerDbModel)