import React from "react";

function DoctorCard({ doctor }) {
  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white">
      <h2 className="text-lg font-bold">{doctor.name}</h2>
      <p className="text-gray-600">{doctor.specialty}</p>
      <p className="text-sm text-gray-500">{doctor.email}</p>
    </div>
  );
}

export default DoctorCard;