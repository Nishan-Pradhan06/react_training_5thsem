import React from "react";

const CheckoutPage = () => {
  return (
    <div className="min-h-screen bg-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Checkout</h2>

        {/* Shipping Address Section */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-10 border">
          <h3 className="text-xl font-semibold mb-1">Shipping Address</h3>
          <p className="text-sm text-gray-500 mb-4">
            Enter your shipping details
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                First Name
              </label>
              <input
                type="text"
                placeholder="John"
                className="w-full border rounded-md px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Doe"
                className="w-full border rounded-md px-3 py-2"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium mb-1">Address</label>
              <input
                type="text"
                placeholder="123 Main St"
                className="w-full border rounded-md px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">City</label>
              <input
                type="text"
                placeholder="San Francisco"
                className="w-full border rounded-md px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">State</label>
              <select className="w-full border rounded-md px-3 py-2">
                <option>Select state</option>
                <option>California</option>
                <option>Texas</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">ZIP Code</label>
              <input
                type="text"
                placeholder="94103"
                className="w-full border rounded-md px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Country</label>
              <select className="w-full border rounded-md px-3 py-2">
                <option>United States</option>
                <option>Canada</option>
              </select>
            </div>
          </div>
        </div>

        {/* Payment Method Section */}
        <div className="bg-white shadow-md rounded-lg p-6 border">
          <h3 className="text-xl font-semibold mb-1">Payment Method</h3>
          <p className="text-sm text-gray-500 mb-4">
            Enter your payment details
          </p>

          <div className="flex items-center space-x-3">
            <input
              type="radio"
              id="creditCard"
              name="payment"
              className="accent-black"
            />
            <label htmlFor="creditCard" className="text-sm font-medium">
              Credit Card
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
