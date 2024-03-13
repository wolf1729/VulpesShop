const baseURL = 'http://localhost:3000'

const newBuyerSignUp = async(username, password) => {
    try{
        fetch(`${baseURL}/buyerAuth/sign-up`, {
            method: 'POST',

            body: JSON.stringify({
                username: username,
                password: password,
                cart: [],
                purchased: []
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

export { newBuyerSignUp }