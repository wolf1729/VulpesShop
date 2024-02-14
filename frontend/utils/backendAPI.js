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

export { allProducts }