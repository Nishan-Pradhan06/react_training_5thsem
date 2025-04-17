import React, { useState } from 'react';

const RegisterFormPage = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        username: '',
        password: '',
        phone: '',
        address: {
            number: '',
            street: '',
            city: '',
            zipcode: '',
            geolocation: {
                lat: '',
                long: ''
            }
        }
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name.includes('geolocation.')) {
            const geoField = name.split('.')[1];
            setFormData(prev => ({
                ...prev,
                address: {
                    ...prev.address,
                    geolocation: {
                        ...prev.address.geolocation,
                        [geoField]: value
                    }
                }
            }));
        } else if (name.includes('address.')) {
            const addressField = name.split('.')[1];
            setFormData(prev => ({
                ...prev,
                address: {
                    ...prev.address,
                    [addressField]: value
                }
            }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('User Data:', formData);
        // Submit data to API here
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 p-6">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-10 space-y-6 border border-gray-200"
            >
                <h2 className="text-3xl font-bold text-center text-gray-800">Create Account</h2>

                {/* Full Name */}
                <div className="flex gap-4">
                    <div className="w-1/2">
                        <label className="block mb-1 font-medium text-gray-700">First Name</label>
                        <input name="firstname" value={formData.firstname} onChange={handleChange} className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300" placeholder="John" required />
                    </div>
                    <div className="w-1/2">
                        <label className="block mb-1 font-medium text-gray-700">Last Name</label>
                        <input name="lastname" value={formData.lastname} onChange={handleChange} className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300" placeholder="Doe" required />
                    </div>
                </div>

                {/* Email, Username, Password */}
                <div>
                    <label className="block mb-1 font-medium text-gray-700">Email</label>
                    <input name="email" type="email" value={formData.email} onChange={handleChange} className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300" placeholder="you@example.com" required />
                </div>
                <div>
                    <label className="block mb-1 font-medium text-gray-700">Username</label>
                    <input name="username" value={formData.username} onChange={handleChange} className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300" placeholder="username123" required />
                </div>
                <div>
                    <label className="block mb-1 font-medium text-gray-700">Password</label>
                    <input name="password" type="password" value={formData.password} onChange={handleChange} className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300" placeholder="********" required />
                </div>

                {/* Phone */}
                <div>
                    <label className="block mb-1 font-medium text-gray-700">Phone</label>
                    <input name="phone" value={formData.phone} onChange={handleChange} className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300" placeholder="e.g., 123-456-7890" required />
                </div>

                {/* Address */}
                <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Address</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <input name="address.number" value={formData.address.number} onChange={handleChange} placeholder="Number" className="p-3 border rounded-md focus:ring focus:ring-blue-300" />
                        <input name="address.street" value={formData.address.street} onChange={handleChange} placeholder="Street" className="p-3 border rounded-md focus:ring focus:ring-blue-300" />
                        <input name="address.city" value={formData.address.city} onChange={handleChange} placeholder="City" className="p-3 border rounded-md focus:ring focus:ring-blue-300" />
                        <input name="address.zipcode" value={formData.address.zipcode} onChange={handleChange} placeholder="Zip Code" className="p-3 border rounded-md focus:ring focus:ring-blue-300" />
                    </div>
                </div>

                {/* Geolocation */}
                <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Geolocation</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <input name="geolocation.lat" value={formData.address.geolocation.lat} onChange={handleChange} placeholder="Latitude" className="p-3 border rounded-md focus:ring focus:ring-blue-300" />
                        <input name="geolocation.long" value={formData.address.geolocation.long} onChange={handleChange} placeholder="Longitude" className="p-3 border rounded-md focus:ring focus:ring-blue-300" />
                    </div>
                </div>

                <button type="submit" className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-all duration-300">
                    Register
                </button>
            </form>
        </div>
    );
};

export default RegisterFormPage;
