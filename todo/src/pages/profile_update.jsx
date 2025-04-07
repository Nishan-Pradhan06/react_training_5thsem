import React, { useState } from "react";

const FacebookProfileForm = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        bio: "",
        birthday: "",
        profilePic: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
        alert("Profile Submitted!");
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold text-center mb-6">Facebook Profile Clone</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Bio</label>
                    <textarea
                        name="bio"
                        value={formData.bio}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                        rows={3}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Birthday</label>
                    <input
                        type="date"
                        name="birthday"
                        value={formData.birthday}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Profile Picture</label>
                    <input
                        type="file"
                        name="profilePic"
                        onChange={handleChange}
                        accept="image/*"
                        className="mt-1"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                >
                    Save Profile
                </button>
            </form>
        </div>
    );
};

export default FacebookProfileForm;
