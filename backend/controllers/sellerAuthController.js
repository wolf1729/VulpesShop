const express = require('express')
const app = express()
const sellerAuthModel = require('../models/sellerModel')
const asyncHandler = require('express-async-handler')
const session = require('express-session')
const passport = require('passport')
const LocalStrategy = require('passport-local')

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


//Authentication functions
app.use(session({ secret: "cats", resave: false, saveUninitialized: true }))

//function to check username and password from the database
passport.use(new LocalStrategy(async (username, password, done) => {
    try{
        const user = await sellerModel.findOne({ username: username })
        if(!user) {
            return done(null, false, { message: "Incorrect username" })
        }
        if(user.password !== password) {
            return done(null, false, { message: "Incorrect Password" })
        }
        return done(null, user);
    }
    catch(err) {
        console.log(err)
    }
}))

//serializeUser takes a callback which contains the info we wish to store in the session data
passport.serializeUser((user, done) => {
    done(null, user.id)
})

//deserializeUser is called when retrieving a session, where it will extract the data we "serialized" in it
passport.deserializeUser(async (id, done) => {
    try{
        const user = await sellerModel.findById(id)
        done(null, user)
    }
    catch(err) {
        done(err)
    }
})

app.use(passport.initialize())
app.use(passport.session())
app.use(express.urlencoded({ extended: false }))

module.exports = { addNewSeller }