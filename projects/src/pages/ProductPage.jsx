import React, { cache } from 'react';
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";
import { useEffect, useState } from "react";

export default function ProductPage() {
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
            {/* Header */}
            <div className="flex items-center justify-between mb-10">
                <h2 className="text-3xl font-bold text-gray-800">Explore All Products</h2>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-8">

                {/* Filter Sidebar */}
                <aside className="w-full md:w-1/4 bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-semibold mb-4">Filters</h3>

                    {/* Category Filter */}
                    <div className="mb-6">
                        <h4 className="text-lg font-medium mb-2">Category</h4>
                        <div className="space-y-2">
                            <label className="block"><input type="checkbox" /> Men's Clothing</label>
                            <label className="block"><input type="checkbox" /> Women's Clothing</label>
                            <label className="block"><input type="checkbox" /> Electronics</label>
                            <label className="block"><input type="checkbox" /> Jewelry</label>
                        </div>
                    </div>

                    {/* Price Filter */}
                    <div className="mb-6">
                        <h4 className="text-lg font-medium mb-2">Price</h4>
                        <div className="space-y-2">
                            <label className="block"><input type="radio" name="price" /> Under $50</label>
                            <label className="block"><input type="radio" name="price" /> $50 - $100</label>
                            <label className="block"><input type="radio" name="price" /> Above $100</label>
                        </div>
                    </div>

                    {/* Rating Filter */}
                    <div>
                        <h4 className="text-lg font-medium mb-2">Rating</h4>
                        <div className="space-y-2">
                            <label className="block"><input type="checkbox" /> 4 stars & up</label>
                            <label className="block"><input type="checkbox" /> 3 stars & up</label>
                        </div>
                    </div>
                </aside>

                {/* Product Grid */}
                <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <Link to={`/products/${product.id}`} key={product.id} viewTransition className="no-underline">
                            <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-4 flex flex-col gap-4 h-full">
                                <div className="h-64 flex justify-center items-center overflow-hidden rounded-xl bg-gray-100">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        style={{
                                            viewTimelineName: `product-${product.id}`
                                        }}
                                        className="object-contain h-full"
                                    />
                                </div>
                                <div className="space-y-2 flex-1">
                                    <h3 className="text-base font-semibold text-gray-800 line-clamp-2">
                                        {product.title}
                                    </h3>
                                    <div className="flex items-center gap-2">
                                        <FaStar className="text-yellow-400" />
                                        <span className="text-sm font-medium">{product.rating.rate}</span>
                                        <span className="text-xs text-gray-400">({product.rating.count})</span>
                                    </div>
                                    <p className="text-lg font-bold text-black">${product.price.toFixed(2)}</p>
                                </div>
                                <button className="mt-auto bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition font-medium">
                                    Add to Cart 🛒
                                </button>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}