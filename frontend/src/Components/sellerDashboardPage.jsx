import '../styles/sellerDashboardStyle.css';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import AddProductModal from './addProductModal';

//THINGS TO ADD TO SELLER DASHBOARD: logout, add-product, showing all products, delete the product

function SellerDashboardPage() {
  const [cookies, removeCookies] = useCookies(['user']);
  const user = cookies.user;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();
  console.log(user);

  // Logout Function
  const handleLogout = () => {
    removeCookies('user');
    navigate('/');
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <div>
        <div className="top">
          <p className="greeting">Welcome, {user._id}</p>
          <div className="buttonContainer">
            <button className="addProductButton" onClick={openModal}>Add Product</button>
            <AddProductModal isOpen={modalIsOpen} onRequestClose={closeModal} />
            <button className="logoutButton" onClick={handleLogout}>LogOut</button>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default SellerDashboardPage;
