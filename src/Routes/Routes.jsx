import { createBrowserRouter } from "react-router-dom";
import App from "../Layouts/App";
import Home from "../Pages/Home/Home";
import CartPage from "../Pages/CartPage/CartPage";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
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
        ]
    }
])

export default router;