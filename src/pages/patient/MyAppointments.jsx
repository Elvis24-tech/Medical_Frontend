import { useEffect, useState } from "react";
import { getPatientAppointments } from "../../api/appointments";

export default function MyAppointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await getPatientAppointments();
      setAppointments(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold">My Appointments</h2>

      {appointments.map((a) => (
        <div key={a.id} className="border p-3 my-2">
          <p>Doctor: {a.doctor}</p>
          <p>Date: {a.appointment_date}</p>
          <p>Status: {a.status}</p>
        </div>
      ))}
    </div>
  );
}