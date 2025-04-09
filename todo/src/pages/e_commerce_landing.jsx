import { Link } from "react-router";
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
                        <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }} key={product.id}>

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
                        </Link>
                    ))}
                </div>
            </section>
        </>
    );
}