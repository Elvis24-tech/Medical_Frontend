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
      const res = await getAppointments();

      const list =
        res?.results ||
        res?.data ||
        (Array.isArray(res) ? res : []);

      setAppointments(list);
    } catch (err) {
      console.error("Failed to load appointments:", err);
      setAppointments([]);
    } finally {
      setLoading(false);
    }
  };

  const handleAction = async (id, action) => {
    try {
      if (action === "approve") await approveAppointment(id);
      if (action === "cancel") await cancelAppointment(id);
      if (action === "complete") await completeAppointment(id);

      await fetchData();
    } catch (err) {
      console.error("Action failed:", err);
    }
  };

  const safeAppointments = Array.isArray(appointments) ? appointments : [];

  if (loading) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">
        Doctor Appointments
      </h1>

      {safeAppointments.length === 0 ? (
        <p className="text-gray-500">No appointments found</p>
      ) : (
        safeAppointments.map((a) => (
          <div key={a.id} className="border p-3 my-2 rounded bg-white">
            
            <p>
              <b>Patient:</b> {a.patient_name || a.patient || "Unknown"}
            </p>

            <p>
              <b>Date:</b> {a.appointment_date} {a.appointment_time}
            </p>

            <p>
              <b>Status:</b>{" "}
              <span className="font-semibold">
                {a.status}
              </span>
            </p>

            {/* ✅ ACTIONS BASED ON STATUS */}
            <div className="flex gap-2 mt-3 flex-wrap">

              {a.status === "pending" && (
                <>
                  <button
                    onClick={() => handleAction(a.id, "approve")}
                    className="px-3 py-1 bg-blue-600 text-white rounded"
                  >
                    Approve
                  </button>

                  <button
                    onClick={() => handleAction(a.id, "cancel")}
                    className="px-3 py-1 bg-red-600 text-white rounded"
                  >
                    Cancel
                  </button>
                </>
              )}

              {a.status === "approved" && (
                <>
                  <button
                    onClick={() => handleAction(a.id, "complete")}
                    className="px-3 py-1 bg-green-600 text-white rounded"
                  >
                    Mark Complete
                  </button>

                  <button
                    onClick={() => handleAction(a.id, "cancel")}
                    className="px-3 py-1 bg-red-600 text-white rounded"
                  >
                    Cancel
                  </button>
                </>
              )}

              {a.status === "completed" && (
                <span className="text-green-600 font-medium">
                  Completed
                </span>
              )}

              {a.status === "cancelled" && (
                <span className="text-red-600 font-medium">
                  Cancelled
                </span>
              )}

            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Appointments;