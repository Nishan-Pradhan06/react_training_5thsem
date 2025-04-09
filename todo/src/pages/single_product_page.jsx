import { useState, useEffect } from "react";
import { Link, useParams } from "react-router";

export default function SingleProductPage() {
    const [product, setProduct] = useState([]);
    const { productId } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const getData = async () => {

        const res = await fetch(`https://fakestoreapi.com/products/${productId}`); // <-- use a valid product ID
        const data = await res.json();
        if (data) {
            setProduct(data);
        }

    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>

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
