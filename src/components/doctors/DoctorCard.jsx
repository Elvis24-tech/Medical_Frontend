const DoctorCard = ({ doctor }) => {
  return (
    <div className="bg-white shadow p-4 rounded-xl border">
      <h2 className="text-xl font-bold">
        Dr. {doctor.user_username || "Unknown"}
      </h2>

      <p>Specialization: {doctor.specialization || "N/A"}</p>
      <p>Department: {doctor.department || "General"}</p>
      <p>Experience: {doctor.experience || 0} years</p>
      <p>Fee: KES {doctor.fee || 0}</p>

      <span className="text-sm text-gray-500">
        {doctor.user_email}
      </span>
    </div>
  );
};

export default DoctorCard;