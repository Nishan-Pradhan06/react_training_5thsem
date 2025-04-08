import { Route, Routes } from "react-router";
import ECommerceLanding from "../pages/e_commerce_landing";
import SingleProductPage from "../pages/single_product_page";
import ProductPage from "../pages";

export default function AppRoutes() {
    return (

        <Routes>
            <Route path="/" element={<ECommerceLanding />} />
            <Route path="product">
                <Route element={<ProductPage />}index  />
                <Route path=":id" element={<SingleProductPage />} />
            </Route>

        </Routes>

    );
}