import { useEffect, useState } from "react";
import api from "../../api/axios";

const Prescriptions = () => {
  const [prescriptions, setPrescriptions] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await api.get("medical/prescriptions/");
      setPrescriptions(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Prescriptions</h1>

      {prescriptions.map((p) => (
        <div key={p.id} className="border p-3 my-2 rounded bg-white">
          <p><b>Medication:</b> {p.medication_name}</p>
          <p><b>Dosage:</b> {p.dosage}</p>
          <p><b>Frequency:</b> {p.frequency}</p>
        </div>
      ))}
    </div>
  );
};

export default Prescriptions;