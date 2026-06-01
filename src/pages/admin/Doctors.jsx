import { useEffect, useState } from "react";
import api from "../../api/axios";
import DoctorCard from "../../components/doctors/DoctorCard";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await api.get("doctors/");
        const data = res.data;

        setDoctors(data.results || data || []);
      } catch (err) {
        console.error("Failed to load doctors:", err);
        setDoctors([]);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  if (loading) {
    return <p className="p-6 text-gray-500">Loading doctors...</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Doctors</h1>

      {doctors.length === 0 ? (
        <p className="text-gray-500">No doctors found</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Doctors;