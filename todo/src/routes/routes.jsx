import { Route, Routes } from "react-router";
import ECommerceLanding from "../pages/e_commerce_landing";
import SingleProductPage from "../pages/single_product_page";
import ProductPage from "../pages";
import CartPage from "../pages/cart";

export default function AppRoutes() {
    return (

        <Routes>
            <Route path="/" element={<ECommerceLanding />} />
            <Route path="product">
                <Route element={<ProductPage />} index />
                <Route path=":productId" element={<SingleProductPage />} />
                <Route path="cart" element={<CartPage />} />

            </Route>


        </Routes>

    );
}