import { useEffect, useState } from "react"
import { allProducts } from "../../utils/backendAPI"
import EachProductTab from '../Components/EachProductTab'

function AllProductPage() {
    // eslint-disable-next-line no-unused-vars
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
        return products.map((items) => (
            <EachProductTab key={items._id} productName={items.productName} productPrice={items.productPrice} productStock={items.productStock}/>
        ));
    }

    return (
        <>
        <div>
            {showProductsFunction()}
        </div>
        </>
    )
}

export default AllProductPage