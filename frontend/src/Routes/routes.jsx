import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from '../App'
import SellerLoginPage from "../Components/sellerLoginPage";
import BuyerLoginPage from "../Components/buyerLoginPage";
import SellerSignupPage from "../Components/sellerSignupPage";
import BuyerSignupPage from "../Components/buyerSignupPage";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />
        },
        {
            path: "/sellerLogin",
            element: <SellerLoginPage />
        },
        {
            path: "/buyerLogin",
            element: <BuyerLoginPage />
        },
        {
            path: "/product/:productId",
        },
        {
            path: '/sellerSignup',
            element: <SellerSignupPage />
        },
        {
            path: '/buyerSignup',
            element: <BuyerSignupPage />
        }
    ]);

    return <RouterProvider router={router} />
}

export default Router;