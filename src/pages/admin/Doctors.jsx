import { useEffect, useState } from "react";
import api from "../../api/axios";
import DoctorCard from "../../components/doctors/DoctorCard";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await api.get("doctors/");
        const data = res.data;

        setDoctors(data.results || data || []);
      } catch (err) {
        console.error(err);
        setDoctors([]);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Doctors</h1>

      <div className="grid md:grid-cols-2 gap-4">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default Doctors;