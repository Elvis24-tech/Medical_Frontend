import { useEffect, useState } from "react";
import api from "../../api/axios";

const MedicalHistory = () => {
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
      console.error(err);
      setRecords([]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="p-6">
        <p>Loading medical history...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Medical History
        </h1>

        <p className="text-gray-500 mt-2">
          View all consultations, diagnoses, treatments and prescriptions.
        </p>
      </div>

      {records.length === 0 ? (
        <div className="bg-white p-6 rounded-xl shadow">
          No medical records found.
        </div>
      ) : (
        <div className="space-y-6">

          {records.map((record) => (
            <div
              key={record.id}
              className="bg-white rounded-2xl shadow-lg p-6 border"
            >

              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-blue-700">
                  Medical Record #{record.id}
                </h2>

                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
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

                  <p>{record.patient_name}</p>
                </div>

                <div>
                  <p className="font-semibold text-gray-700">
                    Doctor
                  </p>

                  <p>{record.doctor_name}</p>
                </div>

                <div>
                  <p className="font-semibold text-gray-700">
                    Diagnosis
                  </p>

                  <p>{record.diagnosis}</p>
                </div>

                <div>
                  <p className="font-semibold text-gray-700">
                    Symptoms
                  </p>

                  <p>{record.symptoms}</p>
                </div>

              </div>

              <div className="mt-4">
                <p className="font-semibold text-gray-700">
                  Treatment
                </p>

                <p className="mt-1 text-gray-600">
                  {record.treatment}
                </p>
              </div>

              <div className="mt-4">
                <p className="font-semibold text-gray-700">
                  Doctor Notes
                </p>

                <p className="mt-1 text-gray-600">
                  {record.notes || "No notes available"}
                </p>
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

export default MedicalHistory;