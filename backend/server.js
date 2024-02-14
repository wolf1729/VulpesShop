const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const mainRoute = require('../backend/router/mainRoute')

const  app = express()
const mongooseURL = "mongodb+srv://wolf1729:Pass1729@cluster0.bl9o6gu.mongodb.net/Products?retryWrites=true&w=majority"
const port = 3000

app.use(express.json())
app.use(cors())

app.use('/', mainRoute)

const connectDB = (dbURL) => {
    try{
        mongoose.connect(dbURL)
        console.log('Database Connected')
    }
    catch(err) {
        console.log(err)
    }
}

app.listen(port, async() => {
    try{
        await connectDB(mongooseURL)
        console.log(`Server listening on port : ${port}`)
    }
    catch(err) {
        console.log(err)
    }
})