import React from "react";
import { Link } from "react-router";

export default function CartPage() {
    const cartItems = [
        {
            id: 1,
            title: "Noise Cancelling Wireless Headphones",
            brand: "SoundMax",
            price: 149.99,
            quantity: 1,
            image:
                "https://images.unsplash.com/photo-1580894908361-967195033d8b?w=400",
        },
        {
            id: 2,
            title: "Portable Bluetooth Speaker",
            brand: "BoomBass",
            price: 89.99,
            quantity: 2,
            image:
                "https://images.unsplash.com/photo-1570819170848-3f01f91b3b84?w=400",
        },
    ];

    const subtotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

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
            <div className="cart-container">
                <h1 className="cart-title">Shopping Cart</h1>

                <div className="cart-items">
                    {cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                            <div className="cart-item-image">
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div className="cart-item-details">
                                <h3>{item.title}</h3>
                                <p>Brand: <strong>{item.brand}</strong></p>
                                <p className="item-price">${item.price.toFixed(2)}</p>
                                <div className="quantity-controls">
                                    <button>-</button>
                                    <span>{item.quantity}</span>
                                    <button>+</button>
                                </div>
                                <button className="remove-btn">Remove</button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="cart-summary">
                    <h2>Subtotal ({cartItems.length} items): <span>${subtotal.toFixed(2)}</span></h2>
                    <button className="checkout-btn">Proceed to Checkout</button>
                </div>
            </div>
        </>

    )
}