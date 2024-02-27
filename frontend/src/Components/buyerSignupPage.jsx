import '../styles/buyerLogin.css'
import { useNavigate } from 'react-router-dom'

function BuyerSignupPage() {
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
                        <button>Create</button>
                        <p className="message">Already registered? <a onClick={() => navigationFunction('/buyerLogin')}>Login</a></p>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default BuyerSignupPage