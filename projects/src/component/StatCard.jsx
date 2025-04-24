import React from "react";

const StatCard = ({ icon, value, label, colorClass }) => (
  <div className="bg-gray-50 p-5 rounded-xl shadow hover:shadow-md transition duration-200 text-center">
    <div className={`text-2xl mb-2 ${colorClass}`}>{icon}</div>
    <p className="text-lg font-semibold">{value}</p>
    <p className="text-sm text-gray-500">{label}</p>
  </div>
);

export default StatCard;
