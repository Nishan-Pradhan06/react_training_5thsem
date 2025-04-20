import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

const USERID = 2;

export default function CartPage() {
    const [cartItems, setCartItems] = useState([]);

    const getData = async () => {
        try {
            const res = await fetch("https://fakestoreapi.com/carts");
            const data = await res.json();
            if (data && data.length) {
                const userCart = data.filter((cart) => cart?.userId === USERID);
                setCartItems(userCart);
            }
        } catch (error) {
            console.error("Failed to fetch cart items:", error);
        }
    };

    useEffect(() => {
        getData();
    }, []);


    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

            {!cartItems.length ? (
                <p className="flex justify-center items-center flex-col">
                <img
                    src="https://static.vecteezy.com/system/resources/previews/005/006/007/non_2x/no-item-in-the-shopping-cart-click-to-go-shopping-now-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg"
                    alt="Empty cart"
                    className="w-64 h-auto" 
                    />
                <span className="text-gray-500 text-lg ml-4">Your cart is empty</span>
            </p>

            ) : (
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-6">
                        {cartItems.map((cart) => (
                            <div key={cart.id} className="space-y-6">
                                {cart?.products?.map((product) => (
                                    <CartProduct cProduct={product} key={product.productId} />
                                ))}
                            </div>
                        ))}
                    </div>

                    {/* Summary */}
                    <div className="bg-gray-100 p-6 rounded-xl shadow h-fit">
                        <h2 className="text-xl font-semibold mb-4">Summary</h2>
                        <div className="flex justify-between mb-2">
                            <span>Subtotal</span>
                            <span>₹ 200</span>
                        </div>
                        <div className="flex justify-between mb-4 text-sm text-gray-500">
                            <span>Shipping</span>
                            <span>Calculated at checkout</span>
                        </div>
                        <hr className="mb-4" />
                        <div className="flex justify-between text-lg font-bold">
                            <span>Total</span>
                            <span>₹ 1000</span>
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

function CartProduct({ cProduct}) {
    const [product, setProduct] = useState();

    const getData = async () => {
        const res = await fetch(`https://fakestoreapi.com/products/${cProduct.productId}`);
        const data = await res.json();
        if (data) {
            setProduct(data);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="bg-white rounded-xl shadow p-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
                <img
                    src={product?.image}
                    alt={product?.title}
                    className="w-20 h-20 object-contain rounded"
                />
                <div>
                    <h2 className="font-semibold text-lg line-clamp-2 max-w-xs">{product?.title}</h2>
                    <p className="text-gray-600">₹ {product?.price}</p>
                    <div className="flex items-center mt-2 gap-2">
                        <button className="bg-gray-200 px-2 rounded hover:bg-gray-300 cursor-pointer" >-</button>
                        <span className="text-sm font-medium">
                            {cProduct?.quantity}
                        </span>
                        <button className="bg-gray-200 px-2 rounded hover:bg-gray-300 cursor-pointer" >+</button>
                    </div>
                </div>
            </div>
            <button className="text-red-500 hover:text-red-700 cursor-pointer" >
                <FaTrash />
            </button>
        </div>
    );
}
