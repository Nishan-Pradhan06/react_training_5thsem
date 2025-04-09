import { Link, Outlet, Route, Routes } from "react-router";
import ECommerceLanding from "../pages/e_commerce_landing";
import SingleProductPage from "../pages/single_product_page";
import ProductPage from "../pages";
import CartPage from "../pages/cart";

export default function AppRoutes() {
    return (

        <Routes>
            <Route path="/" element={
                <>
                    <Navbar />
                    <Outlet />
                    <Footer />
                </>
            }>

                <Route index element={<ECommerceLanding />} />
                <Route path="product">
                    <Route element={<ProductPage />} index />
                    <Route path=":productId" element={<SingleProductPage />} />
                    <Route path="cart" element={<CartPage />} />

                </Route>
                <Route path="*" element={<NotFound />} />
            </Route>

        </Routes>

    );
}

export function UserLayout() {
    return (
        <>
            <div>
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        </>
    )
}

//navigation bar

export function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-left">
                    <Link to={"/"} style={{ textDecoration: 'none' }}>
                        <div className="logo">OnePiece Shop</div>
                    </Link>
                    <div className="location">
                        <span className="location-icon">📍</span>
                        <div className="location-text">
                            <small>Deliver to</small>
                            <strong>Your Location</strong>
                        </div>
                    </div>
                </div>

                <div className="navbar-right">
                    <a href="#" className="nav-link">Sign In</a>
                    <a href="#" className="nav-link">Orders</a>
                    <a href="#" className="nav-link cart-icon">🛒 Cart</a>
                </div>
            </nav>
        </>
    )
}


export function Footer() {
    return (
        <>
            <footer className="ecom-footer">
                <div className="ecom-footer-container">
                    <div className="ecom-footer-section">
                        <h4>Customer Service</h4>
                        <ul>
                            <li>Help Center</li>
                            <li>Returns</li>
                            <li>Shipping Info</li>
                            <li>Track Order</li>
                        </ul>
                    </div>

                    <div className="ecom-footer-section">
                        <h4>About Us</h4>
                        <ul>
                            <li>Company Info</li>
                            <li>Careers</li>
                            <li>Press</li>
                            <li>Affiliate</li>
                        </ul>
                    </div>

                    <div className="ecom-footer-section">
                        <h4>Connect with Us</h4>
                        <ul className="ecom-footer-socials">
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">LinkedIn</a></li>
                        </ul>
                    </div>

                    <div className="ecom-footer-section">
                        <h4>Contact</h4>
                        <p>Email: support@shopnow.com</p>
                        <p>Phone: +1 800 555 1234</p>
                        <p>Mon - Fri: 9am - 6pm</p>
                    </div>
                </div>

                <div className="ecom-footer-bottom">
                    <p>&copy; {new Date().getFullYear()} ShopNow Inc. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export function NotFound() {
    return (
        <>
            <div className="notfound-container">
                <div className="notfound-content">
                    <h1 className="notfound-title">404</h1>
                    <p className="notfound-message">Oops! The page you're looking for doesn't exist.</p>
                    <a href="/" className="notfound-home-button">Go Back Home</a>
                </div>
            </div>
        </>
    )
}