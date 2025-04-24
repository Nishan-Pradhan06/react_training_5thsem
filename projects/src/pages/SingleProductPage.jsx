import React, { useState, useEffect } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { useNavigate, useParams } from "react-router";
import { useGetDecodedToken } from "../Hook/useGetDecodedToken";

export default function SingleProductPage() {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();
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
  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => setQuantity(quantity + 1);
  const decreaseQty = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-16 items-start">
      {/* Product Image */}
      <div className="flex justify-center">
        <img
          src={product?.image} // Replace with your actual image path
          alt="Robust Fish Oil"
          className="max-h-[450px] object-contain"
          style={{
            viewTimelineName: `product-${product?.id}`,
          }}
        />
      </div>

      {/* Product Details */}
      <div className="space-y-6">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
          {product?.title}
        </h1>
        <p className="text-xl font-bold text-green-600">{product?.price}</p>
        <p className="text-sm text-gray-500">
          Shipping is calculated at checkout
        </p>

        {/* Quantity Selector */}
        <div className="flex items-center space-x-4">
          <button
            onClick={decreaseQty}
            className="border px-3 py-1 rounded text-lg font-semibold cursor-pointer"
          >
            -
          </button>
          <span className="text-lg font-medium">{quantity}</span>
          <button
            onClick={increaseQty}
            className="border px-3 py-1 rounded text-lg font-semibold cursor-pointer"
          >
            +
          </button>
          <AddToCartButton product={product} />
        </div>

        {/* Description */}
        <div className="pt-6 border-t">
          <div className="flex items-center text-lg font-semibold text-gray-800 mb-2">
            <FaInfoCircle className="mr-2 text-cyan-600" />
            Description
          </div>
          <div className="text-gray-600 text-sm leading-relaxed space-y-2">
            <p>{product?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const AddToCartButton = ({ product }) => {
  const { userId } = useGetDecodedToken();
  const nav = useNavigate();
  console.log(userId);
  console.log(product);

  const handlAddToCart = async () => {
    const res = await fetch(`https://fakestoreapi.com/carts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
        products: [product],
      }),
    }); // <-- use a valid product ID
    const data = await res.json();
    if (data?.id) {
      nav("/cart");
    } else {
      window.alert("unable to add to cart");
    }
  };
  return (
    <button
      onClick={handlAddToCart}
      className="bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700 transition-all font-semibold ml-4 cursor-pointer"
    >
      ADD TO CART
    </button>
  );
};
