const baseURL = 'http://localhost:3000'

//Function to get all the product details
const allProducts = async() => {
    try{
        const response = await fetch(baseURL, {mode: 'cors'})
        const data = await response.json()
        return data
    }
    catch(err) {
        console.log(err)
    }
}

const addProductAPI = async(name, price, image, sellerId) => {
    try{
        const response = await fetch(`${baseURL}/addNewProduct`, {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                price: price,
                image: image,
                sellerId: sellerId
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        const data = await response.json()
        console.log(data)
        return data
    }
    catch(err) {
        console.log(err)
    }
}

export { allProducts, addProductAPI }