const baseURL = 'http://localhost:3000'

const newSellerSignUp = async(username, password) => {
    try{
        fetch(`${baseURL}/sellerAuth/sign-up`, {
            method: 'POST',

            body: JSON.stringify({
                username: username,
                password: password,
                products: []
            }),

            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })

        console.log('Seller Added Successfully')
    }
    catch(err) {
        console.log(err)
    }
}

//Getting existing user details
const existingUserDetails = async(username, password) => {
    try{
        const response = await fetch(`${baseURL}/sellerAuth/login`, {
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
        console.log(data)
        return data
    }
    catch(err) {
        console.log(err)
    }
}

export { newSellerSignUp, existingUserDetails }