import { useEffect, useState } from "react";
import api from "../../api/axios";

const MedicalRecords = () => {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRecords();
  }, []);

  const fetchRecords = async () => {
    try {
      const res = await api.get("medical/records/");
      const list =
        res?.data?.results ||
        res?.data ||
        (Array.isArray(res) ? res : []);

      setRecords(list);
    } catch (err) {
      console.error("Failed to fetch medical records:", err);
      setRecords([]);
    } finally {
      setLoading(false);
    }
  };

  const safeRecords = Array.isArray(records) ? records : [];

  if (loading) return <p className="p-4">Loading medical records...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Medical Records</h1>

      {safeRecords.length === 0 ? (
        <p className="text-gray-500">No medical records found</p>
      ) : (
        safeRecords.map((r) => (
          <div
            key={r.id}
            className="border p-4 my-2 rounded bg-white shadow-sm"
          >
            <p>
              <b>Patient:</b>{" "}
              {r.patient_name || r.patient || "Unknown"}
            </p>

            <p>
              <b>Diagnosis:</b> {r.diagnosis || "N/A"}
            </p>

            <p>
              <b>Treatment:</b> {r.treatment || "N/A"}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default MedicalRecords;