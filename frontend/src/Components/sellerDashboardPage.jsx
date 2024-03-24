import '../styles/sellerDashboardStyle.css';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AddProductModal from './addProductModal';
import { getSellerProductsAPI } from '../../utils/backendAPI';
import EachProductTab from '../Components/EachProductTab';

//THINGS TO ADD TO SELLER DASHBOARD: add-product, showing all products, delete the product

function SellerDashboardPage() {
  const [cookies, removeCookies] = useCookies(['user']);
  const user = cookies.user;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [sellerProductDetails, setSellerProductDetails] = useState([]);
  const navigate = useNavigate();
  console.log(user);
  
  useEffect(() => {
    const sellerProductList = async () => {
      try {
        const productIds = user.product;

        const productDetailsArray = [];

        for (const productId of productIds) {
          const details = await getSellerProductsAPI(productId);
          productDetailsArray.push(details);
        }

        setSellerProductDetails(productDetailsArray);
      } catch (err) {
        console.log(err);
      }
    };

    sellerProductList();
  }, [user.product]); // Include user.product in the dependency array

  // Function to render seller products
  const showingSellerProducts = () => {
    return sellerProductDetails.map((item) => (
      <EachProductTab
        key={item._id}
        productName={item.productName}
        productImg={item.productImg}
        productPrice={item.productPrice}
        productId={item._id}
        isBuyer={false}
      />
    ));
  };

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
          <div className="sellerbuttonContainer">
            <button className="addProductButton" onClick={openModal}>Add Product</button>
            <AddProductModal isOpen={modalIsOpen} onRequestClose={closeModal} />
            <button className="logoutButton" onClick={handleLogout}>LogOut</button>
          </div>
        </div>
        <div className='sellerProductContainer'>
          {showingSellerProducts()}
        </div>
      </div>
    </>
  );
}

export default SellerDashboardPage;
