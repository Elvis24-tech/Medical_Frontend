import { useEffect, useState } from "react";
import api from "../../api/axios";

const MedicalRecords = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetchRecords();
  }, []);

  const fetchRecords = async () => {
    try {
      const res = await api.get("medical/records/");
      setRecords(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Medical Records</h1>

      {records.map((r) => (
        <div key={r.id} className="border p-3 my-2 rounded bg-white">
          <p><b>Patient:</b> {r.patient}</p>
          <p><b>Diagnosis:</b> {r.diagnosis}</p>
          <p><b>Treatment:</b> {r.treatment}</p>
        </div>
      ))}
    </div>
  );
};

export default MedicalRecords;