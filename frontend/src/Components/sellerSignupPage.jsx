import '../styles/sellerLogin.css'
import { useNavigate } from 'react-router-dom'

function SellerSignupPage() {
    const navigate = useNavigate()

    const navigationFunction = (page) => {
        navigate(page)
    }

    return (
        <>
        <div className='seller-container'>
            <div className="seller-login-page">
                <div className="seller-form">
                    <form className="seller-login-form">
                        <input type="text" placeholder="username"/>
                        <input type="password" placeholder="password"/>
                        <button>Create</button>
                        <p className="message">Already registered? <a onClick={() => navigationFunction('/sellerLogin')}>Login</a></p>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default SellerSignupPage