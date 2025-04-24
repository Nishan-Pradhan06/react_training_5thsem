import React from "react";
import { FaCrown } from "react-icons/fa";

const ProfileHeader = ({ user }) => (
  <div className="flex flex-col md:flex-row md:justify-between md:items-center border-b pb-6">
    <div className="flex items-center space-x-6">
      <img
        src={user.profileImage}
        alt="Profile"
        className="w-24 h-24 rounded-full border-4 border-blue-100 shadow-md"
      />
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2">
          {user.name.firstname} {user.name.lastname}
          <span className="inline-flex items-center px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-semibold">
            <FaCrown className="mr-1" /> {user.badge}
          </span>
        </h1>
        <p className="text-sm text-gray-500 flex items-center mt-1">
          {user.email}
        </p>
      </div>
    </div>
    <button className="mt-4 md:mt-0 px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 text-sm">
      Edit Profile
    </button>
  </div>
);

export default ProfileHeader;
