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