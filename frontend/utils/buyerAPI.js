const baseURL = 'http://localhost:3000'

const newBuyerSignUp = async(username, password) => {
    try{
        fetch(`${baseURL}/buyerAuth/sign-up`, {
            method: 'POST',

            body: JSON.stringify({
                username: username,
                password: password,
                cart: []
            }),

            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })

        console.log('Buyer Added Successfully')
    }
    catch(err) {
        console.log(err)
    }
}

//Getting existing user details
const existingBuyerUserDetails = async(username, password) => {
    try{
        const response = await fetch(`${baseURL}/buyerAuth/login`, {
            method: 'POST',
            body: JSON.stringify({
                username: username,
                password: password
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        const data = await response.json()
        return data
    }
    catch(err) {
        console.log(err)
    }
}

const addProductToCart = async(id, productId) => {
    try{
        const response = await fetch(`${baseURL}/buyerAuth/addProductToCart`, {
            method: 'POST',
            body: JSON.stringify({
                id: id,
                productId: productId
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

export { newBuyerSignUp, existingBuyerUserDetails, addProductToCart }