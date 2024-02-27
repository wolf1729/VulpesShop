import '../styles/buyerLogin.css'
import { useNavigate } from 'react-router-dom'

function BuyerLoginPage() {
    const navigate = useNavigate()

    const navigationFunction = (page) => {
        navigate(page)
    }

    return (
        <>
        <div className='buyer-container'>
            <div className="buyer-login-page">
                <div className="buyer-form">
                    <form className="buyer-login-form">
                        <input type="text" placeholder="username"/>
                        <input type="password" placeholder="password"/>
                        <button>login</button>
                        <p className="message">Not registered? <a onClick={() => navigationFunction('/buyerSignup')}>Create an account</a></p>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default BuyerLoginPage