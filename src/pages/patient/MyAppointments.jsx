import { useEffect, useState } from "react";
import { getAppointments } from "../../api/appointments";

export default function BookAppointment() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAppointments = async () => {
    try {
      const data = await getAppointments();
      setAppointments(data);
    } catch (err) {
      console.error("Failed to load appointments:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <div className="p-6 max-w-3xl mx-auto">

      <h2 className="text-2xl font-bold mb-6">
        My Appointments
      </h2>

      {loading ? (
        <p className="text-gray-500">Loading appointments...</p>
      ) : appointments.length === 0 ? (
        <p className="text-gray-500">No appointments yet</p>
      ) : (
        <div className="space-y-4">
          {appointments.map((appt) => (
            <div
              key={appt.id}
              className="border rounded-lg p-4 bg-white shadow-sm"
            >

              <p className="mb-1">
                <strong>Doctor:</strong>{" "}
                {appt.doctor?.user?.username || "N/A"}
              </p>

              <p className="mb-1">
                <strong>Date:</strong> {appt.appointment_date}
              </p>

              <p className="mb-1">
                <strong>Time:</strong> {appt.appointment_time}
              </p>

              <p className="mb-1">
                <strong>Reason:</strong> {appt.reason}
              </p>

              <p className="mb-1">
                <strong>Status:</strong>{" "}
                <span className="font-semibold">
                  {appt.status}
                </span>
              </p>

            </div>
          ))}
        </div>
      )}

    </div>
  );
}