import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

export default function SearchProducts() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
        setFiltered(data); // Initial load
      } catch (err) {
        console.error("Failed to fetch products:", err);
      }
    };

    getData();
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchTerm(query);
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFiltered(filteredProducts);
  };

  return (
    <section className="px-6 md:px-20 py-16 bg-gray-50 min-h-screen">
      {/* Search Bar */}
      <div className="max-w-xl mx-auto mb-10">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search for a product..."
          className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black text-gray-700"
        />
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filtered.length > 0 ? (
          filtered.map((product) => (
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
                <button className="w-full mt-auto bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition font-medium flex items-center justify-center gap-2 cursor-pointer">
                  Add to Cart 🛒
                </button>
              </div>
            </Link>
          ))
        ) : (
          <div className="text-center text-gray-500 col-span-full">
            No products found.
          </div>
        )}
      </div>
    </section>
  );
}
