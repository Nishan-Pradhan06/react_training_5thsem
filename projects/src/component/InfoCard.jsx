import React from "react";

const InfoCard = ({ icon, title, children }) => (
  <div className="bg-white p-6 border rounded-lg shadow-sm space-y-2 hover:shadow transition">
    <h3 className="font-semibold mb-3 flex items-center text-gray-900">
      {icon} {title}
    </h3>
    {children}
  </div>
);

export default InfoCard;
