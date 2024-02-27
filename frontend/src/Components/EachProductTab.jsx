import '../styles/eachProductContainer.css'

// eslint-disable-next-line react/prop-types
function EachProductTab({ productName, productPrice, productImg }) {
    return (
        <div className='productCont'>
            <img src={productImg} alt="Image" className='imgContainer'/>
            <div className='detailsContainer'>
                <p className='name'>{productName}</p>
                <p className='price'>{`<${productPrice}>`}</p>
            </div>
            <div className='buttonContainer'>
                <button className='detailsButton'>Details</button>
                <button className='cartButton'>Add To Cart</button>
            </div>
        </div>
    );
}

export default EachProductTab;
