import '../styles/buyerDashboardStyle.css'
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

//THINGS TO ADD TO SELLER DASHBOARD: logout, showing all products, adding a product to cart

function BuyerDashboard() {
  const [cookies, removeCookies] = useCookies(['user']);
  const user = cookies.user;
  const navigate = useNavigate();
  console.log(user);

  // Logout Function
  const handleLogout = () => {
    removeCookies('user');
    navigate('/');
  };

  return (
    <>
      <div>
        <div className="buyertop">
          <p className="buyergreeting">Welcome, {user._id}</p>
          <div className="buyerbuttonContainer">
            <button className='buyercartButton' onClick={() => navigate('/cartPage')}>Cart</button>
            <button className="buyerlogoutButton" onClick={handleLogout}>LogOut</button>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default BuyerDashboard;
