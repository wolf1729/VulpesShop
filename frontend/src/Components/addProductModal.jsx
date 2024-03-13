/* eslint-disable react/prop-types */
import { useState } from 'react';
import Modal from 'react-modal';

// eslint-disable-next-line no-unused-vars
const AddProductModal = ({ isOpen, onRequestClose, onSubmit }) => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');

  //Function to add the product to the database and then add its id to the seller data 
  const handleSubmit = () => {
    //function to add the product
    onRequestClose()
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Form Modal"
    >
      <form onSubmit={e=> e.preventDefault()}>
        <input type="text" placeholder='name of the product' value={productName} onChange={(e) => setProductName(e.target.value)}/>
        <br />
        <input type="text" placeholder='price of the product' value={productPrice} onChange={(e) => setProductPrice(e.target.value)}/>
        <br />
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </Modal>
  );
};

export default AddProductModal
