import "./ecommerce.css";
import { useEffect, useState } from "react";

export default function ECommerceLanding() {
    const [products, setProducts] = useState([]);
    const getData = async () => {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
    };
    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            {/* Navbar */}
            <nav className="navbar">
                <div className="navbar-left">
                    <div className="logo">ShopEase</div>
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

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <span className="discount-label">🔥 50% OFF Spring Sale!</span>
                    <h1>Upgrade Your Style & Tech</h1>
                    <p>Explore the latest trends in fashion, electronics, and home essentials — delivered fast and affordably.</p>
                    <button className="hero-button">Start Shopping</button>
                </div>
                <div className="hero-image">
                    <img
                        src="https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif"
                        alt="E-commerce promotion"
                    />
                </div>
            </section>

            {/* Product Grid */}
            <section className="product-grid">
                <h2 className="section-title">Explore Our Categories</h2>
                <div className="grid-container">
                    {products.map((product) => (
                        <div key={product.id} className="product-card">
                            <img
                                className="product-image"
                                src={product.image}
                                alt={product.title}
                            />
                            <div className="product-details">
                                <h3 className="product-title">{product.title}</h3>
                                <p className="product-price">${product.price.toFixed(2)}</p>
                                <div className="product-rating">
                                    <span>{product.rating.rate} ★</span>
                                    <span>({product.rating.count} reviews)</span>
                                </div>
                                <button className="product-button">Add to Cart</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}