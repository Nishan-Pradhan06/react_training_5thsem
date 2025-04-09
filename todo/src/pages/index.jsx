import { useState, useEffect } from "react"
import { Link } from "react-router"

export default function ProductPage() {
    const [products, setProducts] = useState([])
    const getData = async () => {
        const res = await fetch("https://fakestoreapi.com/products")
        const data = await res.json()
        if (data && data.length) {
            setProducts(data)
        }
    }
    useEffect(() => {
        getData()
    }, [])
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

            <section className="product-grid">
                <h2 className="section-title">Explore Our Products</h2>

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
    )
}