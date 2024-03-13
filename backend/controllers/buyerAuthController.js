const express = require('express')
const app = express()
const buyerAuthModel = require('../models/buyerModel')
const asyncHandler = require('express-async-handler')
const session = require('express-session')
const passport = require('passport')
const LocalStrategy = require('passport-local')

const addNewBuyer = asyncHandler( async(req, res) => {
    const { username, password } = req.body
    try{
        const userDetails = {
            username: username,
            password: password,
            cart: [],
            purchased: []
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

module.exports = { addNewBuyer }