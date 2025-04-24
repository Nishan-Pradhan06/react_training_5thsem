export default function HeroSection() {
    return (
        <section className="mx-auto w-full mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 md:px-20 py-16 bg-gradient-to-b from-white to-gray-100">
            {/* Text Section */}
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                    Elevate Your Style<br /> With Every Purchase
                </h1>
                <p className="text-lg text-gray-600 max-w-md">
                    Discover the latest trends in fashion, electronics, and lifestyle. Shop now and enjoy exclusive deals.
                </p>
                <div className="flex gap-4">
                    <button className="bg-black text-white px-6 py-3 text-lg font-semibold rounded hover:bg-gray-800 transition">
                        🛒 Shop Now
                    </button>
                    <button className="border border-black text-black px-6 py-3 text-lg font-semibold rounded hover:bg-gray-100 transition">
                        Learn More
                    </button>
                </div>
            </div>

            {/* Image Section */}
            <div className="flex justify-center">
                <img
                    src="https://plus.unsplash.com/premium_vector-1682303136986-bd37617f9b75?q=80&w=2078&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://img.freepik.com/free-vector/flat-hand-drawn-people-shopping-sale-illustration_23-2148829747.jpg?semt=ais_country_boost&w=740"
                    alt="Hero Product"
                    className="rounded-3xl w-full max-w-md"
                />
            </div>
        </section>
    );
}
