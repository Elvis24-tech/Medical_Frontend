import { useEffect, useState } from "react";
import api from "../../api/axios";

const Prescriptions = () => {
  const [prescriptions, setPrescriptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await api.get("medical/prescriptions/");
      setPrescriptions(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error(err);
      setError("Failed to load prescriptions.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="p-6 text-gray-600">
        Loading prescriptions...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 text-red-600">
        {error}
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Prescriptions</h1>

      {prescriptions.length === 0 ? (
        <p className="text-gray-500">No prescriptions found.</p>
      ) : (
        prescriptions.map((p) => (
          <div
            key={p.id}
            className="border p-4 my-3 rounded-lg bg-white shadow-sm hover:shadow-md transition"
          >
            <p>
              <b>Medication:</b> {p.medication_name || "N/A"}
            </p>
            <p>
              <b>Dosage:</b> {p.dosage || "N/A"}
            </p>
            <p>
              <b>Frequency:</b> {p.frequency || "N/A"}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default Prescriptions;