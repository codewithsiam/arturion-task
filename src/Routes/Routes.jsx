import { createBrowserRouter } from "react-router-dom";
import App from "../Layouts/App";
import Home from "../Pages/Home/Home";
import CartPage from "../Pages/CartPage/CartPage";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import PaymentPage from "../Pages/PaymentPage/PaymentPage";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ErrorPage from "../Pages/Error/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/cart',
                element: <CartPage />,
            },
            {
                path: '/product-details',
                element: <ProductDetails />,
            },
            {
                path: '/payment',
                element: <PaymentPage />,
            },
            {
                path: '/about-us',
                element: <AboutUs />,
            },
        ]
    }
])

export default router;