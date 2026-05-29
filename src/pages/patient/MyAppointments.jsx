import { useEffect, useState } from "react";
import { getPatientAppointments } from "../../api/appointments";

export default function MyAppointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await getPatientAppointments();
      setAppointments(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">My Appointments</h2>

      {appointments.length === 0 ? (
        <p className="text-gray-500">No appointments found</p>
      ) : (
        appointments.map((a) => (
          <div key={a.id} className="border p-3 my-2 rounded">
            <p>
              <strong>Doctor:</strong>{" "}
              {a.doctor_name || a.doctor || "Doctor"}
            </p>
            <p>
              <strong>Date:</strong> {a.appointment_date}
            </p>
            <p>
              <strong>Status:</strong> {a.status}
            </p>
          </div>
        ))
      )}
    </div>
  );
}