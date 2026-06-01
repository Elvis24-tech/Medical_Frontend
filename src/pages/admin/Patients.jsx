import { useEffect, useState } from "react";
import api from "../../api/axios";

const Patients = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const res = await api.get("patients/");
        const data = res.data;

        setPatients(data.results || data || []);
      } catch (err) {
        console.error(err);
        setPatients([]);
      }
    };

    fetchPatients();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Patients</h1>

      <div className="bg-white p-6 rounded-lg shadow">
        {patients.length === 0 ? (
          <p>No patients found</p>
        ) : (
          patients.map((p) => (
            <div key={p.id} className="border-b py-2">
              {p.user?.username}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Patients;