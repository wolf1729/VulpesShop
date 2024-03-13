const sellerAuthModel = require('../models/sellerModel')
const asyncHandler = require('express-async-handler')

//controller to add new seller user
const addNewSeller = asyncHandler( async(req, res) => {
    const { username, password } = req.body
    try{
        const userDetails = {
            username: username,
            password: password,
            products: []
        }
        
        const newUser = new sellerAuthModel(userDetails);
        await newUser.save();
        res.send('New User Added')
        console.log(`New User added: ${username}`);
    }
    catch(err) {
        console.log(err)
    }
})

//Controller to get login details of the existing user
const loginExistingSeller = asyncHandler( async(req, res) => {
    const { username, password } = req.body
    try{
        const userDetails = await sellerAuthModel.findOne({ username: username })
        
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

//Function to add the product id to the seller data
const addProductIdToSellerData = asyncHandler( async(req, res) => {

})

module.exports = { addNewSeller, loginExistingSeller, addProductIdToSellerData }