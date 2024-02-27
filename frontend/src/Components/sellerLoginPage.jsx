import '../styles/sellerLogin.css'
import { useNavigate } from 'react-router-dom'

function SellerLoginPage() {
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
                        <button>login</button>
                        <p className="message">Not registered? <a onClick={() => navigationFunction('/sellerSignup')}>Create an account</a></p>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default SellerLoginPage