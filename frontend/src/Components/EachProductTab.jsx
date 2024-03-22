import '../styles/eachProductContainer.css'
import { useCookies } from 'react-cookie';
import { addProductToCart } from '../../utils/buyerAPI';
import { deleteProduct } from '../../utils/backendAPI';

// eslint-disable-next-line react/prop-types
function EachProductTab({ productName, productPrice, productImg, productId, isBuyer=true }) {
    const [cookies] = useCookies(['user']);
    const user = cookies.user

    const addProductToCartFunction = async () => {
        try {
            await addProductToCart(productId, user._id);
            console.log('Product added to Cart');
        } catch (err) {
            console.log(err);
        }
    }

    const deleteingProductFunction = async(productId) => {
        try{
            await deleteProduct(productId)
            console.log('Item deleted')
        }
        catch(err) {
            console.log(err)
        }
    }

    return (
        <div className='productCont'>
            <img src={productImg} alt="Image" className='productImgContainer' />
            <div className='detailsContainer'>
                <p className='name'>{productName}</p>
                <p className='price'>{`<${productPrice}>`}</p>
            </div>
            <div className='buttonContainer'>
                {isBuyer ? (
                    <>
                        <button className='detailsButton'>Details</button>
                        <button className='cartButton' onClick={addProductToCartFunction}>Add To Cart</button>
                    </>
                ) : (
                    <button className='deleteButton' onClick={() => deleteingProductFunction(productId)}>Delete</button>
                )}
            </div>
        </div>
    );
}

export default EachProductTab;
