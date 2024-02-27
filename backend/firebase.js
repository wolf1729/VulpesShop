// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getStorage, ref, uploadBytes, getDownloadURL } = require("firebase/storage")
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDx9O8wsdsPxUjXHdr6raXgE6wMgjlWixs",
  authDomain: "vulpes-shop.firebaseapp.com",
  projectId: "vulpes-shop",
  storageBucket: "vulpes-shop.appspot.com",
  messagingSenderId: "520510466530",
  appId: "1:520510466530:web:5d2b3fbecf220e2925f1bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

async function uploadFileInStorage(filePath) {
  try {
    const fileBuffer = require('fs').readFileSync(filePath);
    const fileName = require('path').basename(filePath);

    const storageRef = ref(storage, `products/${fileName}`);
    await uploadBytes(storageRef, fileBuffer);

    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL
  } catch (error) {
    console.error('Error uploading file:', error);
  }
}

module.exports = { uploadFileInStorage }