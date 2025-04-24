import React from "react";
import {
  FaClipboardList,
  FaUndoAlt,
  FaHeart,
  FaUserCircle,
  FaMapMarkedAlt,
  FaCreditCard,
  FaCrown,
  FaCog,
} from "react-icons/fa";
import ProfileHeader from "../component/ProfileHeader";
import StatCard from "../component/StatCard";
import InfoCard from "../component/InfoCard";


const UserProfile = () => {
  const user = {
    name: { firstname: "John", lastname: "Doe" },
    email: "john@gmail.com",
    username: "johnd",
    phone: "1-570-236-7033",
    profileImage: "https://i.pravatar.cc/150?img=3",
    badge: "Premium Member",
    stats: {
      orders: 23,
      returns: 2,
      wishlist: 5,
    },
    address: {
      street: "New Road",
      number: 7682,
      city: "Kilcoole",
      zipcode: "12926-3874",
      geolocation: { lat: "-37.3159", long: "81.1496" },
    },
    paymentMethod: {
      type: "Visa",
      cardNumber: "**** **** **** 4242",
    },
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 px-6 py-8 bg-white rounded-xl shadow-lg border border-gray-200">
      {/* Profile Header */}
      <ProfileHeader user={user} />

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
        <StatCard
          icon={<FaClipboardList />}
          value={user.stats.orders}
          label="Orders"
          colorClass="text-blue-500"
        />
        <StatCard
          icon={<FaUndoAlt />}
          value={user.stats.returns}
          label="Returns"
          colorClass="text-red-500"
        />
        <StatCard
          icon={<FaHeart />}
          value={user.stats.wishlist}
          label="Wishlist"
          colorClass="text-pink-500"
        />
      </div>

      {/* Profile Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 text-gray-700 text-sm">
        {/* Account Info */}
        <InfoCard icon={<FaUserCircle />} title="Account Info">
          <p>
            <strong>Username:</strong> {user.username}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Password:</strong> ********
          </p>
        </InfoCard>

        {/* Address Info */}
        <InfoCard icon={<FaMapMarkedAlt />} title="Shipping Address">
          <p>
            {user.address.number} {user.address.street}
          </p>
          <p>
            {user.address.city}, {user.address.zipcode}
          </p>
          <p>
            Lat: {user.address.geolocation.lat}, Long:{" "}
            {user.address.geolocation.long}
          </p>
        </InfoCard>

        {/* Payment Info */}
        <InfoCard icon={<FaCreditCard />} title="Payment Info">
          <p>
            <strong>Card Type:</strong> {user.paymentMethod.type}
          </p>
          <p>
            <strong>Card Number:</strong> {user.paymentMethod.cardNumber}
          </p>
        </InfoCard>

        {/* Settings */}
        <InfoCard icon={<FaCog />} title="Settings">
          <button className="text-blue-600 hover:underline text-sm">
            Change Password
          </button>
        </InfoCard>
      </div>
    </div>
  );
};

export default UserProfile;
