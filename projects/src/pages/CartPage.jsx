import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";

export default function CartPage() {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            price: 650,
            quantity: 2,
            image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        },
        {
            id: 2,
            name: "Mens Casual Premium Slim Fit T-Shirts",
            price: 450,
            quantity: 1,
            image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        },
    ]);

    const updateQuantity = (id, change) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        quantity: Math.max(1, item.quantity + change),
                    }
                    : item
            )
        );
    };

    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <div className="max-w-6xl mx-auto px-6 py-12">
            <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

            {cartItems.length === 0 ? (
                <p className="text-gray-500">Your cart is currently empty.</p>
            ) : (
                <div className="grid lg:grid-cols-3 gap-10">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-6">
                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center justify-between bg-white rounded-xl shadow p-4"
                            >
                                <div className="flex items-center space-x-4">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-20 h-20 object-contain rounded"
                                    />
                                    <div>
                                        <h2 className="font-semibold text-lg">{item.name}</h2>
                                        <p className="text-gray-600">₹ {item.price}</p>

                                        <div className="flex items-center mt-2 space-x-2">
                                            <button
                                                className="bg-gray-200 px-2 rounded hover:bg-gray-300"
                                                onClick={() => updateQuantity(item.id, -1)}
                                            >
                                                -
                                            </button>
                                            <span className="text-sm font-medium">
                                                {item.quantity}
                                            </span>
                                            <button
                                                className="bg-gray-200 px-2 rounded hover:bg-gray-300"
                                                onClick={() => updateQuantity(item.id, 1)}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <button className="text-red-500 hover:text-red-700 cursor-pointer">
                                    <FaTrash />
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Summary */}
                    <div className="bg-gray-100 p-6 rounded-xl shadow">
                        <h2 className="text-xl font-semibold mb-4">Summary</h2>
                        <div className="flex justify-between mb-2">
                            <span>Subtotal</span>
                            <span>₹ {totalPrice}</span>
                        </div>
                        <div className="flex justify-between mb-4">
                            <span>Shipping</span>
                            <span>Calculated at checkout</span>
                        </div>
                        <hr className="mb-4" />
                        <div className="flex justify-between text-lg font-bold">
                            <span>Total</span>
                            <span>₹ {totalPrice}</span>
                        </div>
                        <button className="w-full mt-6 bg-teal-600 text-white py-2 rounded hover:bg-teal-700 transition cursor-pointer">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
