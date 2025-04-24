import React from 'react';
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";
import { useEffect, useState } from "react";


export default function ProductCardGrid() {
    const [products, setProducts] = useState([]);

    const getData = async () => {
        try {
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            setProducts(data);
        } catch (err) {
            console.error("Failed to fetch products:", err);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
      <section className="px-6 md:px-20 py-16 bg-gray-50">
        {/* Header with "Recent Products" and "View More" */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Recent Products</h2>
          <Link
            to="/products"
            className="text-black font-medium hover:underline hover:text-gray-700 transition"
          >
            View More →
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.slice(0, 8).map((product) => (
            <Link
              to={`/products/${product.id}`}
              key={product.id}
              className="no-underline"
            >
              <div className="w-full bg-white rounded-2xl shadow-md hover:shadow-lg transition p-4 flex flex-col gap-4 h-full">
                {/* Image */}
                <div className="h-64 flex justify-center items-center overflow-hidden rounded-xl bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="object-contain h-full"
                  />
                </div>

                {/* Info */}
                <div className="space-y-2 flex-1">
                  <h3 className="text-base font-semibold text-gray-800 line-clamp-2">
                    {product.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <FaStar className="text-yellow-400" />
                    <span className="text-sm font-medium">
                      {product.rating.rate}
                    </span>
                    <span className="text-xs text-gray-400">
                      ({product.rating.count})
                    </span>
                  </div>
                  <p className="text-lg font-bold text-black">
                    ${product.price.toFixed(2)}
                  </p>
                </div>

                {/* Button */}
                <Link className="w-full" to={``}>
                  <button className="w-full mt-auto bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition font-medium flex items-center justify-center gap-2 cursor-pointer">
                    Add to Cart 🛒
                  </button>
                </Link>
              </div>
            </Link>
          ))}
        </div>
      </section>
    );
}
