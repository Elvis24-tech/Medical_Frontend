import { useEffect, useState } from "react";
import api from "../../api/axios";

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const res = await api.get("patients/");
        const data = res.data?.results || res.data || [];

        console.log("PATIENTS:", data);

        setPatients(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Failed to fetch patients:", err);
        setPatients([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  if (loading) {
    return <div className="p-6">Loading patients...</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Patients</h1>

      {patients.length === 0 ? (
        <div className="bg-white p-6 rounded-lg shadow">
          No patients found
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {patients.map((patient) => (
            <div
              key={patient.id}
              className="bg-white shadow rounded-xl p-5 border"
            >
              <h2 className="text-lg font-semibold">
                {patient.user?.username ||
                  patient.username ||
                  patient.full_name ||
                  `Patient #${patient.id}`}
              </h2>

              <div className="mt-3 space-y-1 text-sm text-gray-600">
                <p>
                  <strong>ID:</strong> {patient.id}
                </p>

                {patient.user?.email && (
                  <p>
                    <strong>Email:</strong> {patient.user.email}
                  </p>
                )}

                {patient.phone && (
                  <p>
                    <strong>Phone:</strong> {patient.phone}
                  </p>
                )}

                {patient.gender && (
                  <p>
                    <strong>Gender:</strong> {patient.gender}
                  </p>
                )}

                {patient.date_of_birth && (
                  <p>
                    <strong>DOB:</strong> {patient.date_of_birth}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Patients;