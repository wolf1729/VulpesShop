import '../styles/sellerLogin.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { newSellerSignUp } from '../../utils/sellerAPI'

function SellerSignupPage() {
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const makeNewSellerUser = async() => {
        try{
            await newSellerSignUp(username, password)
            console.log('Seller created')
            navigationFunction('/sellerLogin')
        }
        catch(err) {
            console.log(err)
        }
    }

    const navigationFunction = (page) => {
        navigate(page)
    }

    return (
        <>
        <div className='seller-container'>
            <div className="seller-login-page">
                <div className="seller-form">
                    <form className="seller-login-form" onSubmit={e=> e.preventDefault()}>
                        <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                        <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <button onClick={() => makeNewSellerUser()}>Create</button>
                        <p className="message">Already registered? <a onClick={() => navigationFunction('/sellerLogin')}>Login</a></p>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default SellerSignupPage