#! /usr/bin/env node

console.log("Adding data to the database");

const mongoose = require('mongoose');
const fs = require('fs');
const Product = require('../backend/models/DbModel');

function convertImageToBase64(filePath) {
    try {
        const imageBuffer = fs.readFileSync(filePath);
        return imageBuffer.toString('base64');
    } catch (error) {
        console.error(`Error reading file: ${filePath}`, error);
        throw error;
    }
}

const imagePaths = {
    bag: "C:/Users/aryan/Downloads/bag.jpg",
    book: "C:/Users/aryan/Downloads/book.jpg",
    laptop: "C:/Users/aryan/Downloads/laptop.jpg",
    pd: "C:/Users/aryan/Downloads/pd.jpeg",
    pen: "C:/Users/aryan/Downloads/pen.jpg",
    phone: "C:/Users/aryan/Downloads/phone.jpeg"
};

const images = Object.fromEntries(
    Object.entries(imagePaths).map(([key, path]) => [key, convertImageToBase64(path)])
);

const mongodb = process.argv[2];

async function main() {
    try {
        console.log("Connecting to the Database");
        await mongoose.connect(mongodb);
        await addProductDetails();
        console.log("All Products added");
    } catch (error) {
        console.error("Error during script execution:", error);
    } finally {
        mongoose.connection.close();
    }
}

async function addProductDetails() {
    console.log("Adding Products");
    await Promise.all([
        createNewProduct("Book", images.book, 200, 10),
        createNewProduct("Pen", images.pen, 10, 100),
        createNewProduct("Bag", images.bag, 500, 5),
        createNewProduct("Pendrive", images.pd, 150, 10),
        createNewProduct("Laptop", images.laptop, 10000, 2),
        createNewProduct("Phone", images.phone, 30000, 4)
    ]);
}

async function createNewProduct(name, img, price, amount) {
    const productDetail = {
        productName: name,
        productImg: img || '',
        productPrice: price,
        productStock: amount
    };

    try {
        const newProduct = new Product(productDetail);
        await newProduct.save();
        console.log(`New product added: ${name}`);
    } catch (error) {
        console.error(`Error adding product ${name}:`, error);
        throw error;
    }
}

main().catch((err) => console.log(err));
