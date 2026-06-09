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

      const data =
        res.data?.results ||
        res.data ||
        [];

      setRecords(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Failed to fetch medical records:", err);
      setRecords([]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="p-6">
        <p>Loading medical records...</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Medical Records
        </h1>

        <p className="text-gray-500">
          View all patient diagnoses, treatments and prescriptions
        </p>
      </div>

      {records.length === 0 ? (
        <div className="bg-white rounded-xl shadow p-6">
          No medical records found
        </div>
      ) : (
        <div className="space-y-6">

          {records.map((record) => (
            <div
              key={record.id}
              className="bg-white rounded-2xl shadow-lg border p-6"
            >

              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-blue-600">
                  Record #{record.id}
                </h2>

                <span className="text-sm text-gray-500">
                  {new Date(
                    record.created_at
                  ).toLocaleDateString()}
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-4">

                <div>
                  <p className="font-semibold text-gray-700">
                    Patient
                  </p>
                  <p>
                    {record.patient_name ||
                      record.patient ||
                      "Unknown"}
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-gray-700">
                    Doctor
                  </p>
                  <p>
                    {record.doctor_name ||
                      record.doctor ||
                      "Unknown"}
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-gray-700">
                    Diagnosis
                  </p>
                  <p>{record.diagnosis || "N/A"}</p>
                </div>

                <div>
                  <p className="font-semibold text-gray-700">
                    Symptoms
                  </p>
                  <p>{record.symptoms || "N/A"}</p>
                </div>

              </div>

              <div className="mt-4">
                <p className="font-semibold text-gray-700">
                  Treatment
                </p>
                <p>{record.treatment || "N/A"}</p>
              </div>

              <div className="mt-4">
                <p className="font-semibold text-gray-700">
                  Doctor Notes
                </p>
                <p>{record.notes || "No notes available"}</p>
              </div>

              {record.prescriptions?.length > 0 && (
                <div className="mt-6">

                  <h3 className="font-bold text-lg mb-3">
                    Prescriptions
                  </h3>

                  <div className="space-y-3">

                    {record.prescriptions.map((p) => (
                      <div
                        key={p.id}
                        className="bg-gray-50 border rounded-lg p-4"
                      >
                        <p>
                          <strong>Medicine:</strong>{" "}
                          {p.medication_name}
                        </p>

                        <p>
                          <strong>Dosage:</strong>{" "}
                          {p.dosage}
                        </p>

                        <p>
                          <strong>Frequency:</strong>{" "}
                          {p.frequency}
                        </p>

                        <p>
                          <strong>Duration:</strong>{" "}
                          {p.duration}
                        </p>

                        <p>
                          <strong>Instructions:</strong>{" "}
                          {p.instructions || "None"}
                        </p>
                      </div>
                    ))}

                  </div>

                </div>
              )}

            </div>
          ))}

        </div>
      )}

    </div>
  );
};

export default MedicalRecords;