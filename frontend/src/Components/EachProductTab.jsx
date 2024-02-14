// eslint-disable-next-line react/prop-types
function EachProductTab({ productName, productPrice, productStock }) {
    return (
        <>
        <div>
            <p>{productName}</p>
            <p>{productPrice}</p>
            <p>{productStock}</p>
        </div>
        </>
    )
}

export default EachProductTab