import React from 'react';

const UserProfile = () => {
    const user = {
        address: {
            geolocation: {
                lat: "-37.3159",
                long: "81.1496"
            },
            city: "kilcoole",
            street: "new road",
            number: 7682,
            zipcode: "12926-3874"
        },
        id: 1,
        email: "john@gmail.com",
        username: "johnd",
        password: "m38rmF$",
        name: {
            firstname: "john",
            lastname: "doe"
        },
        phone: "1-570-236-7033"
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="mb-4">
                <h2 className="text-xl font-semibold text-gray-900">{user.name.firstname} {user.name.lastname}</h2>
                <p className="text-sm text-gray-500">{user.email}</p>
            </div>

            <div className="space-y-2 text-sm text-gray-700">
                <div>
                    <span className="text-gray-500">Username:</span> {user.username}
                </div>
                <div>
                    <span className="text-gray-500">Phone:</span> {user.phone}
                </div>
                <div>
                    <span className="text-gray-500">Password:</span> ********
                </div>
            </div>

            <div className="border-t mt-4 pt-4 text-sm space-y-1 text-gray-700">
                <h3 className="text-gray-900 font-medium">Address</h3>
                <div>{user.address.number} {user.address.street}</div>
                <div>{user.address.city}, {user.address.zipcode}</div>
                <div>Lat: {user.address.geolocation.lat}, Long: {user.address.geolocation.long}</div>
            </div>

            <button className="mt-6 w-full text-sm bg-gray-900 text-white py-2 rounded-md hover:bg-black transition-all">
                Edit Profile
            </button>
        </div>
    );
};

export default UserProfile;
