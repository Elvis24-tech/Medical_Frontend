import { useEffect, useState } from "react";
import api from "../../api/axios";

const MedicalHistory = () => {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const res = await api.get("medical/records/");

        const data =
          res.data?.results ||
          res.data?.data ||
          res.data ||
          [];

        setRecords(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Failed to load medical records:", err);
        setRecords([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRecords();
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-6">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Medical History
        </h1>
        <p className="text-gray-500">
          Your past consultations and treatments
        </p>
      </div>

      {/* CONTENT */}
      {loading ? (
        <p className="text-gray-500">Loading records...</p>
      ) : records.length === 0 ? (
        <p className="text-gray-500">No medical history found</p>
      ) : (
        <div className="space-y-4">

          {records.map((record) => (
            <div
              key={record.id}
              className="bg-white p-5 rounded-xl shadow hover:shadow-md transition"
            >

              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">
                  {record.title || "Medical Record"}
                </h2>

                <span
                  className={`text-sm px-3 py-1 rounded-full ${
                    record.status === "Completed"
                      ? "bg-green-100 text-green-600"
                      : record.status === "Pending"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-blue-100 text-blue-600"
                  }`}
                >
                  {record.status}
                </span>
              </div>

              <p className="text-gray-500 mt-1">
                Doctor: {record.doctor?.user?.username || "N/A"}
              </p>

              <p className="text-gray-500 text-sm">
                Date: {record.date || record.created_at}
              </p>

              <p className="mt-3 text-gray-700">
                {record.notes || "No notes available"}
              </p>

            </div>
          ))}

        </div>
      )}

    </div>
  );
};

export default MedicalHistory;