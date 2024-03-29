const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const mainRoute = require('../backend/router/mainRoute');
const sellerRoute = require('../backend/router/sellerAuthRoutes');
const buyerRoute = require('../backend/router/buyerAuthRoutes');

const app = express();
const mongooseURL = "mongodb+srv://wolf1729:Pass1729@cluster0.bl9o6gu.mongodb.net/Products?retryWrites=true&w=majority";
const port = 3000;

// Connect to MongoDB
const connectDB = async (dbURL) => {
  try {
    await mongoose.connect(dbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database Connected');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
};

//Middleware
app.use(express.json())
app.use(cors())

// Buyerauth routes
app.use('/', mainRoute);
app.use('/sellerAuth', sellerRoute);
app.use('/buyerAuth', buyerRoute);

// Start the server
app.listen(port, async () => {
  try {
    await connectDB(mongooseURL);
    console.log(`Server listening on port: ${port}`);
  } catch (err) {
    console.error('Error starting the server:', err);
  }
});
