import { useEffect, useState } from "react";
import {
  getAppointments,
  approveAppointment,
  cancelAppointment,
  completeAppointment
} from "../../api/appointments";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await getAppointments();
      setAppointments(data);
    } finally {
      setLoading(false);
    }
  };

  const handleAction = async (id, action) => {
    try {
      if (action === "approve") await approveAppointment(id);
      if (action === "cancel") await cancelAppointment(id);
      if (action === "complete") await completeAppointment(id);

      fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Doctor Appointments</h1>

      {appointments.map((a) => (
        <div key={a.id} className="border p-3 my-2 rounded bg-white">
          <p><b>Patient:</b> {a.patient_name || a.patient}</p>
          <p><b>Date:</b> {a.appointment_date}</p>
          <p><b>Status:</b> {a.status}</p>

          <div className="flex gap-2 mt-2">
            <button
              onClick={() => handleAction(a.id, "approve")}
              className="px-3 py-1 bg-blue-600 text-white rounded"
            >
              Approve
            </button>

            <button
              onClick={() => handleAction(a.id, "complete")}
              className="px-3 py-1 bg-green-600 text-white rounded"
            >
              Complete
            </button>

            <button
              onClick={() => handleAction(a.id, "cancel")}
              className="px-3 py-1 bg-red-600 text-white rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Appointments;