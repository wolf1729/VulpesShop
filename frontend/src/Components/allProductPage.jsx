import { useEffect, useState } from "react"
import { allProducts } from "../../utils/backendAPI"
import EachProductTab from '../Components/EachProductTab'
import '../styles/allProductContainer.css'

function AllProductPage() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchAllProducts = async() => {
            try{
                const data = await allProducts()
                setProducts(data)
                console.log(data)
            }
            catch(err) {
                console.log(err)
            }
        }

        fetchAllProducts()
    }, [])

    const showProductsFunction = () => {
        return products.map((items) => {
    
            return (
                <EachProductTab
                    key={items._id}
                    productName={items.productName}
                    productPrice={items.productPrice}
                    productImg={items.productImg}
                />
            );
        });
    };
    
    return (
        <>
        <div className="allProductContainer">
            {showProductsFunction()}
        </div>
        </>
    )
}

export default AllProductPage