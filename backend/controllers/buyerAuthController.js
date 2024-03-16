const buyerAuthModel = require('../models/buyerModel')
const asyncHandler = require('express-async-handler')

//Controller to add new buyer details to database
const addNewBuyer = asyncHandler( async(req, res) => {
    const { username, password } = req.body
    try{
        const userDetails = {
            username: username,
            password: password,
            cart: []
        }
        
        const newUser = new buyerAuthModel(userDetails);
        await newUser.save();
        res.send('New User Added')
        console.log(`New User added: ${username}`);
    }
    catch(err) {
        console.log(err)
    }
})

//Controller to get login details of the existing user
const loginExistingBuyer = asyncHandler( async(req, res) => {
    const { username, password } = req.body
    try{
        const userDetails = await buyerAuthModel.findOne({ username: username })
        
        if (userDetails.password === password ){
            res.send(userDetails)
            console.log(userDetails)
        }
        else {
            res.send('Email or Password is wrong')
        }
    }
    catch(err) {
        console.log('Error in Fetching details')
    }
})

module.exports = { addNewBuyer, loginExistingBuyer }