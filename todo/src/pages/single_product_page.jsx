import { useState, useEffect } from "react";

export default function SingleProductPage() {
    const [product, setProduct] = useState({});

    const getData = async () => {
        try {
            const res = await fetch(`https://fakestoreapi.com/products/${id}`); // <-- use a valid product ID
            const data = await res.json();
            if (data) {
                setProduct(data);
            }
        } catch (error) {
            console.error("Error fetching product:", error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-left">
                    <div className="logo">OnePiece Shop</div>
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


            <div className="single-product-container">
                <div className="single-product-image-section">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="single-product-image"
                    />
                </div>

                <div className="single-product-details-section">
                    <h1 className="single-product-title">{product.title}</h1>
                    <p className="single-product-category">{product.category}</p>

                    {product.rating && (
                        <div className="single-product-rating">
                            <span>{product.rating.rate} ★</span>
                            <span className="single-review-count">({product.rating.count} ratings)</span>
                        </div>
                    )}

                    <p className="single-product-price">${product.price}</p>
                    <p className="single-product-description">{product.description}</p>
                    <button className="single-add-to-cart-button">Add to Cart</button>
                </div>
            </div>
        </>

    );
}
