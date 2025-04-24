import React, { useState, useEffect } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { useNavigate, useParams } from "react-router";
import { useGetDecodedToken } from "../Hook/useGetDecodedToken";
import { toast } from "react-toastify";

export default function SingleProductPage() {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);

  // Fetch product details based on productId
  const getData = async () => {
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
      if (!res.ok) throw new Error("Failed to fetch product");
      const data = await res.json();
      setProduct(data);
    } catch (error) {
      console.error("Error fetching product:", error);
      toast.error("Failed to load product details. Please try again.");
    }
  };

  useEffect(() => {
    getData();
  }, [productId]);

  const increaseQty = () => setQuantity(quantity + 1);
  const decreaseQty = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-16 items-start">
      {/* Product Image */}
      <div className="flex justify-center">
        <img
          src={product?.image}
          alt={product?.title || "Product"}
          className="max-h-[450px] object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="space-y-6">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
          {product?.title}
        </h1>
        <p className="text-xl font-bold text-green-600">Rs. {product?.price}</p>
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
          <AddToCartButton product={product} quantity={quantity} />
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

const AddToCartButton = ({ product, quantity }) => {
  const { userId } = useGetDecodedToken();
  const nav = useNavigate();

  const handleAddToCart = async () => {
    if (!userId) {
      toast.error("You must be logged in to add items to the cart!");
      return;
    }

    if (!product) {
      toast.error("Product details are not available!");
      return;
    }

    try {
      const res = await fetch("https://fakestoreapi.com/carts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userId,
          products: [{ id: product.id, quantity }],
        }),
      });

      if (!res.ok) throw new Error("Failed to add product to cart");

      const data = await res.json();
      if (data?.id) {
        toast.success(`${product.title} has been added to your cart!`);
        nav("/cart");
      } else {
        toast.error("Unable to add the product to the cart.");
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      toast.error("An error occurred while adding the product to the cart.");
    }
  };

  return (
    <button
      onClick={handleAddToCart}
      className="bg-gray-900 text-white px-6 py-2 rounded hover:bg-gray-700 transition-all font-semibold ml-4 cursor-pointer"
    >
      ADD TO CART
    </button>
  );
};
